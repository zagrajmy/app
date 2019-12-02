import * as themeUi from "theme-ui";
import * as chakra from "@chakra-ui/core";

declare module "theme-ui" {
  export interface Theme {
    useCustomProperties?: boolean;
  }
}

type FontSizes = {
  [P in
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | number]: string;
};

const fontSizesArray = [
  ["xs", 0.75],
  ["sm", 0.875],
  ["md", 1],
  ["lg", 1.25],
  ["xl", 1.5],
  ["2xl", 2],
  ["3xl", 3],
  ["4xl", 4],
  ["5xl", 4.5],
  ["6xl", 5.25]
] as const;

const fontSizes = fontSizesArray.reduce((acc, [k, v], i) => {
  acc[k] = `${v}em`;
  acc[i] = `${v}em`;
  return acc;
}, {} as FontSizes);

export const theme: themeUi.Theme & chakra.ITheme = {
  useCustomProperties: true,
  breakpoints: [40, 52, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes,
  sizes: chakra.theme.sizes,
  colors: {
    text: "rgba(0, 0, 0, 0.9)",
    background: "#fbf6e5",
    whites: ["#fff", "#FFFEFC"],
    gray: "#343333",
    primary: "#e85554",
    primaryLight: "#ea6463",
    primaryDark: "#d34e4d",
    accent: "#ffffff",
    modes: {
      dark: {
        text: "#fff",
        background: "#222"
      }
    }
  },
  fonts: {
    body:
      "system-ui, -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif",
    heading: "inherit"
    // mono
  },
  styles: {
    root: {
      height: "100vh",
      fontFamily: "body",
      color: "text",
      bg: "background"
    }
  },
  icons: chakra.theme.icons
};
