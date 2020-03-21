import fetch from "isomorphic-unfetch";
import { record } from "fp-ts/lib/Record";
import { parseCookies } from "nookies";
import { NextApiRequest } from "next";

import { Chain } from "./graphql-zeus";
import { isDefined } from "../src/lib/isDefined";

const _global = typeof window !== "undefined" ? window : globalThis;
Object.assign(_global, { fetch: _global.fetch || fetch });

const { HASURA_URL } = process.env;

/**
 * configured by `zm|db-env` cookie
 */
const hasuraEnvs: Record<
  string,
  | {
      url: string;
      adminSecret?: string | undefined;
    }
  | undefined
> = {
  localhost: {
    url: "http://localhost:8080",
    adminSecret: "dev_only_password",
  },
  development: {
    url: "https://zagrajmy-db-dev.herokuapp.com",
    adminSecret: undefined,
  },
  production: HASURA_URL
    ? {
        url: HASURA_URL,
        adminSecret: process.env.HASURA_ADMIN_SECRET,
      }
    : undefined,
};

/**
 * creates a hasura graphql client for database env name
 */
export const hasura = (instance: string) => {
  const creds = hasuraEnvs[instance];

  if (!creds) {
    // I want this to fail fast and throw 500.
    throw new Error("wrong database instance: credentails missing");
  }

  return Chain(`${creds.url}/v1/graphql`, {
    headers: record.filter(
      { "X-Hasura-Admin-Secret": creds.adminSecret },
      isDefined
    ),
  });
};

hasura.fromNextReq = (req: NextApiRequest) => {
  return hasura(parseCookies({ req })["zm|db-env"] || "development");
};

export interface Db extends ReturnType<typeof hasura> {}
