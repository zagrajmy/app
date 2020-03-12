import { NextApiResponse, NextApiRequest } from "next";

import { auth } from "../../src/app/auth";

export default async function users(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await auth.management.getUsers({
      page: 0,
      per_page: 100,
      fields: "nickname",
    });

    res.json({
      users: data,
    });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
