/* eslint-disable react/jsx-filename-extension */
/** @jsx jsx */
/* eslint-disable import/no-extraneous-dependencies */
import {
  ComponentsProvider,
  theme as makeThemeProvider,
  useConfig,
} from "docz";
import baseComponents from "gatsby-theme-docz/src/components";
import * as modes from "gatsby-theme-docz/src/theme/modes";
import prism from "gatsby-theme-docz/src/theme/prism";
import styles from "gatsby-theme-docz/src/theme/styles";
import { ThemeProvider, jsx } from "theme-ui";

import Router from "next/router";

import { theme as appTheme } from "@zagrajmy/app";

// mock for next/link
/* eslint-disable @typescript-eslint/no-empty-function */
Router.router = {
  push: () => {},
  replace: () => {},
  prefetch: () => Promise.resolve(),
} as any;
/* eslint-disable @typescript-eslint/no-empty-function */
// ---

const componentsMap = baseComponents;

const theme = {
  ...appTheme,
  initialColorModeName: "light",
  // Show errors above playground editor
  showLiveError: true,
  // Show preview of the code inside playground
  showLivePreview: true,
  // Show editor when a playground is rendered
  showPlaygroundEditor: true,
  // Show dark/light mode switch toggle in header
  showDarkModeSwitch: false,
  // Display edit this page button on every page
  showMarkdownEditButton: true,
  // Wrap the playground editor and preview in iframes to avoid style/script collisions
  useScopingInPlayground: false,
  colors: {
    ...modes.light,
    modes: {
      dark: modes.dark,
    },
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  radii: {
    ...appTheme.radii,
    // compatibility
    square: 0,
    radius: appTheme.radii["rounded-sm"],
  },
  styles: {
    ...styles,
    ...appTheme.styles,
  },
  prism,
};

const Theme = ({ children }: { children?: React.ReactNode }) => {
  const config = useConfig();

  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={componentsMap}>
        {children}
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default makeThemeProvider(theme)(Theme);
