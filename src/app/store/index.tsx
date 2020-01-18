import { createContext, useContext, useRef } from "react";
import { Claims } from "../auth";

export type ApplicationState = {
  user?: Claims | null | undefined;
};

export const initialState: ApplicationState = { user: null };

const ctx = createContext(initialState);

export const useAppState = () => useContext(ctx);

export type StateFromAppInitialProps = Partial<Pick<ApplicationState, "user">>;

interface AppStateProviderProps {
  stateFromInitialProps: StateFromAppInitialProps;
}

const { Provider } = ctx;

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
  stateFromInitialProps,
}) => {
  const cached = useRef<ApplicationState>(initialState);

  if (stateFromInitialProps.user) {
    cached.current.user = stateFromInitialProps.user;
  }

  return <Provider value={cached.current}>{children}</Provider>;
};
