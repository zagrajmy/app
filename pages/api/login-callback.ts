import { NextApiRequest, NextApiResponse } from "next";

import { auth } from "../../src/app/auth";

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await auth.handleCallback(req, res, {
      redirectTo: `/api/logged-in?redirect-to=${encodeURIComponent(
        req.headers.referer || "/"
      )}`,
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
