type Key = string | number;

type Sigil<K extends Key, T extends string = string> = {
  [_ in K]: T;
};

export type TypeOf<K extends Key, T extends Sigil<K>> = T[K];

export type Cases<K extends Key, T extends Record<K, any>, R> = {
  [P in TypeOf<K, T>]: (val: Extract<T, Record<K, P>>) => R;
};

export function match<K extends Key>(key: K) {
  return function match1<T extends Sigil<K>, C extends Cases<K, T, any>>(
    value: T,
    cases: C
  ): ReturnType<C[keyof C]> {
    return cases[value[key]](value as Extract<T, Record<K, string>>);
  };
}

export const matchType = match("type");
export const matchKind = match("kind");
