import fetch from "isomorphic-unfetch";
import { IncomingMessage } from "http";

import { Db } from "../../../data/hasura";
import { getUrl } from "../../lib/getUrl";
import type { MyMeetingsResult } from "../../../pages/api/meetings/my-meetings";

export const queryUuidForAuth0Id = (query: Db["query"], auth0Id: string) =>
  query({
    user: [{ where: { auth0_id: { _eq: auth0Id } } }, { uuid: true }],
  }).then((res) => res.user?.[0].uuid as string);

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
