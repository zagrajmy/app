import React from "react";
import Head from "next/head";
import { isAfter } from "date-fns";

import { MeetingCardsList } from "../src/app/components/MeetingCardsList";
import { Page, MeetingCard } from "../src/app/components";
import { meetingsApi } from "../src/app/api";
import { Meeting } from "../src/app/types";
import { Link } from "../src/lib";

type InitialProps = { meetings: Meeting[] };

const IndexPage = ({ meetings }: InitialProps) => (
  <Page>
    <Head>
      <title>zagraj.my</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header
      sx={{
        width: "100%",
        padding: "80px 0 4px 0",
        textAlign: "center"
      }}
    >
      <h1
        sx={{
          marginTop: 0,
          marginBottom: "0.4em",
          width: "100%",
          lineHeight: 1.15
        }}
      >
        zagraj.my
      </h1>
      <p sx={{ fontSize: 4 }}>Smoki się same nie ubiją. Zapisz się na sesję.</p>
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
        paddingBottom: "2em"
      }}
    >
      <Link
        href="/meetings"
        sx={{
          display: "block",
          bg: "primary",
          color: "white",
          padding: "0.8em 1.2em",
          borderRadius: "rounded-lg",
          textDecoration: "none",
          cursor: "pointer",
          boxShadow: "var(--shadow)",
          transition: "box-shadow 150ms linear",
          ":hover": {
            boxShadow: "var(--shadowMd)",
            bg: "primaryLight"
          }
        }}
      >
        Zobacz więcej
      </Link>
    </section>
  </Page>
);

IndexPage.getInitialProps = async (): Promise<InitialProps> => {
  const today = new Date();
  const meetings = await meetingsApi
    .getAll()
    .then(xs => xs.filter(x => !x.date || isAfter(x.date, today)).slice(0, 3));
  return { meetings };
};

export default IndexPage;
