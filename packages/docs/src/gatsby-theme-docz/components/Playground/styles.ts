import * as mixins from "~utils/mixins";
export const editor = {
  p: 2,
  borderTop: t => `1px solid ${t.colors.border}`,
  background: t => t.colors.background,
  fontFamily: "monospace",
  fontSize: 18,
  "* > textarea:focus": {
    outline: "none",
  },
};

export const error = {
  m: 0,
  py: 2,
  px: 3,
  bg: "#FF4757",
  fontSize: 1,
  color: "white",
};
export const previewWrapper = {
  position: "relative",
};
export const previewInner = (showingCode, height = "auto") => ({
  height,
  display: "block",
  minHeight: "100%",
  width: "100%",
  bg: "playground.bg",
  borderRadius: showingCode ? "4px 4px 0 0" : "4px",
});
export const preview = {
  m: 0,
  p: 3,
};
export const buttons = {
  zIndex: 9,
  display: "flex",
  position: "absolute",
  bottom: "0px",
  right: "0px",
};
export const button = {
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
export const link = {
  py: 0,
  ml: 1,
  height: 22,
};
