import { TypeOf } from "../../src/lib/match";

export type Cases<T extends Record<"status", string>, R> = {
  [P in TypeOf<"status", T>]: (val: T & { status: P }) => R;
};

export type WithKnownStatus<T, Status> = Omit<T, "status"> & { status: Status };

export function _matchStatus<
  T extends { status: string },
  C extends Cases<T, any>
>(value: T, cases: C): ReturnType<C[keyof C]> {
  return cases[value.status as keyof C](
    value as T & { status: symbol } /* ? */
  );
}
