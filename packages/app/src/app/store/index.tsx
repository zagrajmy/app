/**
 * I'd like to keep this module pretty small to make sure
 * the frontend is flat and decentralized.
 *
 * The user is needed on most of the pages, so this is a
 * the thing we can share.
 */

import { createContext, useContext, useRef } from "react";
import { useTranslation } from "react-i18next";

import { Claims } from "../auth";

interface ApplicationStateUser extends Claims {
  uuid: string;
  locale: string;
}

export type ApplicationState = {
  user?: ApplicationStateUser | null;
};

export const initialState: ApplicationState = { user: null };

const ctx = createContext(initialState);

export const useAppState = () => useContext(ctx);

export type StateFromAppInitialProps = Partial<Pick<ApplicationState, "user">>;

interface AppStateProviderProps {
  stateFromInitialProps: StateFromAppInitialProps;
  lang: string;
}

const { Provider } = ctx;

const useOnceImmediately = (f: () => void) => {
  const done = useRef(false);
  if (!done) {
    f();
  }
};

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
  stateFromInitialProps,
  lang,
}) => {
  const { i18n } = useTranslation();
  useOnceImmediately(() => {
    if (lang !== i18n.language) {
      // we need this in first render
      i18n.changeLanguage(lang);
    }
  });
  // if (process.env.NODE_ENV === "development") {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useEffect(() => {
  //     // eslint-disable-next-line no-console
  //     console.log({ stateFromInitialProps });
  //   });
  // }

  const cached = useRef<ApplicationState>(initialState);

  for (const [k, v] of Object.entries(stateFromInitialProps)) {
    if (v) {
      (cached.current[k as keyof ApplicationState] as any) = v;
    }
  }

  return <Provider value={cached.current}>{children}</Provider>;
};
