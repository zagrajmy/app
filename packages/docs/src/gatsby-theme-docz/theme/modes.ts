import * as colors from "gatsby-theme-docz/src/theme/colors";
import prismDark from "gatsby-theme-docz/src/theme/prism/dark";
import prismLight from "gatsby-theme-docz/src/theme/prism/light";

import { theme } from "@zagrajmy/app";

const { colors: cx } = theme;

export const light = {
  ...cx,
  primary: cx.primary,
  text: cx.text,
  muted: cx.accent,
  link: cx.primary,
  background: cx.background,
  border: cx.gray[3],
  sidebar: {
    bg: cx.gray[2],
    navGroup: cx.gray[9],
    navLink: cx.text,
    navLinkActive: cx.primary,
    tocLink: cx.gray[5],
    tocLinkActive: cx.gray[9],
  },
  header: {
    bg: cx.gray[3],
    text: cx.gray[8],
    border: cx.gray[1],
    button: {
      bg: cx.primary,
      color: cx.white,
    },
  },
  props: {
    bg: cx.gray[1],
    text: cx.gray[9],
    highlight: cx.primary,
    defaultValue: cx.gray[5],
    descriptionText: cx.gray[8],
    descriptionBg: cx.white,
  },
  playground: {
    bg: "transparent",
    border: cx.gray[2],
  },
  blockquote: {
    bg: cx.gray[0],
    border: cx.gray[1],
    color: cx.gray[1],
  },
  prism: { ...prismLight },
};

export const dark = {
  ...cx.modes.dark,
  primary: colors.skyBlue,
  text: colors.grayExtraLight,
  muted: colors.gray,
  link: colors.skyBlue,
  background: colors.grayExtraDark,
  border: colors.grayDark,
  sidebar: {
    bg: colors.grayExtraDark,
    navGroup: colors.gray,
    navLink: colors.grayLight,
    navLinkActive: colors.skyBlue,
    tocLink: colors.gray,
    tocLinkActive: colors.grayLight,
  },
  header: {
    bg: colors.dark,
    text: colors.grayLight,
    border: colors.grayDark,
    button: {
      bg: colors.skyBlue,
      color: colors.white,
    },
  },
  props: {
    bg: colors.dark,
    text: colors.gray,
    highlight: colors.skyBlue,
    defaultValue: colors.grayDark,
    descriptionText: colors.gray,
    descriptionBg: colors.grayExtraDark,
  },
  playground: {
    bg: colors.dark,
    border: colors.grayDark,
  },
  blockquote: {
    bg: colors.grayDark,
    border: colors.gray,
    color: colors.gray,
  },
  prism: { ...prismDark },
};
