import { record } from "fp-ts/lib/Record";
import { IncomingHttpHeaders, IncomingMessage } from "http";

import { getUrl } from "./getUrl";
import { HttpError } from "./HttpError";
import { Assign, JsonWithUndefined } from "./utilityTypes";

export const globals =
  typeof window === "undefined"
    ? {
        /* eslint-disable global-require */
        Request: require("node-fetch").Request as typeof Request,
        fetch: require("node-fetch").default,
        /* eslint-enable global-require */
      }
    : window;

export function makeSummon(f: typeof fetch, apiBaseUrl = "") {
  return function summon(
    info: RequestInfo,
    init?: Assign<
      RequestInit,
      {
        headers?: IncomingHttpHeaders;
        json?: JsonWithUndefined;
        searchParams?: Record<string, string> | URLSearchParams;
      }
    >,
    /** request to extract own URL from */
    req?: Pick<IncomingMessage, "headers">
  ) {
    if (
      process.env.NODE_ENV !== "production" &&
      typeof info === "string" &&
      info.startsWith("http") &&
      req
    ) {
      throw new Error(
        "`req` argument cannot be passed when request URL is external"
      );
    }

    const baseUrl = apiBaseUrl || (req ? new URL(getUrl(req)).origin : "");

    const headers = record.filter(
      {
        ...req?.headers,
        "Content-Type": "application/json",
        ...init?.headers,
      },
      (s): s is string => s !== undefined
    );

    let newInfo: RequestInfo;
    if (typeof info === "string") {
      newInfo = baseUrl + info;
    } else {
      newInfo = new globals.Request(baseUrl + info.url, info);
    }

    const newInit = init && { ...init, headers };
    if (newInit) {
      if (newInit.searchParams) {
        newInfo = new globals.Request(newInfo);
        const url = new URL(newInfo.url);
        url.search = new URLSearchParams(newInit.searchParams).toString();

        newInfo = new globals.Request(url.toString(), newInfo);

        delete newInit.searchParams;
      }

      if (newInit.json) {
        newInit.body = JSON.stringify(newInit.json);
        newInit.method = newInit.method || "POST";
        delete newInit.json;
      }

      if (Object.keys(newInit.headers).length === 0) {
        delete (newInit as Partial<typeof newInit>).headers;
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

/**
 * **IMPURE:**
 * - Throws `HttpError` on `4xx` and `5xx` responses.
 * - Throws `TypeError: Failed to fetch`.
 *
 * Headers are merged only if the second argument is not undefined.
 */
export const summon = makeSummon(globals.fetch);
