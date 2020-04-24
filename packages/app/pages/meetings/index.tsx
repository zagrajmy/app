import { NextPage } from "next";
import { Fragment, useMemo } from "react";
import { Search } from "react-feather";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { Heading } from "theme-ui";
import { assert } from "ts-essentials";

import { Meeting } from "../../data/types";
import {
  getMyMeetings,
  getRecentlyPublishedMeetings,
} from "../../src/app/api-helpers";
import { Claims, makeAuth } from "../../src/app/auth";
import { MeetingCard, MeetingCardsList, Page } from "../../src/app/components";
import { useAppState } from "../../src/app/store";
import { Input, Link } from "../../src/ui";
import { MyMeetingsResult } from "../api/meetings/my-meetings";
import { RecentlyPublishedMeetingsResult } from "../api/meetings/recently-published";

interface LoggedInUserMeetingsProps {
  user: Claims;
  initialData?: MyMeetingsResult;
}
function LoggedInUserMeetings({ initialData }: LoggedInUserMeetingsProps) {
  const { t } = useTranslation();

  const { data, error } = useSWR<MyMeetingsResult, unknown>(
    "/api/meetings/my-meetings",
    () => getMyMeetings(),
    { initialData }
  );

  const { meetings, organizedMeetings } = useMemo(() => {
    return {
      meetings: data?.meetings.map((x) => Meeting.parse(x.meeting)) || [],
      organizedMeetings: data?.organized_meetings.map(Meeting.parse) || [],
    };
  }, [data]);

  if (error) {
    throw error;
  }

  return (
    <Fragment>
      <header sx={{ py: 3, display: "flex", justifyContent: "flex-end" }}>
        <Input
          placeholder="Szukaj spotkań"
          sx={{ mr: 2, flexGrow: 1 }}
          icon={<Search />}
        />
        <Link variant="button" href="/meetings/create">
          {t("new-meeting")}
        </Link>
      </header>
      <section
        sx={{ mt: 2, mb: 3, p: 3, bg: "gray.3", borderRadius: "rounded-lg" }}
      >
        <Heading as="h3" sx={{ opacity: 0.8 }}>
          {t("your-next-meeting")}
        </Heading>
        <span sx={{ fontSize: 7, fontWeight: "heading" }}>
          Curse of Strahd III
        </span>
      </section>
      <article sx={{ mt: 3 }}>
        <Fragment>
          <section>
            <Heading as="h3">{t("organized-meetings")}</Heading>
            {organizedMeetings && (
              <MeetingCardsList>
                {organizedMeetings?.map((meeting) => (
                  <li key={meeting.id}>
                    <MeetingCard meeting={meeting} />
                  </li>
                ))}
              </MeetingCardsList>
            )}
          </section>
          <section>
            <Heading as="h3">{t("meetings-you-participate-in")}</Heading>
            {meetings && (
              <MeetingCardsList>
                {/* eslint-disable-next-line sonarjs/no-identical-functions */}
                {meetings?.map((meeting) => (
                  <li key={meeting.id}>
                    <MeetingCard meeting={meeting} />
                  </li>
                ))}
                {meetings.length === 0 && (
                  <p>{t("not-participating-in-any-meeting")}</p>
                )}
              </MeetingCardsList>
            )}
          </section>
        </Fragment>
      </article>
    </Fragment>
  );
}

interface RecentMeetingsProps {
  user?: never;
  initialData?: RecentlyPublishedMeetingsResult;
}

// TODO: Display also on /meetings/recent
function RecentMeetings({ initialData }: RecentMeetingsProps) {
  const { t } = useTranslation();
  const { data, error } = useSWR<RecentlyPublishedMeetingsResult, unknown>(
    "/api/meetings/recent-meetings",
    () => getRecentlyPublishedMeetings(),
    { initialData }
  );

  if (error) {
    throw error;
  }

  const meetings = useMemo(() => {
    return data?.map(Meeting.parse) || [];
  }, [data]);

  return (
    <article sx={{ mt: 3 }}>
      <section>
        <Heading as="h3">{t("recent-meetings")}</Heading>
        {meetings && (
          <MeetingCardsList>
            {meetings?.map((meeting) => (
              <li key={meeting.id}>
                <MeetingCard meeting={meeting} />
              </li>
            ))}
          </MeetingCardsList>
        )}
      </section>
    </article>
  );
}

type MeetingsPageProps =
  | Omit<LoggedInUserMeetingsProps, "user">
  | RecentMeetingsProps
  | { error?: Error; initialData?: never };

const MeetingsPage: NextPage<MeetingsPageProps> = (props) => {
  const { user } = useAppState();

  if ("error" in props) {
    throw props.error;
  }

  const pageStyles = {
    "& > *": { width: 800, maxWidth: "100%" },
    alignItems: "center",
  };

  if (user) {
    assert(!Array.isArray(props.initialData));
    return (
      <Page sx={pageStyles}>
        <LoggedInUserMeetings user={user} initialData={props.initialData} />
      </Page>
    );
  }

  return (
    <Page sx={pageStyles}>
      <RecentMeetings
        initialData={
          Array.isArray(props.initialData) ? props.initialData : undefined
        }
      />
    </Page>
  );
};

MeetingsPage.getInitialProps = async (ctx): Promise<MeetingsPageProps> => {
  try {
    if (ctx.req) {
      const session = await makeAuth(ctx.req)?.getSession(ctx.req);
      const user = session?.user;
      if (user) {
        const initialData = await getMyMeetings(ctx.req);
        return { initialData };
      }
      const initialData = await getRecentlyPublishedMeetings(ctx.req);
      return { initialData };
    }
    return {};
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default MeetingsPage;
