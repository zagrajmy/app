import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "nookies";

import { makeAuth } from "../../src/app/auth";

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // HACK. Auth0 doesn't support one app on many domains too well
  req.headers.referer = parseCookies({ req })["zm|redirectTo"];

  try {
    await makeAuth(req)!.handleCallback(req, res, {
      redirectTo: "/api/logged-in",
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
