/* eslint-disable import/no-extraneous-dependencies */
import { globalStyles as commonGlobalStyles } from "@zagrajmy/app/dist/src/ui";
import { css } from "theme-ui";

export const globalStyles = css({
  html: {
    scrollBehavior: "smooth",
    overflowY: "overlay",
    overflowX: "hidden",
  } as {}, // TODO: Why doesn't it work? Debug in Theme UI.
  body: {
    margin: 0,
    padding: 0,
  },
  ...commonGlobalStyles,
  // docs overrides
  "gatsby-theme-docz/src/theme/.icon-link": {
    display: "none",
  },
  "gatsby-theme-docz/src/theme/.with-overlay": {
    overflow: "hidden",
  },
});
