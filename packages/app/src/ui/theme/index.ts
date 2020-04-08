/* eslint-disable @typescript-eslint/no-use-before-define */
import { ContextValue } from "@theme-ui/core";
import { Theme as ThemeUITheme, useThemeUI } from "theme-ui";

import { Assign } from "../../lib";

import { buttons } from "./buttons";
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
    x => `${x}rem`
  ),
  sizes: {
    container: 1100,
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
  // https://palx.jxnblk.com/ > #e85554
  colors: {
    text: "#071d1d",
    background: "#f1eded",
    white: "#ffffff",
    gray: [
      "#faf9f9",
      "#f1eded",
      "#e6dfdf",
      "#dbd1d1",
      "#cec1c1",
      "#c1afaf",
      "#b19b9b",
      "#9a8484",
      "#796868",
      "#473d3d",
    ],
    primary: "#e85554",
    primaryLight: "#ea6463",
    primaryDark: "#d34e4d",
    secondary: "#5654e8",
    accent: "#5654e8", // blue in triad of primary
    muted: "rgba(0, 0, 0, 0.6)",
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
      },
    },
  },
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
    heading: "bold",
  },
  styles: {
    root: {
      fontSize: "16px",
      lineHeight: 1.4,
      minHeight: "100vh",
      fontFamily: "body",
      color: "text",
      bg: "background",
      display: "flex",
      flexDirection: "column",
      textRendering: "optimizeLegibility",
      "*": {
        outlineColor: "secondary",
      },
      // TODO:
      h1: {
        fontWeight: 800,
        fontSize: 8,
      },
      h2: {
        fontWeight: 700,
        fontSize: 7,
        letterSpacing: "-0.049375rem",
      },
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
      width: "800px",
      maxWidth: "80vw",
      margin: "1em",
    },
  },
  links,
  layout: {
    container: {},
    sheet: {
      bg: "white",
      borderRadius: "rounded-lg",
      boxShadow: "md",
      p: 3,
      zIndex: 1,
    },
  },
});

export type Theme = typeof theme;
interface ThemeCtx extends Omit<ContextValue, "theme"> {
  theme: Theme;
}

// TODO: Make sure we deepmerge our base theme with user theme in the future
export const useTheme = (useThemeUI as unknown) as () => ThemeCtx;
