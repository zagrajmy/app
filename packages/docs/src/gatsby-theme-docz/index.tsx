/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import { ExactTheme, theme as appTheme } from "@zagrajmy/app";
import {
  ComponentsProvider,
  theme as makeThemeProvider,
  useConfig,
} from "docz";
import baseComponents from "gatsby-theme-docz/src/components";
import prism from "gatsby-theme-docz/src/theme/prism";
import { Styled, ThemeProvider, ThemeUIStyleObject } from "theme-ui";

import { MockedNextRouter } from "../../../app/test/MockedNextRouter";
import { PropDoc } from "../components/PropDoc";
import * as modes from "./theme/modes";
import styles from "./theme/styles";

const componentsMap = { ...baseComponents, PropDoc };

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

declare module "@zagrajmy/docs" {
  export type ExactTheme = typeof theme;
}

const Theme = ({ children }: { children?: React.ReactNode }) => {
  const config = useConfig();

  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={componentsMap}>
        <MockedNextRouter pathname="">
          <Styled.root>{children}</Styled.root>
        </MockedNextRouter>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default makeThemeProvider(theme)(Theme);
