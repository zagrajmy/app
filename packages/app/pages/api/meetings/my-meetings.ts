import { NextApiRequest, NextApiResponse } from "next";
import { PromiseType } from "utility-types";

import { order_by } from "../../../data/graphql-zeus";
import { Db, hasura } from "../../../data/hasura";
import { auth, makeAuth } from "../../../src/app/auth";
import { requestedMeetingFields } from "./__requestedMeetingFields";

function queryMeetings(query: Db["query"], auth0Id: string) {
  return query({
    cr_user: [
      { where: { auth0_id: { _eq: auth0Id } } },
      {
        organized_meetings: [
          { order_by: [{ created_at: order_by.desc }] },
          requestedMeetingFields,
        ],
        meetings: [
          // offset can wait now
          { limit: 20, order_by: [{ meeting: { created_at: order_by.desc } }] },
          {
            meeting: requestedMeetingFields,
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
  const { query } = hasura.fromCookies(req);
  const session = await makeAuth(req)!.getSession(req);

  const data = await queryMeetings(query, session?.user.sub || "");

  return res.status(200).send(data.cr_user[0]);
});
