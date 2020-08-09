import { head } from "fp-ts/lib/Array";
import { flow } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";
import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "nookies";

import * as generated from "../../data/graphql-zeus";
import { Db, hasura } from "../../data/hasura";
import { zagrajmyRestApi } from "../../src/app/api-helpers/zagrajmyRestApi";
import { auth } from "../../src/app/auth";

const queryUserByEmail = (db: Db) => (email: string) =>
  db
    .query({
      cr_user: [
        { where: { email: { _eq: email } } },
        { uuid: true, auth0_id: true },
      ],
    })
    // I am assuming that there is only one user with this email for now.
    .then((x) => head(x.cr_user));

type CreateUserArg = Required<
  Pick<
    generated.cr_user_insert_input,
    "auth0_id" | "username" | "email" | "first_name" | "last_name"
  >
> &
  Pick<generated.cr_user_insert_input, "locale">;

// Todo: uncomment this after the rest API accepts email
// interface CreateUserResponseJson
//   extends Pick<
//     generated.cr_user,
//     | "auth0_id"
//     | "username"
//     | "date_joined"
//     | "email"
//     | "first_name"
//     | "last_name"
//     | "locale"
//     | "uuid"
//   > {}
// const createUser = (user: CreateUserArg): Promise<CreateUserResponseJson> =>
//   zagrajmyRestApi("crowd/users/", { json: user });

const createUser = (db: Db) => (user: CreateUserArg) => {
  return db
    .mutation({
      insert_cr_user: [{ objects: [user] }, { returning: { uuid: true } }],
    })
    .then(
      flow(
        (x) => x.insert_cr_user,
        O.fromNullable,
        O.chain((data) => head(data.returning.map((u) => u.uuid)))
      )
    );
};

const addAuth0Id = (db: Db, user: { uuid: string }, auth0Id: string) =>
  db.mutation({
    update_cr_user_by_pk: [
      { pk_columns: { uuid: user.uuid }, _set: { auth0_id: auth0Id } },
      { auth0_id: true },
    ],
  });

export default async function loggedIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth.getSession(req);

  const { "zm|redirectTo": Location } = parseCookies({
    req,
  });

  if (!Location) {
    console.error(parseCookies({ req }));
    throw new Error("zm|redirectTo cookie must be set");
  }

  const db = hasura.fromCookies(req);

  if (session && session.user.email_verified) {
    const { email } = session.user;

    // TODO: get rid of awaits, use TaskEither

    const [existingUser, auth0UserId] = await Promise.all([
      queryUserByEmail(db)(email),
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

    const user = O.toUndefined(existingUser);

    if (!user) {
      const uuid = O.toNullable(
        await createUser(db)({
          auth0_id: auth0UserId,
          email,
          username:
            session.user.nickname ||
            `${session.user.given_name} ${session.user.family_name}`,
          first_name: session.user.given_name,
          last_name: session.user.family_name,
          locale: session.user.locale,
        })
      );
      console.log(`User ${uuid} successfuly created.`);
    } else if (!user.auth0_id) {
      // if the user exists, but his account is not linked with Auth0, we'll
      // save the Auth0 ID to our database.
      await addAuth0Id(db, user, auth0UserId);
    }
  }

  res.writeHead(302, { Location }).end();
}
