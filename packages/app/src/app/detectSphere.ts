import { IncomingMessage } from "http";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

import { getUrl } from "../lib/getUrl";
import { DEV_SPHERE_DOMAIN_PARAM_NAME } from "../ui/Link";

// We should add `isHub` column to sphere probably.
const HUBS = [{ domain: "zagrajmy.net" }, { domain: "zagrajmy.now.sh" }];

function isHub(domain: string) {
  return HUBS.find((sphere) => domain === sphere.domain) !== undefined;
}

interface DetectSphereArgs {
  query: ParsedUrlQuery;
  req?: IncomingMessage;
}

/**
 * Detects current sphere from URL or query param DEV_SPHERE_DOMAIN_PARAM_NAME.
 */
export function detectSphere({ query, req }: DetectSphereArgs) {
  const url = getUrl(req);

  const domain = query[DEV_SPHERE_DOMAIN_PARAM_NAME]
    ? String(query[DEV_SPHERE_DOMAIN_PARAM_NAME])
    : new URL(url).hostname;

  return {
    isHub: isHub(domain),
    domain,
  };
}
