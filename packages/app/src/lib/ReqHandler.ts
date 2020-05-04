import { fold } from "fp-ts/lib/Either";
import { flow } from "fp-ts/lib/function";
import * as TE from "fp-ts/lib/TaskEither";
import { NextApiResponse } from "next";

import { makeError } from "./makeError";
import { NonEmpty } from "./utilityTypes";

/**
 * meant for developers, not end users
 */
export type Message =
  | "unknown error"
  | "email not verified"
  | "method not handled"
  | "failed to update user";

export type ReqHandler<Args extends any[], Right> = (
  ...args: Args
) => TE.TaskEither<ReqHandler.Err, Right>;

type Result = TE.TaskEither<ReqHandler.Err, object>;

export namespace ReqHandler {
  export interface Err {
    status: number;
    error?: Error;
  }
  export function Err(status: number): (reason?: unknown) => Err;
  export function Err(status: number, reason: Message): Err;
  export function Err(
    status: number,
    reason?: NonEmpty
  ): Err | ((reason?: unknown) => Err) {
    return reason !== undefined
      ? { status, error: makeError(reason) }
      : (rsn?: unknown) => ({
          status,
          error: rsn === undefined ? undefined : makeError(rsn),
        });
  }

  export const left = flow(Err, TE.left);

  export function respond(result: Result, response: NextApiResponse) {
    return result().then(
      flow(
        fold(
          ({ error, status }) => {
            if (!error) {
              console.error("Unknown error!", { error, status });
              response.status(status).end();
            } else {
              console.error(error);
              response.status(status).send(error.stack);
            }
          },
          payload => {
            response.json(payload);
          }
        )
      )
    );
  }
}
