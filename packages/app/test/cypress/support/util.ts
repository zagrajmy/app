import { array, either } from "fp-ts";
import { flow } from "fp-ts/lib/function";
import * as t from "io-ts";

import { failure, validationErrorToError } from "../../src/lib";

const ERROR_MSG = "Failed to read test account credentials JSON:";

export const TestAccountCreds = t.type({
  username: t.string,
  password: t.string,
});

export const decodeTestAccount = flow(
  (json?: string) =>
    json == null
      ? either.left([failure(ERROR_MSG)("json is undefined")])
      : either.parseJSON(json, reason => [failure(ERROR_MSG)(reason)]),
  either.chain(
    flow(
      TestAccountCreds.decode,
      either.mapLeft(array.map(validationErrorToError))
    )
  )
);
