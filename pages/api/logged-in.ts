import { NextApiResponse, NextApiRequest, NextPageContext } from "next";
import { head } from "fp-ts/lib/Array";
import { option } from "fp-ts/lib/Option";
import { parseCookies } from "nookies";

import { hasura } from "../../data/hasura";
import { auth } from "../../src/app/auth";

const getCrUser = (email: string) =>
  hasura
    .query({
      cr_user: [{ where: { email: { _eq: email } } }, { uuid: true }],
    })
    // I am assuming that there is only one user with this email for now.
    .then(x => head(x.cr_user));

export default async function loggedIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth.getSession(req);

  // // TODO: find user by email in Hasura
  // // if it's not found, create one
  // // Leaving all optimizations (like relation (identityId, userUuid)) for later

  if (session && session.user.email_verified) {
    const existingUser = await getCrUser(session.user.email);
    option.map(existingUser, ({ uuid }) => {
      console.log(uuid);
    });
  }

  // TODO: Contribute tighter types to
  // https://github.com/maticzav/nookies/blob/master/src/index.ts
  const { "zm|redirectTo": Location } = parseCookies(({
    req,
  } as any) as NextPageContext);

  res.writeHead(302, { Location }).end();
}
