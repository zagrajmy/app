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
  fontSizes: [0.75, 0.875, 1, 1.25, 1.5, 2, 3, 4, 4.5, 5.25],
  colors: {
    text: "rgba(0, 0, 0, 0.9)",
    background: "#fbf6e5",
    whites: ["#fefefe", "#fffefc", "#f8f7f7"],
    gray: {
      100: "#EDF2F7",
      900: "#353433"
    },
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
      bg: "background",
      display: "flex",
      flexDirection: "column"
    }
  }
};
