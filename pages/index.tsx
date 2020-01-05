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

    <header className="hero">
      <h1 className="title">zagraj.my</h1>
      <p className="description">
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
      className="see-more"
      sx={{
        // styling anchors breaks Next Link behavior
        a: {
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
        }
      }}
    >
      <Link href="/meetings">Zobacz więcej</Link>
    </section>

    <style jsx>{`
      .index-page {
        display: none;
      }
      .see-more {
        display: flex;
        justify-content: center;
        align-items: center;

        padding-bottom: 2em;
      }
      .hero {
        width: 100%;
        color: var(--jet);
        padding: 80px 0 4px 0;
      }
      .title {
        margin-top: 0;
        margin-bottom: 0.4em;
        width: 100%;
        line-height: 1.15;
      }
      .title,
      .description {
        text-align: center;
      }
      .description {
        font-size: 24px;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: var(--jet);
      }
    `}</style>
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
