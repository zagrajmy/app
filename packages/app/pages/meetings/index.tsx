import { useTranslation } from "react-i18next";
import { Heading } from "theme-ui";
import { Fragment, useMemo } from "react";
import { NextPage } from "next";
import useSWR from "swr";

import { MeetingCard, MeetingCardsList, Page } from "../../src/app/components";
import { useAppState } from "../../src/app/store";
import { Meeting } from "../../data/types";
import { Link } from "../../src/ui";
import { makeAuth } from "../../src/app/auth";
import { getMyMeetings } from "../../src/app/api/user";
import { MyMeetingsResult } from "../api/meetings/my-meetings";

interface MeetingsPageProps {
  initialData?: MyMeetingsResult;
}

const MeetingsPage: NextPage<MeetingsPageProps> = ({ initialData }) => {
  const { t } = useTranslation();
  const { user } = useAppState();

  const { data, error } = useSWR<MyMeetingsResult, unknown>(
    "/api/meetings/my-meetings",
    getMyMeetings,
    { initialData }
  );

  const { meetings, organizedMeetings } = useMemo(() => {
    return {
      meetings: data?.meetings.map((x) => Meeting.parse(x.meeting)),
      organizedMeetings: data?.organized_meetings.map(Meeting.parse),
    };
  }, [data]);

  if (error) {
    throw error; // TODO: Handle me
  }

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
        {data && (
          <Fragment>
            <section>
              <Heading as="h3">Organized meetings</Heading>
              <MeetingCardsList>
                {organizedMeetings?.map((meeting) => (
                  <li key={meeting.id}>
                    <MeetingCard meeting={meeting} />
                  </li>
                ))}
              </MeetingCardsList>
            </section>
            <section>
              <Heading as="h3">Meetings I participate in</Heading>
              <MeetingCardsList>
                {meetings?.map((meeting) => (
                  <li key={meeting.id}>
                    <MeetingCard meeting={meeting} />
                  </li>
                ))}
              </MeetingCardsList>
            </section>
          </Fragment>
        )}
      </article>
    </Page>
  );
};

MeetingsPage.getInitialProps = async (ctx) => {
  try {
    const session = await makeAuth(ctx.req)?.getSessionOrLogIn(
      ctx.req,
      ctx.res
    );
    const user = session?.user;
    if (user) {
      const initialData = await getMyMeetings(ctx.req);
      return { initialData };
    }
  } catch (err) {
    console.error(err);
  }

  return {};
};

export default MeetingsPage;
