export const makeError = (err: unknown): Error =>
  err instanceof Error ? err : new Error(JSON.stringify(err));
