import { GetServerSideProps, NextPage } from "next";
import { useMemo } from "react";
import { Search } from "react-feather";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { Heading } from "theme-ui";
import { assert } from "ts-essentials";

import { Nil } from "../../src";
import {
  getMyMeetings,
  getRecentlyPublishedMeetings,
  RecentlyPublishedMeetingsResult,
} from "../../src/app/api-helpers";
import { makeAuth } from "../../src/app/auth";
import { MeetingCard, MeetingCardsList, Page } from "../../src/app/components";
import { useAppState } from "../../src/app/store";
import { ErrorObject } from "../../src/lib/ErrorObject";
import { Input, Link } from "../../src/ui";
import { MyMeetingsResult } from "../api/meetings/my-meetings";

const pageStyles = {
  "& > *": { width: 800, maxWidth: "100%" },
  alignItems: "center",
};

function useMyMeetings(initialData: MyMeetingsResult | Nil) {
  const { data, error } = useSWR<MyMeetingsResult | Nil, unknown>(
    "/api/meetings/my-meetings",
    () => initialData && getMyMeetings(),
    { initialData }
  );

  const { meetings, organizedMeetings } = useMemo(() => {
    return {
      meetings: data?.meetings.map((x) => x.meeting) || [],
      organizedMeetings: data?.organized_meetings || [],
    };
  }, [data]);

  return {
    meetings,
    organizedMeetings,
    error,
  };
}

function useRecentMeetings(initialData: RecentlyPublishedMeetingsResult) {
  return useSWR<RecentlyPublishedMeetingsResult, unknown>(
    "/api/meetings/recent-meetings",
    () => {
      // TODO!
      // getRecentlyPublishedMeetings(),
      return initialData!;
    },
    { initialData }
  );
}

interface LoggedInUserMeetingsProps {
  initialData: MyMeetingsResult;
}
function LoggedInUserMeetingsList({ initialData }: LoggedInUserMeetingsProps) {
  const { t } = useTranslation();
  const { meetings, organizedMeetings } = useMyMeetings(initialData);

  return (
    <>
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
        <>
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
        </>
      </article>
    </>
  );
}

interface RecentMeetingsProps {
  initialData: RecentlyPublishedMeetingsResult;
}
function RecentMeetingsList({ initialData }: RecentMeetingsProps) {
  const { t } = useTranslation();
  const { data, error } = useRecentMeetings(initialData);

  if (error) {
    throw error;
  }

  const meetings = useMemo(() => data || [], [data]);

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

type InitialData = {
  recentMeetings: RecentlyPublishedMeetingsResult;
  myMeetings?: MyMeetingsResult | Nil;
};

type MeetingsPageProps =
  | {
      error?: never;
      initialData: InitialData;
    }
  | { error: ErrorObject; initialData: { [T in keyof InitialData]?: Nil } };

const MeetingsPage: NextPage<MeetingsPageProps> = (props) => {
  const { t } = useTranslation();
  const { user, sphere } = useAppState();

  if ("error" in props) {
    throw props.error;
  }

  const { initialData } = props;

  // TODO: If sphere isn't open display meetings from the festival which are
  // not far away in the past, but don't allow creating new even to logged users
  const sphereIsOpen = sphere.is_open;

  if (user) {
    assert(!Array.isArray(props.initialData));
    return <Page sx={pageStyles} />;
  }

  return (
    <Page sx={pageStyles}>
      <header
        sx={{
          py: 3,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* TODO: lift search up */}
        <Input
          placeholder={t("search-meetings")}
          sx={{ mr: 2, flexGrow: 1 }}
          icon={<Search />}
        />
        {sphereIsOpen && (
          <Link
            variant="button"
            href="/meetings/create"
            onClick={() => {
              // TODO
              if (!user) {
                alert(
                  "Hold up! First things first, hombre. Let's create an account for you first."
                );
              }
            }}
          >
            {t("new-meeting")}
          </Link>
        )}
      </header>
      {/* TODO: Tabs [Recent Meetings] [My Meetings] */}
      <RecentMeetingsList initialData={initialData.recentMeetings} />
      {initialData.myMeetings && (
        <LoggedInUserMeetingsList initialData={initialData.myMeetings} />
      )}
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<MeetingsPageProps> = async (
  ctx
): Promise<{ props: MeetingsPageProps }> => {
  try {
    const session = await makeAuth(ctx.req)?.getSession(ctx.req);
    const user = session?.user;

    const myMeetings = user ? await getMyMeetings(ctx.req) : null;
    const recentMeetings = await getRecentlyPublishedMeetings(ctx);

    return { props: { initialData: { myMeetings, recentMeetings } } };
  } catch (error) {
    console.error(error);

    return { props: { error: ErrorObject.fromError(error), initialData: {} } };
  }
};

export default MeetingsPage;
