//
// # Theme UI TypeScript Companion
//

import { ThemeUIStyleObject } from "theme-ui";

export type Variants<Keys extends string = string> = Record<
  Keys,
  ThemeUIStyleObject
>;

/**
 * constructor for Design Graph variants objects
 */
export const variants = <K extends string>(v: Variants<K>) => v;

export type Scale<T> = Record<number | string, T>;
