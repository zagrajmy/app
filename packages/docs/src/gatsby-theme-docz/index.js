/* eslint-disable react/jsx-filename-extension */
/** @jsx jsx */
/* eslint-disable import/no-extraneous-dependencies */
import {
  theme as makeThemeProvider,
  useConfig,
  ComponentsProvider,
} from "docz";
import { ThemeProvider, jsx } from "theme-ui";
import baseComponents from "gatsby-theme-docz/src/components";
import * as modes from "gatsby-theme-docz/src/theme/modes";
import styles from "gatsby-theme-docz/src/theme/styles";
import prism from "gatsby-theme-docz/src/theme/prism";

// console.log({ modes });

const componentsMap = { ...baseComponents };

const theme = {
  initialColorMode: "light",
  // Show errors above playground editor
  showLiveError: true,
  // Show preview of the code inside playground
  showLivePreview: true,
  // Show editor when a playground is rendered
  showPlaygroundEditor: true,
  // Show dark/light mode switch toggle in header
  showDarkModeSwitch: true,
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
  fonts: {
    body: "system-ui",
    heading: "system-ui",
    monospace: "'Fira Code', 'Hack', 'Hasklig'",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  space: [0, 4, 8, 16, 32, 48, 64, 80, 100],
  radii: {
    square: 0,
    radius: 4,
    rounded: 10,
  },
  styles,
  prism,
};

/**
 * @type {React.FC}
 */
const Theme = ({ children }) => {
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
