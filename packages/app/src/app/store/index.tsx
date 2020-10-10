/**
 * I'd like to keep this module pretty small to make sure
 * the frontend is flat and decentralized.
 */

import { createContext, useContext, useEffect, useRef } from "react";

import { settings } from "../../types";
import { Claims } from "../auth";

interface ApplicationStateUser extends Claims {
  uuid: string;
  locale: string;
}

export type ApplicationState = {
  /**
   * The user is needed on most of the pages, so this is a
   * the thing we can share.
   */
  user?: ApplicationStateUser | null;
  /**
   * Similarly, sphere settings allow to customize the display
   * and texts.
   */
  sphere: {
    id?: string | number;
    name?: string;
    is_open?: boolean;
    settings: settings.SphereAndFestivalSettings;
  };
};

export const emptySphere = { settings: { theme: {}, forms: [] } };

export const initialState: ApplicationState = {
  user: null,
  sphere: emptySphere,
};

const ctx = createContext(initialState);

export const useAppState = () => useContext(ctx);

interface AppStateProviderProps {
  stateFromInitialProps: Partial<ApplicationState>;
}

const { Provider } = ctx;

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
  stateFromInitialProps,
}) => {
  if (
    process.env.NODE_ENV === "development" &&
    process.env.VERBOSE === "true"
  ) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      // eslint-disable-next-line no-console
      console.log({ stateFromInitialProps });
    });
  }

  const cached = useRef<ApplicationState>(initialState);

  // `stateFromInitialProps` is empty during clientside navigation
  // and in this case, we want to ignore its falsy values and only overwrite
  // if they are truthy.
  // However, we can also navigate from a non-empty sphere to one which doesn't
  // have all properties. In this case, we overwrite every property.
  const shouldOverwrite =
    typeof window === "undefined" &&
    stateFromInitialProps.sphere?.id !== cached.current.sphere.id;

  for (const [k, v] of Object.entries(stateFromInitialProps)) {
    if (v || shouldOverwrite) {
      (cached.current[k as keyof ApplicationState] as any) = v;
    }
  }

  return <Provider value={cached.current}>{children}</Provider>;
};
