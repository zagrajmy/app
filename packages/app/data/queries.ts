import { head } from "fp-ts/lib/Array";
import { toUndefined } from "fp-ts/lib/Option";

import { ValueTypes } from "./graphql-zeus";
import { Db } from "./hasura";

export const queryUserByAuth0Id = <T extends ValueTypes["cr_user"]>(
  query: Db["query"],
  auth0Id: string,
  properties: T
) =>
  query({
    cr_user: [{ where: { auth0_id: { _eq: auth0Id } } }, properties],
  }).then((res) => toUndefined(head(res.cr_user || [])));
