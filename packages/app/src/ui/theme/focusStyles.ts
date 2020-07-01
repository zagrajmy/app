import "focus-visible";

export const focusStyles = {
  "*:focus:not(.focus-visible)": {
    outline: "none",
  },
  ".focus-visible": {
    outlineColor: "secondary",
    outlineStyle: "dashed",
  },
};
