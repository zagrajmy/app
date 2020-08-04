// Django doesn't support enums by default.
// It uses a varchar with possible choices validated on the backend.
// We create typesafe `match` functions for these "enums" here.

import createValidator, { registerType } from "typecheck.macro";

import { TypeOf } from "../src/lib/match";
import { DeepPartial } from "../src/lib/utilityTypes";
import { ch_agenda_item, ch_festival } from "./graphql-zeus";

type Cases<T extends Record<"status", string>, R> = {
  [P in TypeOf<"status", T>]: (val: T & { status: P }) => R;
};

type WithKnownStatus<T, Status> = Omit<T, "status"> & { status: Status };

function _matchStatus<T extends { status: string }, C extends Cases<T, any>>(
  value: T,
  cases: C
): ReturnType<C[keyof C]> {
  return cases[value.status as keyof C](
    value as T & { status: symbol } /* ? */
  );
}

export namespace AgendaItem {
  /**
   * @see https://github.com/zagrajmy/backend/pull/77/files#diff-896641784877d9eddef0ad062b7d8d1cR227
   *
   * self.helper or not self.meeting or not self.room -> unassigned
   * self.meeting_confirmed and self.helper_confirmed -> confirmed
   * otherwise -> unconfirmed
   */
  export type Status = "unassigned" | "unconfirmed" | "confirmed";
  const isStatus = createValidator<Status>();
  registerType("Status");

  /**
   * @see https://github.com/zagrajmy/backend/pull/77/files#diff-896641784877d9eddef0ad062b7d8d1cR90
   */
  const DEFAULT_STATUS: Status = "unassigned";

  export const matchStatus = <
    T extends DeepPartial<ch_agenda_item> & {
      status: ch_agenda_item["status"];
    },
    C extends Cases<WithKnownStatus<T, Status>, any>
  >(
    agendaItem: T,
    cases: C
  ) => {
    const { status } = agendaItem;
    return _matchStatus(
      { ...agendaItem, status: isStatus(status) ? status : DEFAULT_STATUS },
      cases
    );
  };
}

export namespace Festival {
  /**
   * @see https://github.com/zagrajmy/backend/pull/77/files#diff-896641784877d9eddef0ad062b7d8d1cR95
   */
  export type Status =
    | "draft"
    | "ready"
    | "proposal"
    | "agenda"
    | "ongoing"
    | "past";

  const isStatus = createValidator<Status>();
  registerType("Status");

  /**
   * @see https://github.com/zagrajmy/backend/pull/77/files#diff-896641784877d9eddef0ad062b7d8d1cR90
   */
  const DEFAULT_STATUS: Status = "draft";

  export const matchStatus = <
    T extends DeepPartial<ch_festival> & { status: ch_festival["status"] },
    C extends Cases<WithKnownStatus<T, Status>, any>
  >(
    festival: T,
    cases: C
    // types are different and this is pretty small anyway
    // eslint-disable-next-line sonarjs/no-identical-functions
  ) => {
    const { status } = festival;
    return _matchStatus(
      { ...festival, status: isStatus(status) ? status : DEFAULT_STATUS },
      cases
    );
  };
}
