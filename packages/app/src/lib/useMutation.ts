import { absurd } from "fp-ts/lib/function";
import { useReducer, useMemo, useRef, Dispatch } from "react";

import { assert } from "ts-essentials";

import { makeError } from "./makeError";

/**
 * @param mutation an async side effect which can fail and be manually retried
 */
export function useMutation<TResult, TArgs extends any[]>(
  mutation: (...args: TArgs) => Promise<TResult>
) {
  const [state, dispatch] = useReducer<
    useMutation.UseMutationReducer<TResult, TArgs>
  >(useMutation.reducer, {
    type: "standby",
  }) as [
    // this shouldn't be required
    useMutation.State<TResult, TArgs>,
    Dispatch<useMutation.Action<TResult, TArgs>>
  ];

  const stateRef = useRef(state);
  const mutationRef = useRef(mutation);
  stateRef.current = state;
  mutationRef.current = mutation;

  const functions = useMemo(() => {
    const run = (args: TArgs) => {
      return mutationRef
        .current(...args)
        .then((res) => {
          dispatch({ type: "success", payload: res });
          return res;
        })
        .catch((err: unknown) => {
          const error = makeError(err);
          dispatch({ type: "failure", payload: error });
          return error;
        });
    };

    const start = (...args: TArgs) => {
      const promise = run(args);
      dispatch({ type: "start", payload: { promise, args } });

      return promise;
    };

    const tryAgain = () => {
      const s = stateRef.current;
      assert(s.type === "failed");

      const promise = run(s.lastArgs);
      dispatch({ type: "try-again", payload: { promise } });

      return promise;
    };

    return {
      start,
      tryAgain,
    };
  }, []);

  return { state, ...functions };
}

export namespace useMutation {
  export type Action<R, A> =
    | { type: "start"; payload: { promise: Promise<R | Error>; args: A } }
    | { type: "failure"; payload: Error }
    | { type: "success"; payload: R }
    | { type: "confirm-success" }
    | { type: "try-again"; payload: { promise: Promise<R | Error> } };
  export type State<R, A> =
    | { type: "standby" }
    | { type: "in-progress"; promise: Promise<R | Error>; lastArgs: A }
    | { type: "failed"; error: Error; lastArgs: A }
    | { type: "succeeded"; result: R; lastArgs: A };

  export type UseMutationReducer<R, A> = <R, A>(
    s: State<R, A>,
    a: Action<R, A>
  ) => State<R, A>;

  export const reducer = <R, A>(
    s: State<R, A>,
    a: Action<R, A>
  ): State<R, A> => {
    switch (a.type) {
      case "start":
        assert(s.type === "standby");
        return {
          type: "in-progress",
          promise: a.payload.promise,
          lastArgs: a.payload.args,
        };
      case "success":
        assert(s.type === "in-progress");
        return {
          type: "succeeded",
          result: a.payload,
          lastArgs: s.lastArgs,
        };
      case "failure":
        assert(s.type === "in-progress");
        return {
          type: "failed",
          error: a.payload,
          lastArgs: s.lastArgs,
        };
      case "confirm-success":
        assert(s.type === "succeeded");
        return {
          type: "standby",
        };
      case "try-again":
        assert(s.type === "failed");
        return {
          type: "in-progress",
          promise: a.payload.promise,
          lastArgs: s.lastArgs,
        };
      default:
        throw absurd(a);
    }
  };
}
