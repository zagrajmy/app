type Key = string | number;

type Sigil<K extends Key, T extends string = string> = {
  [_ in K]: T;
};

type TypeOf<K extends Key, T extends Sigil<K>> = T[K];

type FilterType<T, Matching> = T extends Matching ? T : never;

type Cases<K extends Key, T extends Record<K, any>, R> = {
  [P in TypeOf<K, T>]: (val: FilterType<T, { type: P }>) => R;
};

export function match<K extends Key>(key: K) {
  return function match1<T extends Sigil<K>, C extends Cases<K, T, any>>(
    value: T,
    cases: C
  ): ReturnType<C[keyof C]> {
    return cases[value[key]](value as FilterType<T, { type: string }>);
  };
}

export const matchType = match("type");
export const matchKind = match("kind");
