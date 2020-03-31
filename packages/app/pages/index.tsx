import { isAfter } from "date-fns";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

import { meetingsApi } from "../src/app/api";
import { MeetingCard, Page } from "../src/app/components";
import { MeetingCardsList } from "../src/app/components/MeetingCardsList";
import { Meeting } from "../src/app/types";
import { Link } from "../src/ui";

type InitialProps = { meetings: Meeting[] };

const IndexPage: NextPage<InitialProps> = ({ meetings }) => {
  const { t } = useTranslation();

  return (
    <Page>
      <Head>
        <title>{t("pageTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        sx={{
          width: "100%",
          padding: "80px 0 4px 0",
          textAlign: "center",
          px: 2,
        }}
      >
        <h1
          sx={{
            marginTop: 0,
            marginBottom: "0.4em",
            width: "100%",
            lineHeight: 1.15,
          }}
        >
          {t("pageTitle")}
        </h1>
        <p sx={{ fontSize: 4 }}>
          Smoki się same nie ubiją. Zapisz się na sesję.
        </p>
      </header>

      <MeetingCardsList>
        {meetings.map(m => (
          <li key={m.id}>
            <MeetingCard meeting={m} />
          </li>
        ))}
      </MeetingCardsList>

      <section
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "2em",
        }}
      >
        <Link variant="button" href="/meetings">
          {t("see-more")}
        </Link>
      </section>
    </Page>
  );
};

IndexPage.getInitialProps = async (): Promise<InitialProps> => {
  const today = new Date();
  const meetings = await meetingsApi
    .getAll()
    .then(xs =>
      xs.filter(x => !x.start_time || isAfter(x.start_time, today)).slice(0, 3)
    );
  return { meetings };
};

export default IndexPage;
