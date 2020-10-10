import createValidator, { registerType } from "typecheck.macro";

import { DeepPartial } from "../../src/lib/utilityTypes";
import { ch_festival } from "../graphql-zeus";
import { _matchStatus, Cases, WithKnownStatus } from "./common";

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
