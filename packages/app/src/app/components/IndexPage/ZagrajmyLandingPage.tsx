import { useResponsiveValue } from "@theme-ui/match-media";
import React, { ComponentPropsWithoutRef } from "react";
import { fontSize } from "styled-system";

import { Container } from "../../../ui/Container";
import { Grid } from "../../../ui/Grid";
import { Heading } from "../../../ui/Heading";
import { Text } from "../../../ui/Text";
import { useTheme } from "../../../ui/theme";
import {
  MeetingCard,
  MeetingCardArticle,
  MeetingCardBackgroundLink,
  MeetingCardContent,
  MeetingCardImage,
  MeetingCardProps,
  MeetingCreationInfo,
} from "../MeetingCard";
import { MeetingCardsList } from "../MeetingCardsList";

export interface ZagrajmyLandingPageProps {
  spheres: string[]; // TODO: Sphere[]
  festivals: string[]; // TODO Festival[]
}

/* 
TODO
[] Jumbotron - siema coś tam
[] meetings - MettingCards rendered from hardcoded meetings data
[] textSpan - centered and stuff
[] Sfery - fade
[] 
First meeting - copywritting kind of text about the app but displayed as meeting descirption
Second meeting - fighting with Tanos/MiddleEarth
Third meeting - DnD session at Will's
 */

const meetings: MeetingCardProps.Meeting[] = [
  {
    id: 0,
    name: "1",
    description: "1",
    organizer: {
      username: "1",
    },
    // image
    start_time: new Date(),
    end_time: new Date(),
  },
  {
    id: 1,
    name: "1",
    description: "1",
    organizer: {
      username: "1",
    },
    // image
    start_time: new Date(),
    end_time: new Date(),
  },
  {
    id: 2,
    name: "1",
    description: "1",
    organizer: {
      username: "1",
    },
    // image
    start_time: new Date(),
    end_time: new Date(),
  },
];

const Jumbotron = () => {
  return (
    <section sx={{ p: [0, 0, 0, 3] }}>
      {/* https://twitter.com/argyleink/status/1317450791163056128 */}
      {/* TODO: use clamp(min from theme, Xvw, max from theme) */}
      <Heading size={8}>HUGE FUCKING TEXT</Heading>
    </section>
  );
};

const Contact = () => {
  return (
    <p>
      Jeśli chcesz wiedzieć więcej, śmiało pisz na{" "}
      <a
        href="mailto:zagrajmy.net@gmail.com"
        sx={{ variant: "links.underlined" }}
      >
        zagrajmy.net@gmail.com
      </a>
      .
    </p>
  );
};

const MeetingsSection = () => {
  const gridTemplateColumns = useResponsiveValue([
    "minmax(0, 1fr)",
    "minmax(0, 1fr)",
    "minmax(0, 1fr)",
    "repeat(2, minmax(0, 1fr))",
  ]);

  const exampleMeetingPath = `/meetings/0`;

  return (
    <Grid
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns,
      }}
    >
      <Text>Tu opowiadamy o tych trzech spotkaniach, bo fajne są.</Text>
      <MeetingCardsList>
        <li>
          {/* TODO: Meeting jako box na copywriting. "Przykładowe" wydarzenie */}
          <MeetingCardArticle>
            <MeetingCardBackgroundLink
              // TODO Gdzie to powinno linkować?
              href="/"
            />
            {/* TODO {meeting.image && <MeetingCardImage src={'obrazek chcemy'} />} */}
            <MeetingCardContent>
              <Heading as="h3" sx={{ my: "1em" }}>
                Przykładowe spotkanie
              </Heading>
              <MeetingCreationInfo
                meeting={{
                  start_time: new Date(),
                  end_time: new Date(),
                  organizer: { username: "Kuba" },
                }}
              />
              <p>To jest przykładowy opis spotkania</p>
            </MeetingCardContent>
          </MeetingCardArticle>
        </li>
        <li>
          <MeetingCardArticle>
            <MeetingCardBackgroundLink
              // example meeting in the database
              // todo: seed it with a script
              href="/meetings/[id]"
              as={exampleMeetingPath}
            />
            {/* {meeting.image && <MeetingCardImage src={meeting.image} />} */}
            <MeetingCardContent>
              <Heading as="h3" sx={{ my: "1em" }}>
                TODO
              </Heading>
              <MeetingCreationInfo
                meeting={{
                  start_time: new Date(),
                  end_time: new Date(),
                  organizer: { username: "Kuba" },
                }}
              />
              <p>Todo todo ipsum dolor sit todo</p>
            </MeetingCardContent>
          </MeetingCardArticle>
        </li>
        <li>
          <MeetingCardArticle>
            <MeetingCardBackgroundLink
              href="/meetings/[id]"
              as={exampleMeetingPath}
            />
            {/* {meeting.image && <MeetingCardImage src={meeting.image} />} */}
            <MeetingCardContent>
              <Heading as="h3" sx={{ my: "1em" }}>
                TODO
              </Heading>
              <MeetingCreationInfo
                meeting={{
                  start_time: new Date(),
                  end_time: new Date(),
                  organizer: { username: "Piotrek" },
                }}
              />
              <p>Todo todo todododo</p>
            </MeetingCardContent>
          </MeetingCardArticle>
        </li>
      </MeetingCardsList>
    </Grid>
  );
};

const SpheresSection = () => {
  return null;
};

export function ZagrajmyLandingPage({
  spheres: _1,
  festivals: _2,
}: ZagrajmyLandingPageProps) {
  return (
    <Container mt={4} mb={[0, 5]} sx={{ py: [3, 4], px: [2, 2, 2, 0] }}>
      <Jumbotron />
      <MeetingsSection />
      <strong>
        Cześć!{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </strong>
      <br />
      <p>
        Budujemy tutaj aplikację do organizacji konwentów i umawiania się na
        sesje RPG.
      </p>
      <Grid>dupa</Grid>
    </Container>
  );
}

export default ZagrajmyLandingPage;
