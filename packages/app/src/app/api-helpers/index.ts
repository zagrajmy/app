import { IncomingMessage } from "http";

import type { MyMeetingsResult } from "../../../pages/api/meetings/my-meetings";
import type { RecentlyPublishedMeetingsResult } from "../../../pages/api/meetings/recently-published";
import { summon } from "../../lib";

export function getMyMeetings(
  req?: IncomingMessage
): Promise<MyMeetingsResult> {
  return summon("/api/meetings/my-meetings", {}, req);
}

export function getRecentlyPublishedMeetings(
  req?: IncomingMessage,
  limit?: number
): Promise<RecentlyPublishedMeetingsResult> {
  return summon(
    "/api/meetings/recently-published",
    limit ? { searchParams: { limit: String(limit) } } : undefined,
    req
  );
}
