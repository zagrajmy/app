/**
 * I'd like to keep this module pretty small to make sure
 * the frontend is flat and decentralized.
 *
 * The user is needed on most of the pages, so this is a
 * the thing we can share.
 */

import { createContext, useContext, useRef } from "react";

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

interface AppStateProviderProps {
  stateFromInitialProps: ApplicationState;
}

const { Provider } = ctx;

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
  stateFromInitialProps,
}) => {
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
