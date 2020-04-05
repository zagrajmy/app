import { IncomingMessage } from "http";
import fetch from "isomorphic-unfetch";

import { Db } from "../../../data/hasura";
import type { MyMeetingsResult } from "../../../pages/api/meetings/my-meetings";
import { RecentlyPublishedMeetingsResult } from "../../../pages/api/meetings/recently-published";
import { summon } from "../../lib";
import { getUrl } from "../../lib/getUrl";

// serverside

export const queryUuidForAuth0Id = (query: Db["query"], auth0Id: string) =>
  query({
    user: [{ where: { auth0_id: { _eq: auth0Id } } }, { uuid: true }],
  }).then((res) => res.user?.[0].uuid as string);

// clientside

// TODO: Use summon
export function getMyMeetings(
  req?: IncomingMessage
): Promise<MyMeetingsResult> {
  const baseUrl = req ? new URL(getUrl(req)).origin : "";
  const url = `${baseUrl}/api/meetings/my-meetings`;

  return fetch(url, { headers: req?.headers! as Record<string, string> }).then(
    (response) => {
      if (!response.ok) {
        const err = new Error(response.statusText);
        Object.assign(err, { response });
        throw err;
      }
      return response.json();
    }
  );
}

export function getRecentlyPublishedMeetings(
  req?: IncomingMessage
): Promise<RecentlyPublishedMeetingsResult> {
  return summon("/api/meetings/recently-published", undefined, req);
}
