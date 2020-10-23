export interface ErrorObject
  extends Pick<Error, "name" | "message" | "stack"> {}

export const ErrorObject = {
  fromError(err: Error): ErrorObject {
    return {
      name: err.name,
      message: err.message,
      stack: err.stack,
    };
  },
  toError(serialized: ErrorObject): Error {
    return Object.assign(new Error(), serialized);
  },
};
