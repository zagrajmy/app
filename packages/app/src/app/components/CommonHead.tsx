import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

export function CommonHead() {
  const { t } = useTranslation();
  return (
    <Head>
      <title>{t("page-title")}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
