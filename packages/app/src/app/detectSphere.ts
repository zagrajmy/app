import { GetServerSidePropsContext } from "next";

import { getUrl } from "../lib/getUrl";

// We should add `isHub` column to sphere probably.
const HUBS = [
  { id: 1, domain: "zagrajmy.net" },
  { id: 2, domain: "zagrajmy.now.sh" },
];

function isHub(url: string, devSphereId?: number) {
  return (
    HUBS.find(
      (sphere) =>
        url.includes(`https://${sphere.domain}`) || devSphereId === sphere.id
    ) !== undefined
  );
}

/**
 * Detects current sphere from URL or query params `__dev_sphere_id` `__dev_sphere_domain`.
 */
export function detectSphere({
  query,
  req,
}: Pick<GetServerSidePropsContext, "query" | "req">) {
  const devSphereId =
    query.__dev_sphere_id === undefined
      ? undefined
      : Number(query.__dev_sphere_id);
  const url = getUrl(req);

  const domain = query.__dev_sphere_domain
    ? String(query.__dev_sphere_domain)
    : new URL(url).hostname;

  return {
    isHub: isHub(url, devSphereId),
    id: devSphereId,
    domain,
  };
}
