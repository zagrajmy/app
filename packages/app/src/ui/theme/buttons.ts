import { SystemStyleObject, Theme } from "theme-ui";

const primarySecondaryCommon: SystemStyleObject = {
  cursor: "pointer",
  display: "block",
  padding: "0.8em 1.2em",
  borderRadius: "rounded",
  textDecoration: "none",

  boxShadow: "sm",
  transition: "box-shadow 150ms linear",
  ":hover": {
    boxShadow: "md",
  },
};

export const buttons: Theme["buttons"] = {
  primary: {
    ...primarySecondaryCommon,
    bg: "primary",
    color: "white",
    ":hover": {
      boxShadow: "md",
      bg: "primaryLight",
      borderColor: "primaryLight",
    },
  },
  secondary: {
    ...primarySecondaryCommon,
    color: "text",
    bg: "gray.2",
  },
  icon: {
    fontSize: "inherit",
    cursor: "pointer",
    "> svg": {
      zIndex: 1,
      borderRadius: "round",
      width: "1.25em",
      height: "1.25em",
      color: "gray.9",
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
};
