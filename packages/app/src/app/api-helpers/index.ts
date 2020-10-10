import { IncomingMessage } from "http";
import { ParsedUrlQuery } from "querystring";
import { assert } from "ts-essentials";

import { order_by } from "../../../data/graphql-zeus";
import { hasura } from "../../../data/hasura";
import { commonlyRequestedMeetingFields } from "../../../data/model-utils/Meeting";
import type { MyMeetingsResult } from "../../../pages/api/meetings/my-meetings";
import { detectSphere } from "../../../src/app/detectSphere";
import { AsyncReturnType, summon } from "../../lib";

export function getMyMeetings(
  req?: IncomingMessage
): Promise<MyMeetingsResult> {
  return summon("/api/meetings/my-meetings", {}, req);
}

export async function getRecentlyPublishedMeetings({
  query,
  req,
}: {
  query: ParsedUrlQuery;
  req?: IncomingMessage;
}) {
  const { domain } = detectSphere({ query, req });

  const limit = query.limit !== undefined ? Number(query.limit) : 6;
  assert(Number.isInteger(limit));

  const data = await hasura.query({
    nb_meeting: [
      {
        where: {
          sphere: { django_site: { domain: { _eq: domain } } },
          publication_time: { _lte: "now", _is_null: false },
          start_time: { _is_null: false },
        },
        order_by: [{ publication_time: order_by.desc }],
        limit,
      },
      commonlyRequestedMeetingFields,
    ],
  });

  return data.nb_meeting;
}

export type RecentlyPublishedMeetingsResult = AsyncReturnType<
  typeof getRecentlyPublishedMeetings
>;
