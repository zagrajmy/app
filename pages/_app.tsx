import { universalLanguageDetect } from "@unly/universal-language-detector";
import App, { AppContext } from "next/app";
import { parseCookies } from "nookies";
import React from "react";
import { ThemeProvider as ThemeUiProvider, Styled } from "theme-ui";
// It's a dependency of theme-ui
// Should theme-ui reexport Global?
// eslint-disable-next-line import/no-extraneous-dependencies
import { Global, InterpolationWithTheme } from "@emotion/core";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

import { theme } from "../src/ui/theme";
import { NavHeader } from "../src/app/components";
import { auth } from "../src/app/auth";
import { AppStateProvider, StateFromAppInitialProps } from "../src/app/store";
import { SUPPORTED_LANGUAGES, FALLBACK_LANG } from "../src/i18n";
import { AppFooter } from "../src/app/components/AppFooter";

import "react-datepicker/dist/react-datepicker.css";

const globalStyles: InterpolationWithTheme<any> = {
  body: {
    margin: 0,
  },
  html: {
    boxSizing: "border-box",
  },
  "*, *:before, *:after": {
    boxSizing: "inherit",
  },
};

export default class MyApp extends App<{
  appState: StateFromAppInitialProps;
}> {
  /**
   * We might this logic outside some day when we want to
   * optimize landing/non-app pages.
   * https://github.com/zeit/next.js/blob/master/errors/opt-out-auto-static-optimization.md
   */
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = await loadGetInitialProps(Component, ctx);

    const cookies = parseCookies(ctx);

    const lang = universalLanguageDetect({
      supportedLanguages: SUPPORTED_LANGUAGES,
      fallbackLanguage: FALLBACK_LANG,
      acceptLanguageHeader: ctx.req?.headers?.["accept-language"],
      serverCookies: cookies,
      errorHandler: (error, level, origin, context) => {
        console.error(error, level, origin, context);
      },
    });

    Object.assign(pageProps, { lang, cookies });

    if (ctx.req) {
      const session = await auth.getSession(ctx.req);
      return { appState: { user: session?.user }, pageProps };
    }
    return { pageProps, appState: {} };
  }

  render() {
    const { Component, pageProps, appState } = this.props;
    return (
      <ThemeUiProvider theme={theme}>
        <Global styles={globalStyles} />
        <AppStateProvider stateFromInitialProps={appState}>
          <Styled.root sx={theme.styles.root}>
            <NavHeader user={appState.user} />
            <Component {...pageProps} />
            <AppFooter />
          </Styled.root>
        </AppStateProvider>
      </ThemeUiProvider>
    );
  }
}
