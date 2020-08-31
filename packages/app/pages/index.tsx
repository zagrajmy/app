import { isFuture, isPast } from "date-fns";
import { TFunction } from "i18next";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Flex, ThemeProvider } from "theme-ui";

import { hasura } from "../data";
import { order_by } from "../data/graphql-zeus";
// import { zagrajmyRestApi } from "../src/app/api-helpers/zagrajmyRestApi";
import { CommonHead } from "../src/app/components/CommonHead";
import { Page } from "../src/app/components/Page";
import { detectSphere } from "../src/app/detectSphere";
import { MergedSettings, useSettings } from "../src/app/store/useSettings";
import {
  formatDate,
  formatHour,
  SupportedLanguage,
  useLanguage,
} from "../src/i18n";
import { head } from "../src/lib/head";
import { slugify } from "../src/lib/slugify";
import { AsyncReturnType } from "../src/lib/utilityTypes";
import {
  Code,
  Container,
  ContainerProps,
  Heading,
  Image,
  Link,
  Message,
  Spacer,
  Stack,
  Text,
} from "../src/ui";
import * as icons from "../src/ui/icons";
import { mdx } from "../src/ui/mdx";
import { FestivalAgenda } from "../src/ui/organisms/FestivalAgenda";

const HubHome = dynamic(() => import("../src/app/components/HubHome"));

const HomepageBanner = ({
  settings: { content },
}: {
  settings: MergedSettings;
}) => {
  return content.homepageBanner ? (
    <Image src={content.homepageBanner.src} sx={content.homepageBanner.style} />
  ) : null;
};

function fetchSphereData(
  ctx: GetServerSidePropsContext,
  sphere: { domain: string }
) {
  return hasura
    .fromCookies(ctx.req)
    .query({
      nb_sphere: [
        { where: { django_site: { domain: { _eq: sphere.domain } } } },
        {
          ch_festivals: [
            {
              order_by: [{ start_time: order_by.desc_nulls_last }],
              where: { start_proposal: { _lte: "now" } },
              limit: 1,
            },
            {
              name: true,
              start_time: true, // for display only
              start_publication: true, // we show the agenda after this time
              start_proposal: true, // show forms after this
              end_proposal: true,
              end_time: true, // stop showing forms after this
              settings: [{}, true],
              slug: true,
              ch_wait_lists: [{}, { id: true, name: true }],
              ch_rooms: [
                {},
                {
                  name: true,
                  ch_agenda_items: [
                    {
                      order_by: [{ nb_meeting: { start_time: order_by.asc } }],
                      where: {
                        meeting_confirmed: { _eq: true },
                        nb_meeting: { publication_time: { _lte: "now" } },
                      },
                    },
                    {
                      nb_meeting: {
                        id: true,
                        slug: true,
                        name: true,
                        description: true,
                        start_time: true,
                        end_time: true,
                        organizer: {
                          username: true,
                        },
                        proposal: {
                          speaker_name: true,
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
    .then((res) => head(res.nb_sphere));
}

type Sphere = Exclude<AsyncReturnType<typeof fetchSphereData>, undefined>;

type Festival = Sphere["ch_festivals"][number];
interface FestivalDateTimeProps {
  startTime: Festival["start_time"];
  endTime: Festival["end_time"];
}
const FestivalDateTime = ({ startTime, endTime }: FestivalDateTimeProps) => {
  const lang = useLanguage();
  const { t } = useTranslation();
  return (
    <Stack row gap={2} align="center">
      <Flex>
        <icons.Calendar size={18} sx={{ color: "gray.7" }} />
      </Flex>
      <Flex
        sx={{
          transform: "translateY(0.5px)",
          whiteSpace: "pre",
          color: "gray.8",
        }}
      >
        {t("from")}
        <Text as="strong" variant="bold">
          {" "}
          {formatDate(startTime, lang)}{" "}
        </Text>
        {t("to")}
        <Text as="strong" variant="bold">
          {" "}
          {formatDate(endTime, lang)}
        </Text>
      </Flex>
    </Stack>
  );
};

interface FestivalPageProps extends ContainerProps {
  festival: Festival;
  introText: React.ReactNode;
  t: TFunction;
  lang: SupportedLanguage;
}
const FestivalPage = ({
  festival,
  introText,
  t,
  lang,
  ...rest
}: FestivalPageProps) => {
  const proposalStart = new Date(festival.start_proposal);
  const proposalEnd = new Date(festival.end_proposal);
  const publicationStart = new Date(festival.start_publication);

  const canProposeProgram = isPast(proposalStart) && isFuture(proposalEnd);
  const canSeeAgenda = isPast(publicationStart);
  const agendaIsBeingPrepared = isPast(proposalEnd) && !canSeeAgenda;

  const roomNames = festival.ch_rooms.map((room) => room.name);

  return (
    <Container {...rest} sx={{ width: "container" }}>
      <Heading as="h1">{festival.name}</Heading>
      <Spacer height={3} />
      <FestivalDateTime
        startTime={festival.start_time}
        endTime={festival.end_time}
      />
      {introText}
      {canProposeProgram && (
        <section sx={{ my: 3 }}>
          <Heading as="h2" size={3}>
            {t("propose-program")}
          </Heading>
          {/* todo: if there are no waitlists and the user is sphere manager, prompt them to add a waitlist */}
          <ul>
            {festival.ch_wait_lists.map((waitlist) => (
              <li key={waitlist.id}>
                <Link
                  href="/festival/[slug]/[waitlist]"
                  as={`/festival/${festival.slug}/${waitlist.id}`}
                  variant="underlined"
                  sx={{ fontWeight: "bold" }}
                >
                  {waitlist.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {canSeeAgenda && (
        <>
          <Heading as="h2" sx={{ my: 4 }}>
            {t("agenda")}
          </Heading>
          <Stack as="ul" row gap={3} sx={{ mb: 4 }}>
            {roomNames.map((name) => (
              <li key={name}>
                <Link
                  href={`#${slugify(name)}`}
                  variant="underlined"
                  sx={{ fontWeight: "bold" }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </Stack>
          <FestivalAgenda id="agenda">
            {festival.ch_rooms.map((room, i) => {
              const roomSlug = slugify(room.name);
              return (
                <FestivalAgenda.Room id={roomSlug} name={room.name} key={i}>
                  {room.ch_agenda_items.map(({ nb_meeting }) => {
                    if (!nb_meeting) {
                      return null;
                    }

                    const {
                      id,
                      name: title,
                      description,
                      // slug, // todo: meeting detail
                      organizer,
                      proposal,
                      start_time,
                      end_time,
                    } = nb_meeting;

                    return (
                      <FestivalAgenda.Item
                        key={id}
                        time={`${formatHour(start_time, lang)} - ${formatHour(
                          end_time,
                          lang
                        )}`}
                        organizer={{
                          name: proposal?.speaker_name || organizer.username,
                        }}
                        title={title}
                        description={description}
                        renderLink={(props) => (
                          <Link
                            href="/meetings/[id]"
                            as={`/meetings/${id}`}
                            {...props}
                          />
                        )}
                      />
                    );
                  })}
                </FestivalAgenda.Room>
              );
            })}
          </FestivalAgenda>
        </>
      )}
      {agendaIsBeingPrepared && (
        <>
          {mdx(
            t("festival-agenda-is-being-prepared", {
              publicationStartDate: formatDate(publicationStart, lang),
            })
          )}
        </>
      )}
    </Container>
  );
};

interface SphereHomeProps extends Sphere {
  error?: never;
  spheres?: never;
}

function SphereHome({ ch_festivals }: SphereHomeProps) {
  const { t } = useTranslation();
  const lang = useLanguage();

  const festival = head(ch_festivals);
  const settings = useSettings(festival);

  const introText = useMemo(() => {
    return mdx(
      settings.locale?.[lang]?.["sphere-home-intro-text"]?.replace(
        "{{sphereName}}",
        settings.sphereName || ""
      ) ||
        t("sphere-home-intro-text", {
          sphereName: settings.sphereName,
        })
    );
  }, [lang, settings.locale, settings.sphereName, t]);

  const containerProps: ContainerProps = {
    mt: [0, settings.content?.homepageBanner ? -4 : 4],
    mb: [0, 5],
    py: [3, 5],
    px: [2, 5],
    variant: "sheet",
  };

  return (
    <ThemeProvider theme={settings.theme}>
      <>
        <HomepageBanner settings={settings} />
        {festival ? (
          <FestivalPage
            {...containerProps}
            festival={festival}
            introText={introText}
            t={t}
            lang={lang}
          />
        ) : (
          // todo: sphere's "landing page"? a list of previous festivals if there are any?
          <Container {...containerProps} sx={{ width: "containerThin" }}>
            {introText}
          </Container>
        )}
      </>
    </ThemeProvider>
  );
}
export interface HubHomeProps {
  spheres: string[]; // TODO: Sphere[]
  festivals: string[]; // TODO Festival[]

  error?: never;
  ch_festivals?: never;
}

interface ErrorPageProps {
  error: "sphere-not-found";
}
function ErrorPage({ error }: ErrorPageProps) {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 4, px: 1 }}>
      <Container variant="sheet">
        {error === "sphere-not-found" ? (
          <>
            {/* todo: add a cute "oopsie" message screen */}
            <p>{t("sphere-home-not-found")}</p>
            {process.env.NODE_ENV === "development" && (
              <Message>
                Add <Code>__dev_sphere_domain</Code> query parameter to the URL.
                <br />
                <small>This message won't land in the production build.</small>
              </Message>
            )}
          </>
        ) : null}
      </Container>
    </Container>
  );
}

type IndexPageProps = SphereHomeProps | HubHomeProps | ErrorPageProps;

const IndexPage: NextPage<IndexPageProps> = (props) => {
  return (
    <Page>
      <CommonHead />
      {props.error ? (
        <ErrorPage {...props} />
      ) : props.ch_festivals !== undefined ? (
        <SphereHome {...props} />
      ) : (
        <HubHome {...props} />
      )}
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  ctx
) => {
  const sphere = detectSphere(ctx);

  if (sphere.isHub) {
    // TODO
    const props: HubHomeProps = {
      festivals: [],
      spheres: [],
    };

    return { props };
  }

  const sphereData = await fetchSphereData(ctx, sphere);

  if (sphereData) {
    // TODO Ask with url.
    return {
      props: sphereData,
    };
  }

  return {
    props: {
      error: "sphere-not-found",
    },
  };
};

export default IndexPage;
