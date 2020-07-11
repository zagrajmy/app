import { GetServerSidePropsContext } from "next";

import { getUrl } from "../lib/getUrl";

// We should add `isHub` column to sphere probably.
const HUBS = [{ domain: "zagrajmy.net" }, { domain: "zagrajmy.now.sh" }];

function isHub(url: string) {
  return (
    HUBS.find((sphere) => url.includes(`https://${sphere.domain}`)) !==
    undefined
  );
}

/**
 * Detects current sphere from URL or query parameter `__dev_sphere_domain`.
 */
export function detectSphere({
  query,
  req,
}: Pick<GetServerSidePropsContext, "query" | "req">) {
  const url = getUrl(req);

  const domain = query.__dev_sphere_domain
    ? String(query.__dev_sphere_domain)
    : new URL(url).hostname;

  return {
    isHub: isHub(url),
    domain,
  };
}
