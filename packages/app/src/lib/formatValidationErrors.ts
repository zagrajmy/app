import { compact } from "fp-ts/lib/Array";
import { Errors } from "io-ts";
import { formatValidationError } from "io-ts-reporters";

export const formatValidationErrors = (errors: Errors) =>
  compact(errors.map((e) => formatValidationError(e)));
