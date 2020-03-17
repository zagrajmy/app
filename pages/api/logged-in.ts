import { NextApiResponse, NextApiRequest, NextPageContext } from "next";
import { head } from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import { flow } from "fp-ts/lib/function";
import { parseCookies } from "nookies";

import { hasura } from "../../data/hasura";
import { auth, UserUuid } from "../../src/app/auth";
import { cr_user } from "../../data/graphql-zeus";

const getCrUserByEmail = (email: string) =>
  hasura
    .query({
      cr_user: [{ where: { email: { _eq: email } } }, { uuid: true }],
    })
    // I am assuming that there is only one user with this email for now.
    .then(x => head(x.cr_user));

type CreateUserArg = Pick<
  cr_user,
  "uuid" | "username" | "email" | "first_name" | "last_name"
>;
const createUser = (user: CreateUserArg) =>
  hasura
    .mutation({
      insert_cr_user: [{ objects: [user] }, { returning: { uuid: true } }],
    })
    .then(
      flow(
        x => x.insert_cr_user,
        O.fromNullable,
        O.chain(data => head(data.returning.map(u => u.uuid)))
      )
    );

export default async function loggedIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth.getSession(req);

  if (session && session.user.email_verified) {
    const { email } = session.user;
    // TODO: get rid of awaits, use TaskEither

    const [existingUser, auth0UserId] = await Promise.all([
      getCrUserByEmail(email),
      auth.management
        .getUsersByEmail(email)
        .then(auth0Users =>
          O.toUndefined(head(auth0Users.map(u => u.user_id)))
        ),
    ] as const);

    if (!auth0UserId) {
      throw new Error(
        "user with this email not found auth0, yet we are logged in"
      );
    }

    let uuid: UserUuid | null = O.toNullable(existingUser)?.uuid;
    if (!uuid) {
      uuid = O.toNullable(
        await createUser({
          /**
           * Auth0 is the only source for our users,
           * so we use the same id for the user in zagrajmy db.
           * It isn't pretty, but it's useful.
           *
           * TODO: This requires change of uuid type to `text`.
           * A new db schema will probably follow.
           */
          uuid: auth0UserId,
          email,
          username: session.user.nickname,
          first_name: session.user.given_name,
          last_name: session.user.family_name,
        })
      );
      console.log(`User ${uuid} successfuly created.`);
    }
  }

  // TODO: Contribute tighter types to
  // https://github.com/maticzav/nookies/blob/master/src/index.ts
  const { "zm|redirectTo": Location } = parseCookies(({
    req,
  } as any) as NextPageContext);

  res.writeHead(302, { Location }).end();
}
