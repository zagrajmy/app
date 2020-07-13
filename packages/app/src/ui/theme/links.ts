import { flow } from "fp-ts/lib/function";
import { setSaturation, transparentize } from "polished";
import { Theme as ThemeUITheme, ThemeUIStyleObject } from "theme-ui";

import { parseColor } from "./util";

const underlined: ThemeUIStyleObject = {
  ...({
    "--transition": "250ms 33ms cubic-bezier(0.19, 1, 0.22, 1)",
  } as {}),
  color: "text",
  position: "relative",
  zIndex: 0,
  textDecoration: "none",
  outline: "none",
  transition: "color var(--transition)",
  ":before": {
    content: "''",
    display: "block",
    height: "0.6em",
    position: "absolute",
    top: "50%",
    right: "-0.15rem",
    left: "-0.1rem",
    zIndex: -1,
    backgroundColor: flow(
      (t: ThemeUITheme) => t.colors?.accent || "#eeffff",
      parseColor,
      setSaturation(0.75),
      transparentize(0.85)
    ),
    transform: "translateY(0%) rotateZ(-1deg)",
    transition:
      "background-color var(--transition), transform var(--transition)",
  },
  ":hover, :focus": {
    color: "white !important",
    ":before": {
      backgroundColor: "accent",
      transform: "translateY(-50%) rotateZ(0.35deg) scaleY(2)",
    },
  },
};

export const links = {
  underlined,
};
