import Head from "next/head";
import * as React from "react";

import { useTheme } from "../../ui/theme";
import { useAppName } from "../store/useAppName";

export interface CommonHeadProps {
  children?: React.ReactNode;
  titlePrefix?: string;
}
export function CommonHead({ children, titlePrefix }: CommonHeadProps) {
  const appName = useAppName();
  const { theme } = useTheme();

  return (
    <Head>
      <title>
        {titlePrefix ? `${titlePrefix} | ` : ""}
        {appName}
      </title>
      <meta name="theme-color" content={theme.colors.primary} />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      {/* <link rel="mask-icon" href="mask-icon.svg" color="#000000" /> */}
      {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
      {/* <link rel="manifest" href="manifest.json" /> */}
      {children}
    </Head>
  );
}
