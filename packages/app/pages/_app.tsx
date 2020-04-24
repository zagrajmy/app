import "react-datepicker/dist/react-datepicker.css";

// We depend on @emotion/core version theme-ui is using.
// Should theme-ui reexport Global?
// eslint-disable-next-line import/no-extraneous-dependencies
import { Global, InterpolationWithTheme } from "@emotion/core";
import { universalLanguageDetect } from "@unly/universal-language-detector";
import App, { AppContext } from "next/app";
import {
  AppInitialProps,
  loadGetInitialProps,
  NextPageContext,
} from "next/dist/next-server/lib/utils";
import { parseCookies } from "nookies";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { Styled, ThemeProvider as ThemeUiProvider } from "theme-ui";
import { UnreachableCaseError } from "ts-essentials";

import { hasura } from "../data";
import { queryUserByAuth0Id } from "../data/queries";
import { auth, Session } from "../src/app/auth";
import { NavHeader, Page } from "../src/app/components";
import { AppFooter } from "../src/app/components/AppFooter";
import { AppStateProvider, StateFromAppInitialProps } from "../src/app/store";
import {
  FALLBACK_LANG,
  i18n,
  SUPPORTED_LANGUAGES,
  SupportedLanguage,
} from "../src/i18n";
import { EmailConfirmationScreen } from "../src/ui/messageScreens";
import { theme } from "../src/ui/theme";

function detectLanguage(
  ctx: NextPageContext,
  cookies: {
    [key: string]: string;
  }
) {
  return universalLanguageDetect({
    supportedLanguages: [...SUPPORTED_LANGUAGES],
    fallbackLanguage: FALLBACK_LANG,
    acceptLanguageHeader: ctx.req?.headers?.["accept-language"],
    serverCookies: cookies,
    errorHandler: (error, level, origin, context) => {
      console.error(error, level, origin, context);
    },
  });
}

type ModalBlockingState =
  | { type: "normal" }
  | { type: "email-not-verified"; session: Session };

export namespace ModalBlockingState {
  export const Normal = { type: "normal" } as const;
  export const EmailNotVerified = (session: Session) => ({
    type: "email-not-verified" as const,
    session,
  });
}

export type InjectedPageProps = {
  // is this needed?
  cookies: { [key: string]: string | undefined };
  lang: SupportedLanguage;
};

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

interface MyAppInitialProps extends AppInitialProps {
  appState: StateFromAppInitialProps;
  blockingState: ModalBlockingState;
}

export default class MyApp extends App<MyAppInitialProps> {
  /**
   * We might this logic outside some day when we want to
   * optimize landing/non-app pages.
   * https://github.com/zeit/next.js/blob/master/errors/opt-out-auto-static-optimization.md
   */
  static async getInitialProps({
    Component,
    ctx,
  }: AppContext): Promise<MyAppInitialProps> {
    const pageProps = await loadGetInitialProps(Component, ctx);

    const session = ctx.req && (await auth.getSession(ctx.req));

    const cookies = parseCookies(ctx);

    let lang = "en";
    let user: { uuid: string; locale: string } | undefined = undefined;

    if (!session) {
      lang = detectLanguage(ctx, cookies);
      return {
        appState: {},
        pageProps: {
          ...pageProps,
          lang: detectLanguage(ctx, cookies),
        },
        blockingState: ModalBlockingState.Normal,
      };
    }

    if (!session.user.email_verified) {
      return {
        appState: {},
        pageProps: {
          ...pageProps,
          lang: detectLanguage(ctx, cookies),
          cookies,
        },
        blockingState: ModalBlockingState.EmailNotVerified(session),
      };
    }

    user = await queryUserByAuth0Id(
      hasura.fromCookies(ctx.req!).query,
      session.user.sub,
      { uuid: true, locale: true }
    );
    if (user) {
      // this will almost always be true
      lang = user.locale;
    }

    const appState: StateFromAppInitialProps =
      session?.user && user ? { user: { ...session.user, ...user } } : {};

    return {
      appState,
      pageProps: {
        ...pageProps,
        lang,
        cookies,
      },
      blockingState: ModalBlockingState.Normal,
    };
  }

  render() {
    const { Component, pageProps, appState, blockingState } = this.props;

    let page: React.ReactNode = null;
    switch (blockingState.type) {
      case "normal":
        page = <Component {...pageProps} />;
        break;
      case "email-not-verified":
        page = (
          <Page>
            <EmailConfirmationScreen
              sx={{ height: "76vh", my: 4 }}
              username={
                blockingState.session.user.nickname ||
                blockingState.session.user.given_name
              }
            />
          </Page>
        );
        break;
      default:
        throw new UnreachableCaseError(blockingState);
    }

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
              {page}
              <AppFooter />
            </Styled.root>
          </AppStateProvider>
        </ThemeUiProvider>
      </I18nextProvider>
    );
  }
}
