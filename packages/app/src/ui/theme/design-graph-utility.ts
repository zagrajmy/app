//
// # Theme UI TypeScript Companion
//

import { SystemStyleObject } from "theme-ui";

// brewing a PR to theme-ui
// see https://jxnblk.com/blog/design-graph/
export type Variants<Keys extends string = string> = Record<
  Keys,
  SystemStyleObject
>;

/**
 * constructor for Design Graph variants objects
 */
export const variants = <K extends string>(v: Variants<K>) => v;

export type Scale<T> = Record<number | string, T>;
