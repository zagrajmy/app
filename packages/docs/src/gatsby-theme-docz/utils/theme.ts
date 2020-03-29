import { useThemeUI } from "theme-ui";
import { get, pipe, defaultTo } from "lodash/fp";

export const themeProp = (str: string) => (props: {
  theme: Record<string, any>;
}) => {
  return get(`theme.${str}`, props);
};

export const usePrismTheme = () => {
  const {
      theme,
      colorMode,
    } = useThemeUI() as any /* todo in theme-ui/color-modes */;
  const getTheme = pipe(
    get("prismTheme"),
    defaultTo(get(`prism.${colorMode}`, theme))
  );
  return getTheme(theme);
};
