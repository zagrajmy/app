import { Chain } from "./graphql-zeus";

const { HASURA_URL } = process.env;

export const hasura = Chain(`${HASURA_URL}/v1/graphql`);
