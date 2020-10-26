import { ComponentType, createElement } from "react";

import { Assign } from "../lib";

import { ApplicationState, useAppState } from "./store";

type InjectedProps = { user: NonNullable<ApplicationState["user"]> };
type ResultProps<P> = Omit<P, keyof InjectedProps>;

/**
 * decorated component will redirect if the user is missing
 */
export function withUser<P extends object>(
  component: ComponentType<Assign<P, InjectedProps>>
): ComponentType<ResultProps<P>> {
  const Res: React.FC<ResultProps<P>> = (props: ResultProps<P>) => {
    const { user } = useAppState();
    if (!user) {
      window.location.pathname = "/api/login";
      return <div style={{ flex: 1 }} />;
    }
    return createElement(component, { ...props, user });
  };
  Res.displayName = `withAuth(${component.displayName || component.name})`;
  return Res;
}
