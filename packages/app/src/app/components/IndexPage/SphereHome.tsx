import { isFuture, isPast } from "date-fns";
import { TFunction } from "i18next";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Flex, ThemeProvider } from "theme-ui";

import {
  formatDate,
  formatHour,
  SupportedLanguage,
  useLanguage,
} from "../../../i18n";
import { head } from "../../../lib/head";
import { slugify } from "../../../lib/slugify";
import { AsyncReturnType } from "../../../lib/utilityTypes";
import {
  Container,
  ContainerProps,
  Heading,
  Image,
  Link,
  Spacer,
  Stack,
} from "../../../ui";
import { Calendar } from "../../../ui/icons";
import { mdx } from "../../../ui/mdx";
import { FestivalAgenda } from "../../../ui/organisms/FestivalAgenda";
import { Text } from "../../../ui/Text";
import { MergedSettings, useSettings } from "../../store/useSettings";
import type { fetchSphereData } from "./fetchSphereData";

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
        <Calendar size={18} sx={{ color: "gray.7" }} />
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

const HomepageBanner = ({
  settings: { content },
}: {
  settings: MergedSettings;
}) => {
  return content.homepageBanner ? (
    <Image src={content.homepageBanner.src} sx={content.homepageBanner.style} />
  ) : null;
};

export interface SphereHomeProps extends Sphere {}

export function SphereHome({ ch_festivals }: SphereHomeProps) {
  const { t } = useTranslation();
  const lang = useLanguage();

  const festival = ch_festivals[0];
  const festivalSettings = useSettings(festival);

  const introText = useMemo(() => {
    return mdx(
      festivalSettings.locale?.[lang]?.["sphere-home-intro-text"]?.replace(
        "{{sphereName}}",
        festivalSettings.sphereName || ""
      ) ||
        t("sphere-home-intro-text", {
          sphereName: festivalSettings.sphereName,
        })
    );
  }, [lang, festivalSettings.locale, festivalSettings.sphereName, t]);

  const containerProps: ContainerProps = {
    mt: [0, festivalSettings.content?.homepageBanner ? -4 : 4],
    mb: [0, 5],
    py: [3, 5],
    px: [2, 5],
    variant: "sheet",
  };

  return (
    <ThemeProvider theme={festivalSettings.theme}>
      <>
        <HomepageBanner settings={festivalSettings} />
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

export default SphereHome;
