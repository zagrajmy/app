// It's a dependency of theme-ui
// Should theme-ui reexport Global?
// eslint-disable-next-line import/no-extraneous-dependencies
import { Global, InterpolationWithTheme } from "@emotion/core";
import { universalLanguageDetect } from "@unly/universal-language-detector";
import App, { AppContext } from "next/app";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { parseCookies } from "nookies";
import React from "react";
import { Styled, ThemeProvider as ThemeUiProvider } from "theme-ui";
import { I18nextProvider } from "react-i18next";

import "react-datepicker/dist/react-datepicker.css";

import { auth } from "../src/app/auth";
import { NavHeader } from "../src/app/components";
import { AppFooter } from "../src/app/components/AppFooter";
import {
  AppStateProvider,
  StateFromAppInitialProps,
  ApplicationState,
} from "../src/app/store";
import { FALLBACK_LANG, SUPPORTED_LANGUAGES, i18n } from "../src/i18n";
import { theme } from "../src/ui/theme";

import { queryUserByAuth0Id } from "../src/app/api-helpers";
import { hasura } from "../data";

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

    const session = ctx.req && (await auth.getSession(ctx.req));

    const cookies = parseCookies(ctx);

    let lang = "en";
    let user: { uuid: string; locale: string } | undefined = undefined;

    if (!session) {
      lang = universalLanguageDetect({
        supportedLanguages: [...SUPPORTED_LANGUAGES],
        fallbackLanguage: FALLBACK_LANG,
        acceptLanguageHeader: ctx.req?.headers?.["accept-language"],
        serverCookies: cookies,
        errorHandler: (error, level, origin, context) => {
          console.error(error, level, origin, context);
        },
      });
    } else {
      user = await queryUserByAuth0Id(
        hasura.fromReq(ctx.req!).query,
        session.user.sub,
        { uuid: true, locale: true }
      );
      lang = user.locale;
    }

    const appState: StateFromAppInitialProps =
      session?.user && user ? { user: { ...session.user, ...user } } : {};
    Object.assign(pageProps, { lang, cookies });
    return { appState, pageProps };
  }

  render() {
    const { Component, pageProps, appState } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <ThemeUiProvider theme={theme}>
          <Global styles={globalStyles} />
          <AppStateProvider
            stateFromInitialProps={appState}
            lang={pageProps.lang}
          >
            <Styled.root sx={theme.styles.root}>
              <NavHeader appState={appState} />
              <Component {...pageProps} />
              <AppFooter />
            </Styled.root>
          </AppStateProvider>
        </ThemeUiProvider>
      </I18nextProvider>
    );
  }
}
