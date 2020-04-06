import { NextApiRequest, NextApiResponse } from "next";
import { PromiseType } from "utility-types";

import { order_by } from "../../../data/graphql-zeus";
import { Db, hasura } from "../../../data/hasura";
import { requestedMeetingFields } from "./__requestedMeetingFields";

function queryRecentlyPublished(query: Db["query"], limit: number) {
  return query({
    meeting: [
      {
        where: { publication_time: { _lte: "now", _neq: null } },
        order_by: [{ publication_time: order_by.desc }],
        limit,
      },
      requestedMeetingFields,
    ],
  });
}

export type RecentlyPublishedMeetingsResult = PromiseType<
  ReturnType<typeof queryRecentlyPublished>
>["meeting"];

export default async function recentlyPublishedMeetings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = hasura.fromReq(req);

  const data: RecentlyPublishedMeetingsResult = (
    await queryRecentlyPublished(query, 6)
  ).meeting;

  return res.status(200).send(data);
}
