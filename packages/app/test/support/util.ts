import { array, either } from "fp-ts";
import { flow } from "fp-ts/lib/function";
import * as t from "io-ts";
import { assert } from "ts-essentials";

import { failure, validationErrorToError } from "../../src/lib";

export const env = flow(
  (key: string) => Cypress.env(key),
  (s: string) => {
    const parsed = JSON.parse(s);
    assert(typeof parsed === "string");
    return parsed;
  }
);

export const AUTH0_DOMAIN: string = env("AUTH0_DOMAIN");

export const TestAccountCreds = t.type({
  username: t.string,
  password: t.string,
});

export const decodeTestAccount = flow(
  (json: string) =>
    either.parseJSON(json, (reason) => [
      failure("Failed to read test account credentials JSON:")(reason),
    ]),
  either.chain(
    flow(
      TestAccountCreds.decode,
      either.mapLeft(array.map(validationErrorToError))
    )
  )
);
