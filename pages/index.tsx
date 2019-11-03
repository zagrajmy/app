import React from "react";
import Head from "next/head";

import { Nav, Page } from "../src/components";
import { meetingsApi } from "../src/api";
import { Meeting } from "../src/types";

type InitialProps = { meetings: Meeting[] };

const Home = ({ meetings }: InitialProps) => (
  <Page>
    <Head>
      <title>zagraj.my</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">zagraj.my</h1>
      <p className="description">
        Smoki się same nie ubiją. Zapisz się na sesję.
      </p>
    </div>

    <ul>
      {meetings.map(m => {
        return (
          <li key={m.id}>
            <h3>{m.title}</h3>
            <p>{m.description}</p>
          </li>
        );
      })}
    </ul>

    <style jsx>{`
      .hero {
        width: 100%;
        color: var(--jet);
        background: var(--oldLace);
        padding: 80px 0 64px 0;
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

Home.getInitialProps = async (): Promise<InitialProps> => {
  const meetings = await meetingsApi.getAll();
  return { meetings };
};

export default Home;
