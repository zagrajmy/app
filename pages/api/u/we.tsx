import { NextApiRequest, NextApiResponse } from "next";

/**
 * Returns users from Auth0 Management API with matching email
 * for the user in current session if his email is verified.
 *
 * Linking identities out of the box is in Developer plan in Auth0,
 * this code is reminder to consider upgrading.
 */

import { auth, User } from "../../../src/app/auth";

export type WeResponseJson = { users: User[] };

export default async function we(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await auth.getSession(req);

    if (!session) {
      return res.status(401);
    }
    if (!session.user.email_verified) {
      return res.status(403);
    }

    const users = await auth.management.getUsersByEmail(session.user.email);

    const json: WeResponseJson = { users };
    return res.json(json);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
