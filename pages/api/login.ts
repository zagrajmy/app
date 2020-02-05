import { NextApiResponse, NextApiRequest } from "next";

import { auth } from "../../src/app/auth";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    await auth.handleLogin(req, res, {
      authParams: { scope: "openid email profile" },
    });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
