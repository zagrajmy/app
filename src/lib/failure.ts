import { makeError } from "./makeError";

export const failure = (message: string) => (err?: unknown) => {
  const error = err === undefined ? new Error() : makeError(err);

  error.message = `${message}\n${error.message}`;
  return error;
};
