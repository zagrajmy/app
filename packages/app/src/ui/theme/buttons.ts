import { Variants } from "./design-graph-utility";
import { links } from "./links";

const primarySecondaryCommon = {
  cursor: "pointer",
  display: "block",
  padding: "0.75em 1.25em",
  border: "1px solid",
  borderColor: "gray.3",
  borderRadius: "rounded",
  textDecoration: "none",

  boxShadow: "sm",
  transition: "box-shadow 150ms linear, background-color 150ms linear",
  ":hover": {
    boxShadow: "md",
  },
};

export const buttons: Variants = {
  primary: {
    ...primarySecondaryCommon,
    bg: "primary",
    borderColor: "primary",
    color: "white",
    ":hover:enabled, :focus:enabled": {
      ...primarySecondaryCommon[":hover"],
      bg: "primaryLight",
      borderColor: "primaryLight",
      boxShadow: "lg",
    },
    ":disabled": {
      cursor: "unset",
      opacity: 0.75,
    },
  },
  secondary: {
    ...primarySecondaryCommon,
    color: "text",
    bg: "gray.2",
    ":hover": {
      ...primarySecondaryCommon[":hover"],
      bg: "gray.1",
    },
  },
  icon: {
    fontSize: "inherit",
    cursor: "pointer",
    "> svg": {
      zIndex: 1,
      borderRadius: "round",
      width: "1.25em",
      height: "1.25em",
      color: "gray.8",
    },
    ":hover, :focus": {
      color: "text",
      ":before": {
        position: "absolute",
        borderRadius: "50%",
        width: "1.75em",
        height: "1.75em",
        content: "''",
        bg: "gray.2",
      },
    },
  },
  link: {
    ...links.underlined,
    background: "none",
    display: "inline",
    p: 0,
    cursor: "pointer",
  },
};
