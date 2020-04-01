// eslint-disable-next-line import/no-extraneous-dependencies
import { ObjectInterpolation } from "@emotion/core";

export const globalStyles: ObjectInterpolation<any> = {
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    margin: 0,
    padding: 0,
  },
  "gatsby-theme-docz/src/theme/.icon-link": {
    display: "none",
  },
  "gatsby-theme-docz/src/theme/.with-overlay": {
    overflow: "hidden",
  },
};
