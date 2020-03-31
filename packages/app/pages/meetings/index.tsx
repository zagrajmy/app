import { useTranslation } from "react-i18next";
import { Heading } from "theme-ui";

import { Fragment } from "react";
import { meetingsApi } from "../../src/app/api";
import { MeetingCard, MeetingCardsList, Page } from "../../src/app/components";
import { useAppState } from "../../src/app/store";
import { Meeting } from "../../src/app/types";
import { Link } from "../../src/ui";

interface MeetingsPageProps {
  meetings: Meeting[];
}

const MeetingsPage = ({ meetings }: MeetingsPageProps) => {
  const { t } = useTranslation();
  const { user } = useAppState();

  return (
    <Page sx={{ "& > *": { width: 800 }, alignItems: "center" }}>
      {user && (
        <Fragment>
          <header sx={{ py: 3, display: "flex", justifyContent: "flex-end" }}>
            <Link variant="button" href="/meetings/create">
              {t("new-meeting")}
            </Link>
          </header>
          <section
            sx={{ my: 3, p: 3, bg: "gray.3", borderRadius: "rounded-lg" }}
          >
            <Heading as="h3">Your next meeting</Heading>
            <Heading as="h2">Curse of Strahd III</Heading>
          </section>
        </Fragment>
      )}
      <article sx={{ mt: 3 }}>
        <Heading as="h3">Recent meetings</Heading>
        <MeetingCardsList>
          {meetings.map(m => (
            <li key={m.id}>
              <MeetingCard meeting={m} />
            </li>
          ))}
        </MeetingCardsList>
      </article>
    </Page>
  );
};

MeetingsPage.getInitialProps = async () => {
  const meetings = await meetingsApi.getAll();
  return { meetings };
};

export default MeetingsPage;
