import { IncomingMessage } from "http";

import { Db } from "../../../data/hasura";
import type { MyMeetingsResult } from "../../../pages/api/meetings/my-meetings";
import { RecentlyPublishedMeetingsResult } from "../../../pages/api/meetings/recently-published";
import { summon } from "../../lib";
import { generated } from "../../../data";

// serverside

export const queryUserByAuth0Id = <T extends generated.ValueTypes["user"]>(
  query: Db["query"],
  auth0Id: string,
  properties: T
) =>
  query({
    user: [{ where: { auth0_id: { _eq: auth0Id } } }, properties],
  }).then((res) => res.user?.[0]);

// clientside

// TODO: Use summon
export function getMyMeetings(
  req?: IncomingMessage
): Promise<MyMeetingsResult> {
  return summon("/api/meetings/my-meetings", {}, req);
}

export function getRecentlyPublishedMeetings(
  req?: IncomingMessage
): Promise<RecentlyPublishedMeetingsResult> {
  return summon("/api/meetings/recently-published", undefined, req);
}
