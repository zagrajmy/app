import { NextApiResponse, NextApiRequest } from "next";
import { head } from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import { flow } from "fp-ts/lib/function";
import { parseCookies } from "nookies";

import { hasura, Db } from "../../data/hasura";
import { auth, UserUuid } from "../../src/app/auth";
import * as generated from "../../data/graphql-zeus";

const getCrUserByEmail = (db: Db) => (email: string) =>
  db
    .query({
      user: [{ where: { email: { _eq: email } } }, { uuid: true }],
    })
    // I am assuming that there is only one user with this email for now.
    .then((x) => head(x.user));

type CreateUserArg = Required<
  Pick<generated.user, "auth0_id" | "name" | "email">
>;
const createUser = (db: Db) => (user: CreateUserArg) =>
  db
    .mutation({
      insert_user: [{ objects: [user] }, { returning: { uuid: true } }],
    })
    .then(
      flow(
        (x) => x.insert_user,
        O.fromNullable,
        O.chain((data) => head(data.returning.map((u) => u.uuid)))
      )
    );

export default async function loggedIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth.getSession(req);

  const { "zm|redirectTo": Location } = parseCookies({
    req,
  });
  const db = hasura.fromNextReq(req);

  if (session && session.user.email_verified) {
    const { email } = session.user;

    // TODO: get rid of awaits, use TaskEither

    const [existingUser, auth0UserId] = await Promise.all([
      getCrUserByEmail(db)(email),
      auth.management
        .getUsersByEmail(email)
        .then((auth0Users) =>
          O.toUndefined(head(auth0Users.map((u) => u.user_id)))
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
        await createUser(db)({
          auth0_id: auth0UserId,
          email,
          name:
            session.user.nickname ||
            `${session.user.given_name} ${session.user.family_name}`,
        })
      );
      console.log(`User ${uuid} successfuly created.`);
    }
  }

  res.writeHead(302, { Location }).end();
}
