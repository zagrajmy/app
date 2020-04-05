import { record } from "fp-ts/lib/Record";
import { IncomingHttpHeaders, IncomingMessage } from "http";
import isomorphicUnfetch from "isomorphic-unfetch";

import { getUrl } from "./getUrl";
import { HttpError } from "./HttpError";
import { Assign, Json } from "./utilityTypes";

export function makeSummon(f: typeof fetch) {
  return function summon(
    info: RequestInfo,
    init?: Assign<RequestInit, { headers?: IncomingHttpHeaders; json?: Json }>,
    /** request to extract own URL from */
    req?: Pick<IncomingMessage, "headers">
  ) {
    const baseUrl = req ? new URL(getUrl(req)).origin : "";

    const headers = record.filter(
      { ...req?.headers, ...init?.headers },
      (s): s is string => s !== undefined
    );

    let newInfo: RequestInfo;
    if (typeof info === "string") {
      newInfo = baseUrl + info;
    } else {
      newInfo = new Request(baseUrl + info.url, info);
    }

    const newInit = init && { ...init, headers };
    if (newInit) {
      if ("json" in newInit) {
        newInit.body = JSON.stringify(newInit.json);
        newInit.method = "POST";
        delete newInit.json;
      }
      if (Object.keys(newInit.headers).length === 0) {
        delete newInit.headers;
      }
    }

    const requestPromise = newInit ? f(newInfo, newInit) : f(newInfo);
    return requestPromise.then((response) => {
      if (!response.ok) {
        throw new HttpError(response);
      }
      // TODO: match content-type
      return response.json();
    });
  };
}

export const summon = makeSummon(isomorphicUnfetch);
