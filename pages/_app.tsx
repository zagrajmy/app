import App from "next/app";
import React from "react";
import { ThemeProvider, Styled, ColorMode } from "theme-ui";
import { Global, InterpolationWithTheme } from "@emotion/core";

import { theme } from "../src/theme";
import { NavHeader } from "../src/components";

const globalStyles: InterpolationWithTheme<any> = {
  body: {
    margin: 0,
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <ColorMode />
        <Styled.root>
          <NavHeader />
          <Component {...pageProps} />
        </Styled.root>
      </ThemeProvider>
    );
  }
}
