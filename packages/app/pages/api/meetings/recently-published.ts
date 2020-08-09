import { NextApiRequest, NextApiResponse } from "next";
import { assert } from "ts-essentials";
import { PromiseType } from "utility-types";

import { order_by } from "../../../data/graphql-zeus";
import { Db, hasura } from "../../../data/hasura";
import { detectSphere } from "../../../src/app/detectSphere";
import { requestedMeetingFields } from "./__requestedMeetingFields";

function queryRecentlyPublished(
  query: Db["query"],
  sphereDomain: string,
  limit: number
) {
  return query({
    nb_meeting: [
      {
        where: {
          sphere: { django_site: { domain: { _eq: sphereDomain } } },
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
>["nb_meeting"];

export default async function recentlyPublishedMeetings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { domain } = detectSphere({ query: req.query, req });

  const { query } = hasura.fromCookies(req);

  const limit = req.query.limit !== undefined ? Number(req.query.limit) : 6;
  assert(Number.isInteger(limit));

  const data: RecentlyPublishedMeetingsResult = (
    await queryRecentlyPublished(query, domain, limit)
  ).nb_meeting;

  return res.status(200).send(data);
}
