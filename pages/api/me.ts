import { NextApiRequest, NextApiResponse } from "next";

import { auth } from "../../src/app/auth";

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  try {
    await auth.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
