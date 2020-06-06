/* eslint-disable @typescript-eslint/no-use-before-define */
import { ContextValue } from "@theme-ui/core";
import { Theme as ThemeUITheme, useThemeUI } from "theme-ui";

import { Assign } from "../../lib";
import { buttons } from "./buttons";
import { colors } from "./colors";
import { forms } from "./forms";
import { links } from "./links";

declare module "theme-ui" {
  export interface Theme {
    useCustomProperties?: boolean;
  }
}

// TODO Contribute
type BadlyTypedThemeUIThemeKeys =
  | "forms"
  | "buttons"
  | "cards"
  | "links"
  | "layout";

const makeTheme = <
  T extends Assign<ThemeUITheme, Record<BadlyTypedThemeUIThemeKeys, unknown>>
>(
  t: T
): T => t;

export const theme = makeTheme({
  useCustomProperties: true,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [0.75, 0.875, 1, 1.25, 1.5, 2, 3, 4, 4.5, 5.25].map(
    (x) => `${x}em`
  ),
  sizes: {
    container: 1100,
    containerThin: 720,
  },
  radii: {
    none: 0,
    "rounded-sm": ".125rem",
    rounded: ".25rem",
    "rounded-lg": ".5rem",
    round: 999999,
  },
  shadows: {
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },
  colors,
  initialColorModeName: "light",
  useColorSchemeMediaQuery: false, // TODO
  useBodyStyles: false,
  fonts: {
    body:
      "system-ui, -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif",
    heading:
      "system-ui, -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif",
    monospace:
      "'Fira Code', 'Hack', 'Hasklig', 'Inconsolata', 'Menlo', 'Consolas'",
  },
  fontWeights: {
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
      "*": {
        outlineColor: "secondary",
        boxSizing: "border-box",
      },
      fontSize: "16px",
      lineHeight: "body",
      minHeight: "100vh",
      fontFamily: "body",
      color: "text",
      bg: "background",
      display: "flex",
      flexDirection: "column",
      textRendering: "optimizeLegibility",
      h1: {
        fontWeight: 800,
        fontSize: 5,
      },
      h2: {
        fontWeight: 700,
        fontSize: 4,
      },
      h3: {
        fontSize: 3,
      },
      "h4, h5, h6": {
        fontSize: 2,
      },
      p: { width: "70ch", maxWidth: "100%" },
    },
  },
  buttons,
  forms,
  cards: {
    primary: {
      position: "relative",
      boxShadow: "md",
      border: "1px solid rgba(0, 0, 0, 0.2)",
      borderRadius: "rounded-lg",
      background: "rgba(255, 255, 255, 0.9)",
      minHeight: "200px",
      width: "100%",
      minWidth: "400px",
      flexGrow: 1,
      maxWidth: "80vw",
    },
  },
  links,
  layout: {
    container: {},
    sheet: {
      width: "container",
      maxWidth: "100%",
      bg: "white",
      borderRadius: "rounded-lg",
      boxShadow: "md",
      p: 3,
      zIndex: 1,
    },
  },
  messages: {
    critical: {
      backgroundColor: "critical",
      borderLeftColor: "criticalDark",
    },
  },
});

export type Theme = typeof theme;
interface ThemeCtx extends Omit<ContextValue, "theme"> {
  theme: Theme;
}

// TODO: Make sure we deepmerge our base theme with user theme in the future
export const useTheme = (useThemeUI as unknown) as () => ThemeCtx;
