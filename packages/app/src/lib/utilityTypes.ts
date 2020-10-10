/* eslint-disable no-restricted-imports */
// imports are restricted in favor of this file

import type { Builtin } from "ts-essentials";
import type { Mutable, PromiseType } from "utility-types";

export type { Flavor, Brand, Dict } from "nom-ts";
export type {
  Assign,
  Required,
  Optional,
  DeepPartial,
  Mutable,
  PromiseType,
} from "utility-types";
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

export const asMutable = <T>(x: T): Mutable<T> => x as Mutable<T>;

export type AsyncReturnType<
  T extends (...args: any) => Promise<any>
> = PromiseType<ReturnType<T>>;

/**
 * @see https://stackoverflow.com/a/49402091/6003547
 */
export type KeysOfUnion<T> = T extends any ? keyof T : never;

export type Disjoint<TElements extends object[]> = {
  [I in keyof TElements]: TElements[I] &
    {
      [K in Exclude<
        KeysOfUnion<TElements[number]>,
        keyof TElements[I]
      >]?: never;
    };
}[number];
