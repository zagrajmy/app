/* eslint-disable import/no-extraneous-dependencies */
import { defaultTo, get, pipe } from "lodash/fp";
import { useThemeUI } from "theme-ui";

export const themeProp = (str: string) => (props: {
  theme: Record<string, any>;
}) => {
  return get(`theme.${str}`, props);
};

export const usePrismTheme = () => {
  const {
    theme,
    colorMode,
  } = useThemeUI() as any; /* todo in theme-ui/color-modes */
  const getTheme = pipe(
    get("prismTheme"),
    defaultTo(get(`prism.${colorMode}`, theme))
  );
  return getTheme(theme);
};
