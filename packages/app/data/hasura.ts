import { record } from "fp-ts/lib/Record";
import { IncomingMessage } from "http";
import { parseCookies } from "nookies";

import { isDefined } from "../src/lib/isDefined";
import { globals } from "../src/lib/summon";
import { Chain } from "./graphql-zeus";

if (typeof fetch === "undefined") {
  Object.assign(globalThis, { fetch: globals.fetch });
}

const { HASURA_URL } = process.env;

type Instance = "localhost" | "production";

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
    url: "http://localhost:8081",
    adminSecret: "dev_only_password",
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

hasura.fromCookies = (req?: IncomingMessage) => {
  return hasura(
    (parseCookies({ req })["zm|db-env"] as Instance) || "production"
  );
};

export interface Db extends ReturnType<typeof hasura> {}
