/* eslint-disable import/no-extraneous-dependencies */
import { ThemeConfig } from "docz";
import * as mixins from "gatsby-theme-docz/src/utils/mixins";
import { SystemCssProperties, SystemStyleObject } from "theme-ui";

export const editor: SystemStyleObject = {
  p: 2,
  borderTop: (t: ThemeConfig) => `1px solid ${t.colors.border}`,
  background: (t: ThemeConfig) => t.colors.background,
  fontFamily: "monospace",
  fontSize: 16,
  lineHeight: 1.4,
  "* > textarea:focus": {
    outline: "none",
  },
  "textarea::selection": {
    backgroundColor: "gray.2",
  },
};

export const error: SystemCssProperties = {
  m: 0,
  py: 2,
  px: 3,
  bg: "#FF4757",
  fontSize: 1,
  color: "white",
};
export const previewInner = (
  showingCode: boolean,
  height = "auto"
): SystemCssProperties => ({
  height,
  display: "block",
  minHeight: "100%",
  width: "100%",
  bg: "playground.bg",
  borderRadius: showingCode ? "4px 4px 0 0" : "4px",
});
export const preview: SystemCssProperties = {
  m: 0,
  p: 3,
};
export const button: SystemCssProperties = {
  ...mixins.ghostButton,
  display: "flex",
  alignItems: "center",
  p: 2,
  bg: "gray.2",
  color: "text",
  "& ~ &": {
    ml: 1,
  },
};
export const link: SystemCssProperties = {
  py: 0,
  ml: 1,
  height: 22,
};
