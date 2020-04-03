import { NextApiRequest, NextApiResponse } from "next";
import { PromiseType } from "utility-types";

import { hasura, Db } from "../../../data/hasura";
import { makeAuth, auth } from "../../../src/app/auth";
import { order_by } from "../../../data/graphql-zeus";

function queryMeetings(query: Db["query"], auth0Id: string) {
  const requestedMeetingFields = {
    id: true,
    title: true,
    description: true,
    start_time: true,
    end_time: true,
    guild: {
      id: true,
      name: true,
    },
    sphere_id: true,
    organizer: {
      name: true,
      email: true,
    },
  } as const;

  return query({
    user: [
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
>["user"][0];

export default auth.requireAuthentication(async function myMeetings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = hasura.fromReq(req);
  const session = await makeAuth(req)!.getSession(req);

  const data = await queryMeetings(query, session?.user.sub || "");

  return res.status(200).send(data.user[0]);
});
