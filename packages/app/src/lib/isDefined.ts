export function isDefined<T>(x: T): x is Exclude<T, undefined | null> {
  return x != null;
}
