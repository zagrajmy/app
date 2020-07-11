import Head from "next/head";
import * as React from "react";
import { useTranslation } from "react-i18next";

import { useAppState } from "../store";

export function CommonHead() {
  const { t } = useTranslation();
  const { sphere } = useAppState();

  const appName = t("page-title") || sphere.name;

  return (
    <Head>
      <title>{appName}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
