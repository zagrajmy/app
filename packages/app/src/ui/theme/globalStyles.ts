import { ThemeUIStyleObject } from "theme-ui";

import "focus-visible";

export const focusStyles: ThemeUIStyleObject = {
  "*:focus:not(.focus-visible)": {
    outline: "none",
  },
  ".focus-visible": {
    outlineColor: "secondary",
    outlineStyle: "dashed",
  },
};

const scrollbarStyles: ThemeUIStyleObject = {
  "*": {
    "::-webkit-scrollbar": {
      width: "13px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0.16)",
      backgroundClip: "padding-box",
      border: "3px solid rgba(0, 0, 0, 0)",
      borderRadius: "100px",
      "&:hover": {
        borderWidth: "3px",
        backgroundColor: "rgba(0, 0, 0, 0.34)",
      },
    },
    "::-webkit-scrollbar-corner": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
};

export const globalStyles = {
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    margin: 0,
    overflowY: "overlay" as any,
    overflowX: "hidden",
  },
  ...focusStyles,
  ...scrollbarStyles,
} as const;
