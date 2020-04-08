import { record } from "fp-ts/lib/Record";
import fetch from "isomorphic-unfetch";
import { NextApiRequest } from "next";
import { parseCookies } from "nookies";

import { isDefined } from "../src/lib/isDefined";
import { Chain } from "./graphql-zeus";

const _global = typeof window !== "undefined" ? window : globalThis;
Object.assign(_global, { fetch: _global.fetch || fetch });

const { HASURA_URL } = process.env;

type Instance = "localhost" | "development" | "production";

/**
 * configured by `zm|db-env` cookie
 */
const hasuraEnvs: Record<
  Instance,
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
export const hasura = (instance: Instance) => {
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

hasura.fromReq = (req: IncomingMessage) => {
  return hasura(
    (parseCookies({ req })["zm|db-env"] as Instance) || "development"
  );
};

export interface Db extends ReturnType<typeof hasura> {}
