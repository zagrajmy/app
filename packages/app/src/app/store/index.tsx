/**
 * I'd like to keep this module pretty small to make sure
 * the frontend is flat and decentralized.
 *
 * The user is needed on most of the pages, so this is a
 * the thing we can share.
 */

import { createContext, useContext, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Claims } from "../auth";

export type ApplicationState = {
  // rename to claims
  user?: Claims | null | undefined;
  // rename to user
  zmUser?: {
    uuid: string;
    locale: string;
  };
};

export const initialState: ApplicationState = { user: null };

const ctx = createContext(initialState);

export const useAppState = () => useContext(ctx);

export type StateFromAppInitialProps = Partial<
  Pick<ApplicationState, "user" | "zmUser">
>;

interface AppStateProviderProps {
  stateFromInitialProps: StateFromAppInitialProps;
  lang: string;
}

const { Provider } = ctx;

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
  stateFromInitialProps,
  lang,
}) => {
  const { i18n } = useTranslation();
  if (lang !== i18n.language) {
    // we need this in first render
    i18n.changeLanguage(lang);
  }

  const cached = useRef<ApplicationState>(initialState);

  for (const [k, v] of Object.entries(stateFromInitialProps)) {
    if (v) {
      (cached.current[k as keyof ApplicationState] as any) = v;
    }
  }

  if (stateFromInitialProps.user) {
    cached.current.user = stateFromInitialProps.user;
  }

  return <Provider value={cached.current}>{children}</Provider>;
};
