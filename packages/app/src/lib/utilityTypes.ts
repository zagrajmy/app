/* eslint-disable no-restricted-imports */
// imports are restricted in favor of this file

import type { Builtin } from "ts-essentials";

export type { Flavor, Brand, Dict } from "nom-ts";
export type { Assign, Required, Optional, DeepPartial } from "utility-types";
export type { StrictOmit, Builtin, Primitive } from "ts-essentials";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

export type JsonWithUndefined =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [property: string]: JsonWithUndefined }
  | JsonWithUndefined[];

export type NonEmpty = Exclude<Builtin, null | undefined>;
