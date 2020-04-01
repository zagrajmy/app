import { Errors } from "io-ts";
import { formatValidationError } from "io-ts-reporters";
import { compact } from "fp-ts/lib/Array";

export const formatValidationErrors = (errors: Errors) =>
  compact(errors.map(formatValidationError));
