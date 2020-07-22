import { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import { useTranslation } from "react-i18next";

import { getRecentlyPublishedMeetings } from "../src/app/api-helpers";
import { MeetingCard, Page } from "../src/app/components";
import { CommonHead } from "../src/app/components/CommonHead";
import { MeetingCardsList } from "../src/app/components/MeetingCardsList";
import { useAppName } from "../src/app/store/useAppName";
import { Container, Link } from "../src/ui";
import { NoPublishedMeetingsScreen } from "../src/ui/organisms/messageScreens";

/**
 * @deprecated
 */
type OldMeeting = {
  organizer: {
    username: string;
  };
  start_time: string | Date;
  end_time: string | Date;
  id: number;
  name: string;
  image?: string;
  description: string;
};

type IndexPageProps = { meetings: OldMeeting[] };

const IndexPage: NextPage<IndexPageProps> = ({ meetings }) => {
  const { t } = useTranslation();
  const appName = useAppName();

  return (
    <Page>
      <CommonHead />

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
                lineHeight: "heading",
              }}
            >
              {appName}
            </h1>
            <p sx={{ fontSize: 4 }}>{t("sphere-subtitle-prompt")}</p>
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
          <NoPublishedMeetingsScreen sx={{ height: "76vh", my: 4 }}>
            <Link variant="button" href="/meetings/create" sx={{ fontSize: 3 }}>
              Create a meeting
            </Link>
          </NoPublishedMeetingsScreen>
        </Container>
      )}
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  ctx
) => {
  const meetings = await getRecentlyPublishedMeetings(ctx.req, 3);

  return { props: { meetings } };
};

export default IndexPage;
