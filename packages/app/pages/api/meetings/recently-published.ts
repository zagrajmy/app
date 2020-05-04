import { NextApiRequest, NextApiResponse } from "next";
import { assert } from "ts-essentials";
import { PromiseType } from "utility-types";

import { order_by } from "../../../data/graphql-zeus";
import { Db, hasura } from "../../../data/hasura";
import { requestedMeetingFields } from "./__requestedMeetingFields";

function queryRecentlyPublished(query: Db["query"], limit: number) {
  return query({
    meeting: [
      {
        where: {
          publication_time: { _lte: "now", _is_null: false },
          start_time: { _is_null: false },
        },
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
  const { query } = hasura.fromCookies(req);

  const limit = req.query.limit !== undefined ? Number(req.query.limit) : 6;
  assert(Number.isInteger(limit));

  const data: RecentlyPublishedMeetingsResult = (
    await queryRecentlyPublished(query, limit)
  ).meeting;

  return res.status(200).send(data);
}
