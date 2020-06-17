import { config } from "dotenv";
import { exec } from "egzek";
import { assert } from "ts-essentials";

config();

const { HASURA_URL, HASURA_ADMIN_SECRET } = process.env;
assert(HASURA_URL);

exec(`
  gq ${HASURA_URL}/v1/graphql --introspect ${
  HASURA_ADMIN_SECRET
    ? `-H 'X-Hasura-Admin-Secret: ${HASURA_ADMIN_SECRET}'`
    : ""
} > data/schema.graphql
`);

declare global {
  interface ProcessEnv {
    HASURA_ADMIN_SECRET: string;
    HASURA_URL: string;
  }
}
