import { isPast } from "date-fns";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React, { Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Flex, get, Grid, Theme } from "theme-ui";

import { hasura } from "../data";
import { order_by } from "../data/graphql-zeus";
import { sphereByIdOrDomainQueryArgs } from "../data/queries";
import { Page } from "../src/app/components";
import { CommonHead } from "../src/app/components/CommonHead";
import { detectSphere } from "../src/app/detectSphere";
import { useSettings } from "../src/app/store/useSettings";
import { formatDate, formatHour, useLanguage } from "../src/i18n";
import { head } from "../src/lib/head";
import { AsyncReturnType } from "../src/lib/utilityTypes";
import {
  Code,
  Container,
  Heading,
  Message,
  Spacer,
  Stack,
  Text,
} from "../src/ui";
import * as icons from "../src/ui/icons";
import { mdx } from "../src/ui/mdx";
import { FestivalAgenda } from "../src/ui/organisms/FestivalAgenda";

function fetchSphereData(
  ctx: GetServerSidePropsContext,
  sphere: { id: number | undefined; domain: string }
) {
  return hasura
    .fromCookies(ctx.req)
    .query({
      nb_sphere: [
        sphereByIdOrDomainQueryArgs(sphere),
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
              end_time: true, // stop showing forms after this
              settings: [{}, true],
              ch_rooms: [
                {},
                {
                  name: true,
                  ch_time_tables: [
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
        <icons.Calendar size={18} sx={{ color: "gray.8" }} />
      </Flex>
      <Flex
        sx={{
          transform: "translateY(0.5px)",
          whiteSpace: "pre",
          color: "gray.9",
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
      t("sphere-home-intro-text", {
        sphereName: settings.sphereName,
      })
    );
  }, [settings.sphereName, t]);

  if (!festival) {
    // TODO
    return (
      <Container py={4}>
        TODO: Hey! There is no festival in this sphere. How should we display
        this?
      </Container>
    );
  }

  return (
    <Container py={4} px={2} sx={{ maxWidth: "containerThin" }}>
      <Heading as="h1">{festival.name}</Heading>
      <Spacer height={3} />
      <FestivalDateTime
        startTime={festival.start_time}
        endTime={festival.end_time}
      />
      {introText}
      {isPast(new Date(festival.start_publication)) && (
        <Fragment>
          <Heading as="h2" sx={{ my: 4 }}>
            {t("agenda")}
          </Heading>
          <FestivalAgenda id="agenda">
            {festival.ch_rooms.map((room, i) => (
              <FestivalAgenda.Room name={room.name} key={i}>
                {room.ch_time_tables.map(({ nb_meeting }) => {
                  if (!nb_meeting) {
                    return null;
                  }

                  const {
                    id,
                    name: title,
                    description,
                    // slug, // todo: meeting detail
                    organizer,
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
                      organizer={{ name: organizer.username }}
                      title={title}
                      description={description}
                    />
                  );
                })}
              </FestivalAgenda.Room>
            ))}
          </FestivalAgenda>
        </Fragment>
      )}
    </Container>
  );
}
interface HubHomeProps {
  spheres: string[]; // TODO: Sphere[]
  festivals: string[]; // TODO Festival[]

  error?: never;
  ch_festivals?: never;
}

function HubHome({ spheres, festivals }: HubHomeProps) {
  return (
    <Container py={4} px={2}>
      {JSON.stringify({ spheres, festivals }, null, 2)}
      {spheres.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </Container>
  );
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
          <Fragment>
            {/* todo: add a cute "oopsie" message screen */}
            <p>{t("sphere-home-not-found")}</p>
            {process.env.NODE_ENV === "development" && (
              <Message>
                Add <Code>__dev_sphere_id</Code> or{" "}
                <Code>__dev_sphere_domain</Code> query parameter to the URL.
                <br />
                <small>This message won't land in the production build.</small>
              </Message>
            )}
          </Fragment>
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
