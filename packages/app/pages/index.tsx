import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import { Meeting } from "../data/types";
import { MeetingCard, Page } from "../src/app/components";
import { MeetingCardsList } from "../src/app/components/MeetingCardsList";
import { Link, Container } from "../src/ui";
import { getRecentlyPublishedMeetings } from "../src/app/api-helpers";
import { NoPublishedMeetings } from "../src/ui/messageScreens/NoPublishedMeetings";

type InitialProps = { meetings: Meeting[] };

const IndexPage: NextPage<InitialProps> = ({ meetings }) => {
  const { t } = useTranslation();

  return (
    <Page>
      <Head>
        <title>{t("pageTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {meetings.length ? (
        <Container sx={{ flex: 1, width: 800 }}>
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
            {meetings.map((m) => (
              <li key={m.id}>
                <MeetingCard meeting={m} />
              </li>
            ))}
          </MeetingCardsList>
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "2em",
            }}
          >
            <Link variant="button" href="/meetings" sx={{ fontSize: 3 }}>
              {t("see-more")}
            </Link>
          </div>
        </Container>
      ) : (
        <Container sx={{ flex: 1 }}>
          <NoPublishedMeetings sx={{ height: "76vh", my: 4 }}>
            <Link variant="button" href="/meetings/create" sx={{ fontSize: 3 }}>
              Create a meeting
            </Link>
          </NoPublishedMeetings>
        </Container>
      )}
    </Page>
  );
};

IndexPage.getInitialProps = async (ctx): Promise<InitialProps> => {
  const meetings = await getRecentlyPublishedMeetings(ctx.req, 3);

  return { meetings: meetings.map(Meeting.parse) };
};

export default IndexPage;
