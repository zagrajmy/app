/**
 * @see https://github.com/system-ui/theme-ui/issues/825
 */
export function parseColor(cssVarColor: string) {
  return cssVarColor.replace(/^var\(--(\w+)(.*?), /, "").replace(/\)/, "");
}
