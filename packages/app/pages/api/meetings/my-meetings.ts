import { NextApiRequest, NextApiResponse } from "next";
import { PromiseType } from "utility-types";

import { order_by } from "../../../data/graphql-zeus";
import { hasura } from "../../../data/hasura";
import { commonlyRequestedMeetingFields } from "../../../data/model-utils/Meeting";
import { auth, makeAuth } from "../../../src/app/auth";

function queryMeetings(auth0Id: string) {
  return hasura.query({
    cr_user: [
      { where: { auth0_id: { _eq: auth0Id } } },
      {
        organized_meetings: [
          { order_by: [{ created_at: order_by.desc }] },
          commonlyRequestedMeetingFields,
        ],
        meetings: [
          // offset can wait now
          { limit: 20, order_by: [{ meeting: { created_at: order_by.desc } }] },
          {
            meeting: commonlyRequestedMeetingFields,
          },
        ],
      },
    ],
  });
}

export type MyMeetingsResult = PromiseType<
  ReturnType<typeof queryMeetings>
>["cr_user"][0];

export default auth.requireAuthentication(async function myMeetings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", "no-store");

  const session = await makeAuth(req)!.getSession(req);

  const data = await queryMeetings(session?.user.sub || "");

  return res.status(200).send(data.cr_user[0]);
});
