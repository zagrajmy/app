import { Theme } from "theme-ui";

declare module "theme-ui" {
  export interface Theme {
    useCustomProperties?: boolean;
  }
}

export const theme: Theme = {
  useCustomProperties: true,
  colors: {
    text: "rgba(0, 0, 0, 0.9)",
    background: "#fbf6e5",
    gray: "#343333",
    primary: "#e85554",
    primaryLight: "#ea6463",
    primaryDark: "#d34e4d",
    accent: "#ffffff",
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
      },
    },
  },
  fonts: {
    body:
      "system-ui, -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif",
    heading: "inherit",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
  },
};
