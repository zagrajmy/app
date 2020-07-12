/* eslint-disable import/no-extraneous-dependencies */
import { noop } from "@zagrajmy/app";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import Router, { createRouter } from "next/router";
import { useMemo } from "react";

// SIDE EFFECT ON IMPORT
// mock for next/link
Router.router = {
  push: noop,
  replace: noop,
  prefetch: () => Promise.resolve(),
} as any;
// ---

interface MockedNextRouterProps {
  pathname: string;
  children: React.ReactNode;
}
export const MockedNextRouter = ({
  pathname,
  children,
}: MockedNextRouterProps) => {
  const router = useMemo(() => {
    return createRouter(pathname, {}, "", {
      initialProps: {},
      pageLoader: noop,
      App: () => null,
      Component: () => null,
      isFallback: false,
      subscription: {} as any,
      wrapApp: noop,
    });
  }, [pathname]);

  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};
