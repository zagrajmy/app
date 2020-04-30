import { either, option } from "fp-ts";
import { Either } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";
import { ValidationError } from "io-ts";
import { formatValidationError } from "io-ts-reporters";

export const validationErrorToError = (ve: ValidationError): Error => {
  const errorMsg = pipe(
    formatValidationError(ve),
    option.map((s) => `: ${s}`),
    option.getOrElse(() => "")
  );

  return new Error(`Validation failed${errorMsg}`);
};

/**
 * throw for tests and error boundaries
 */
export const panic = (
  err: Error | Error[] | Either<Error | Error[], unknown>
): never => {
  if ("_tag" in err) {
    throw pipe(
      err,
      either.fold(
        panic,
        (value) =>
          new Error(`Expected Error, received ${JSON.stringify(value)}`)
      )
    );
  }
  if (Array.isArray(err)) {
    console.error("Multiple errors", ...err);
    throw err[0];
  }
  throw err;
};

export const getOrPanic = <T>(e: Either<Error | Error[], T>): T => {
  if (e._tag === "Left") {
    throw panic(e.left);
  }
  return e.right;
};
