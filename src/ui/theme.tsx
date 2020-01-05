import * as themeUi from "theme-ui";

declare module "theme-ui" {
  export interface Theme {
    useCustomProperties?: boolean;
  }
}

export const theme: themeUi.Theme = {
  useCustomProperties: true,
  breakpoints: [40, 52, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [0.75, 0.875, 1, 1.25, 1.5, 2, 3, 4, 4.5, 5.25].map(
    x => `${x}rem`
  ),
  radii: {
    none: 0,
    "rounded-sm": ".125rem",
    rounded: ".25rem",
    "rounded-lg": ".5rem"
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
      "#473d3d"
    ],
    primary: "#e85554",
    primaryLight: "#ea6463",
    primaryDark: "#d34e4d",
    accent: "#2F81B5", // blue in triad of primary
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
      bg: "background",
      display: "flex",
      flexDirection: "column"
    }
  },
  buttons: {
    primary: {
      cursor: "pointer"
    },
    icon: {
      cursor: "pointer"
    }
  }
};
