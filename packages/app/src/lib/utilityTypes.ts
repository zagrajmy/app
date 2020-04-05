/* eslint-disable no-restricted-imports */
// imports are restricted in favor of this file

export type { Flavor, Brand, Dict } from "nom-ts";
export type { Assign, Required, Optional, DeepPartial } from "utility-types";
export type { StrictOmit } from "ts-essentials";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];
