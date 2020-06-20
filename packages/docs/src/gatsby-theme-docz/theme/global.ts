// eslint-disable-next-line import/no-extraneous-dependencies
import { InterpolationWithTheme } from "@emotion/core";
import { Theme } from "@zagrajmy/app/dist/ui";

const scrollbarStyles = {
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
};

export const globalStyles: InterpolationWithTheme<Theme> = {
  html: {
    scrollBehavior: "smooth",
    "overflow-x": "hidden",
    "overflow-y": "overlay",
  },
  body: {
    margin: 0,
    padding: 0,
  },
  // scrollbar
  "*": scrollbarStyles,
  // docs overrides
  "gatsby-theme-docz/src/theme/.icon-link": {
    display: "none",
  },
  "gatsby-theme-docz/src/theme/.with-overlay": {
    overflow: "hidden",
  },
};
