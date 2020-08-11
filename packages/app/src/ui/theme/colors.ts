import { flow } from "fp-ts/lib/function";
import { darken, saturate } from "polished";

const deriveAdditionalColors = (scheme: ColorScheme) => {
  const darker = flow(darken(0.25), saturate(0.5));

  return {
    criticalDark: darker(scheme.critical),
    cautionDark: darker(scheme.caution),
    positiveDark: darker(scheme.positive),
  };
};

export const light = {
  text: "#071d1d",
  background: "#f1eded",
  white: "#ffffff",
  gray: [
    "#faf9f9",
    "#f1eded",
    "#e6dfdf",
    "#dbd1d1",
    "#c1afaf",
    "#b19b9b",
    "#9a8484",
    "#796868",
    "#473d3d",
  ],
  primary: "#e85554",
  primaryLight: "#ea6463",
  primaryDark: "#d34e4d",
  secondary: "#5654e8",
  accent: "#5654e8", // blue in triad of primary
  highlight: "hsla(0, 76%, 62%, 0.2)", // same as primary with 0.2 opacity; needed for Theme UI form components
  muted: "hsla(0, 0%, 0%, 0.6)",
  // functional colors, usually used as background
  critical: "#fad9d9",
  caution: "#f2f29f",
  positive: "#50dc96",
};

export type ColorScheme = typeof light;

const dark: ColorScheme = {
  text: "#fefefe",
  background: "#202026",
  primary: "#7f5af0",
  primaryLight: "#7f5af0", // todo
  primaryDark: "#7f5af0", // todo
  secondary: "#2cb67d",
  accent: "#2cb67d",
  highlight: "#7f5af0", // TODO: 0.2 opacity
  muted: "#fafafa",
  gray: [
    "#010101",
    "#16161a",
    "#202026",
    "#2c2c34",
    "#2c2c34",
    "#2c2c34",
    "#2c2c34",
    "#2c2c34",
    "#2c2c34",
  ],
  white: "#fefefe",
  critical: "#fad9d9",
  caution: "#f2f29f",
  positive: "#50dc96",
};

export const colors = {
  ...light,
  ...deriveAdditionalColors(light),
  // ...dark,
  // ...deriveAdditionalColors(dark),
  modes: {
    dark: {
      ...dark,
      ...deriveAdditionalColors(dark),
    },
  },
};
