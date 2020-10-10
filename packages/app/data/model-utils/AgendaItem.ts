import createValidator, { registerType } from "typecheck.macro";

import { DeepPartial } from "../../src/lib/utilityTypes";
import { ch_agenda_item } from "../graphql-zeus";
import { _matchStatus, Cases, WithKnownStatus } from "./common";

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
