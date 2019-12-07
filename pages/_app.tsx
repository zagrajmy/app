import App from "next/app";
import React from "react";
import { ThemeProvider as ThemeUiProvider, Styled, ColorMode } from "theme-ui";
import { ThemeProvider as ChakraProvider } from "@chakra-ui/core";
import { Global, InterpolationWithTheme } from "@emotion/core";

import { theme } from "../src/ui/theme";
import { NavHeader } from "../src/app/components";

const globalStyles: InterpolationWithTheme<any> = {
  body: {
    margin: 0
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ChakraProvider theme={theme}>
        <ThemeUiProvider theme={theme}>
          <Global styles={globalStyles} />
          <ColorMode />
          <Styled.root>
            <NavHeader />
            <Component {...pageProps} />
          </Styled.root>
        </ThemeUiProvider>
      </ChakraProvider>
    );
  }
}
