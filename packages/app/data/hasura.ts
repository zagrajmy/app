import { globals } from "../src/lib/summon";
import { Chain } from "./graphql-zeus";

if (typeof fetch === "undefined") {
  Object.assign(globalThis, { fetch: globals.fetch });
}

const HASURA_URL = process.env.NEXT_PUBLIC_HASURA_URL;
const ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;

export const hasura = Chain(`${HASURA_URL}/v1/graphql`, {
  headers: ADMIN_SECRET ? { "X-Hasura-Admin-Secret": ADMIN_SECRET! } : {},
});

export type Db = typeof hasura;
