import fetch from "isomorphic-unfetch";

import { Chain } from "./graphql-zeus";

const _global = typeof window !== "undefined" ? window : globalThis;
Object.assign(_global, { fetch: _global.fetch || fetch });

const { HASURA_URL, HASURA_ADMIN_SECRET } = process.env;

export const hasura = Chain(`${HASURA_URL}/v1/graphql`, {
  headers: {
    "X-Hasura-Admin-Secret": HASURA_ADMIN_SECRET!,
  },
});
