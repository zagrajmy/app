import { ThemeUIStyleObject } from "theme-ui";

import { Variants } from "./design-graph-utility";

const borderStyles: ThemeUIStyleObject = {
  border: "1px solid",
  borderRadius: "rounded",
  borderColor: "gray.3",
};

const boldMutedFont: ThemeUIStyleObject = {
  fontWeight: "bold",
  color: "muted",
};

const field: ThemeUIStyleObject = {
  ...borderStyles,
  appearance: "none",
  fontSize: "inherit",
  lineHeight: "inherit",
  color: "inherit",
  bg: "gray.1",
  ":focus.focus-visible, & > *:focus.focus-visible": {
    outlineStyle: "auto !important", // fixme?
  },
};

export const forms: Variants = {
  textarea: field,
  input: { ...field, height: "48px" },
  radio: {
    cursor: "pointer",
  },
  checkbox: {
    cursor: "pointer",
  },
  select: {
    ...field,
    ":disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
    },
    height: "48px",
  },
  "select-small": {
    cursor: "pointer",
    border: "none",
    "& ~ svg": {
      display: "none",
    },
    "> option": {
      color: "text",
    },
  },
  label: {
    ...boldMutedFont,
    whiteSpace: "pre-wrap",
    display: "block",
    "& > *, input, textarea": {
      fontWeight: "normal",
      color: "text",
    },
  },
  choiceGroup: {
    ...borderStyles,
    "> legend": boldMutedFont,
    label: {
      fontWeight: "normal",
      color: "text",
    },
  },
};
