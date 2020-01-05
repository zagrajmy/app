import { NextApiRequest, NextApiResponse } from 'next';

import { auth } from '../../src/app/auth';

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.query);
  try {
    await auth.handleCallback(req, res, { redirectTo: '/' });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
