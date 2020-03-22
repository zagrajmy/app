import { NextApiResponse, NextApiRequest } from "next";

import { auth } from "../../src/app/auth";

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await auth.handleLogout(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
