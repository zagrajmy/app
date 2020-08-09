import "react-datepicker/dist/react-datepicker.css";

// We depend on @emotion/core version theme-ui is using.
// Should theme-ui reexport Global?
// eslint-disable-next-line import/no-extraneous-dependencies
import { Global, InterpolationWithTheme } from "@emotion/core";
import { universalLanguageDetect } from "@unly/universal-language-detector";
import App, { AppContext, AppProps } from "next/app";
import {
  AppInitialProps,
  NextPageContext,
} from "next/dist/next-server/lib/utils";
import dynamic from "next/dynamic";
import { parseCookies } from "nookies";
import React, { useRef } from "react";
import { I18nextProvider } from "react-i18next";
import {
  css,
  merge,
  Styled,
  Theme,
  ThemeProvider as ThemeUiProvider,
} from "theme-ui";

import { hasura } from "../data/hasura";
import { auth, Session } from "../src/app/auth";
import { AppFooter } from "../src/app/components/AppFooter";
import { NavHeader } from "../src/app/components/NavHeader";
import { Page } from "../src/app/components/Page";
import { detectSphere } from "../src/app/detectSphere";
import {
  ApplicationState,
  AppStateProvider,
  emptySphere,
} from "../src/app/store";
import {
  FALLBACK_LANG,
  i18n,
  mergeLocale,
  SUPPORTED_LANGUAGES,
} from "../src/i18n";
import { EmailConfirmationScreen } from "../src/ui/organisms/messageScreens/EmailConfirmationScreen";
import {
  ExactTheme,
  globalStyles,
  theme as defaultTheme,
} from "../src/ui/theme";

const ProgressBar = dynamic(() => import("../src/app/components/ProgressBar"), {
  // ssr: false <- can't be there.
  // It doesn't work after build if we pass ssr: false.
});

function detectLanguage(
  req: Exclude<NextPageContext["req"], undefined>,
  cookies: {
    [key: string]: string;
  }
) {
  return universalLanguageDetect({
    supportedLanguages: [...SUPPORTED_LANGUAGES],
    fallbackLanguage: FALLBACK_LANG,
    acceptLanguageHeader: req.headers?.["accept-language"],
    serverCookies: cookies,
    errorHandler: (error, level, origin, context) => {
      console.error(error, level, origin, context);
    },
  });
}

const useOnceImmediately = (f: () => void) => {
  const done = useRef(false);
  if (!done.current) {
    f();
  }
};

const global: InterpolationWithTheme<{}> = css(globalStyles);

interface MyAppInitialProps extends AppInitialProps {
  appState: Partial<ApplicationState>;
  lang: string;
  session?: Session | null;
  error?: Error;
}

interface MyAppProps extends MyAppInitialProps, AppProps {}

export default function MyApp({
  Component,
  pageProps,
  appState,
  session: propsSession,
  lang,
}: MyAppProps) {
  const session = useRef<Session | undefined | null>();
  session.current = propsSession || session.current;

  const themeRef = useRef(defaultTheme);

  useOnceImmediately(() => {
    if (lang !== i18n.language) {
      // we need this in first render
      i18n.changeLanguage(lang);
    }
    if (appState.sphere) {
      if (appState.sphere.settings.locale) {
        mergeLocale(appState.sphere!.settings.locale);
      }

      // we merge sphere theme as soon as possible to limit the number of
      // theme providers in React three
      themeRef.current = merge(
        defaultTheme as Theme,
        appState.sphere?.settings.theme
        // this is quite unsafe until we validate the themes during editing
      ) as ExactTheme;
    }
  });

  const theme = themeRef.current;

  let root: React.ReactNode = null;
  if (session.current && !session.current.user.email_verified) {
    const { user } = session.current;

    root = (
      <Styled.root sx={theme.styles.root}>
        <NavHeader claims={user} />
        <Page>
          <EmailConfirmationScreen
            sx={{ height: "76vh", my: 4 }}
            username={user.nickname || user.given_name}
          />
        </Page>
        <AppFooter />
      </Styled.root>
    );
  } else {
    root = (
      <Styled.root sx={theme.styles.root}>
        <NavHeader
          claims={appState.user}
          // links={["meetings"]}
        />
        <Component {...pageProps} />
        <AppFooter />
      </Styled.root>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeUiProvider theme={theme as Theme}>
        <ProgressBar />
        <Global styles={global} />
        <AppStateProvider stateFromInitialProps={appState}>
          {root}
        </AppStateProvider>
      </ThemeUiProvider>
    </I18nextProvider>
  );
}

/**
 * We might this move logic outside some day when we want to
 * optimize landing/non-app pages.
 * https://github.com/zeit/next.js/blob/master/errors/opt-out-auto-static-optimization.md
 */

MyApp.getInitialProps = async (
  context: AppContext
): Promise<MyAppInitialProps> => {
  const appProps = await App.getInitialProps(context);
  const { req, query } = context.ctx;

  try {
    const session = req && (await auth.getSession(req));

    let initialData: {
      sphere?: {
        settings: any;
      };
      user?: {
        uuid: string;
        locale: string;
      };
    } = {};

    if (req) {
      const sphere = detectSphere({ req, query });

      const data = await hasura.fromCookies(req).query({
        ...(session && {
          cr_user: [
            { where: { auth0_id: { _eq: session.user.sub } } },
            { uuid: true, locale: true },
          ],
        }),
        nb_sphere: [
          { where: { django_site: { domain: { _eq: sphere.domain } } } },
          {
            id: true,
            name: true,
            settings: [{}, true],
            is_open: true,
          },
        ],
      });

      initialData = {
        sphere: data.nb_sphere[0],
        user: "cr_user" in data ? data.cr_user[0] : undefined,
      };
    }

    let lang = "en";
    if (initialData.user) {
      lang = initialData.user.locale;
    } else if (req) {
      lang = detectLanguage(req, parseCookies(context.ctx));
    }

    const appState: Partial<ApplicationState> = {
      user:
        session?.user && initialData.user
          ? { ...session.user, ...initialData.user }
          : undefined,
      sphere: initialData.sphere || emptySphere,
    };

    return {
      ...appProps,
      appState,
      session,
      lang,
    };
  } catch (error) {
    let lang = "en";
    if (req) {
      try {
        lang = detectLanguage(req, parseCookies(context.ctx));
      } catch {
        console.error("failed to detect language");
      }
    }

    return {
      ...appProps,
      appState: {},
      error,
      lang,
    };
  }
};
