import { IConfig, createOvermind } from "overmind";
import { createHook, Provider } from "overmind-react";
import { useLayoutEffect } from "react-layout-effect";

import { Claims } from "../auth";

import * as actions from "./actions";

export type ApplicationState = {
  user: Claims | null;
};

export const initialState: ApplicationState = { user: null };

const config = {
  state: initialState,
  actions,
};

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const overmind = createOvermind(config, {
  devtools: "localhost:3301",
});

/**
 * useAppState uses useLayoutEffect
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 */
require("react").useLayoutEffect = require("react").useEffect;

export const useAppState = createHook<typeof overmind>();

export type StateFromAppInitialProps = Partial<Pick<ApplicationState, "user">>;

interface AppStateProviderProps {
  stateFromInitialProps: StateFromAppInitialProps;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
  stateFromInitialProps,
}) => {
  useLayoutEffect(() => {
    if (!overmind.state.user && stateFromInitialProps.user) {
      overmind.actions.setUser(stateFromInitialProps.user);
    }
  }, [stateFromInitialProps.user]);

  return <Provider value={overmind}>{children}</Provider>;
};
