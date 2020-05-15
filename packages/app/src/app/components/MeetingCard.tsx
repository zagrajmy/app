import { formatRelative } from "date-fns";
import { enUS, pl } from "date-fns/locale";
import React from "react";
import { Card, Image } from "theme-ui";

import { Meeting } from "../../../data/types";
import { SupportedLanguage, useLanguage } from "../../i18n";
import { Heading, Link, LinkProps } from "../../ui";

const pickLocale = (language: SupportedLanguage) =>
  language === "pl" ? pl : enUS;

const timeFromNow = (time: Date | string, language: SupportedLanguage) =>
  formatRelative(new Date(time), new Date(), { locale: pickLocale(language) });

const meetingTimes = (
  m: Pick<Meeting, "start_time" | "end_time">,
  language: SupportedLanguage
) => {
  if (!m.start_time) {
    return "";
  }
  return (
    timeFromNow(m.start_time, language) +
    (m.end_time ? ` — ${timeFromNow(m.end_time, language)}` : "")
  );
};

interface MeetingCreationInfoProps {
  meeting: Pick<Meeting, "organizer" | "start_time" | "end_time">;
}
const MeetingCreationInfo = ({ meeting }: MeetingCreationInfoProps) => {
  const lang = useLanguage();
  const times = meetingTimes(meeting, lang);

  return (
    <span>
      <Link
        href="/u/[username_slug]"
        as={`/u/${meeting.organizer.slug}`}
        variant="underlined"
      >
        {meeting.organizer.name}
      </Link>
      {times && ` • ${times}`}
    </span>
  );
};

/**
 * onClicks on divs are evil, and what's worse, they require javascript
 * put this inside of Card to make it clickable
 */
const CardBackgroundLink = (props: LinkProps) => (
  <Link
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      cursor: "pointer",
    }}
    {...props}
  />
);

const borderRadii = {
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: [0, "5px"],
  borderTopRightRadius: ["5px", 0],
};

interface MeetingCardProps {
  meeting: Pick<Meeting, "id" | "title" | "image" | "description"> &
    MeetingCreationInfoProps["meeting"];
}

export const MeetingCard: React.FC<MeetingCardProps> = ({ meeting }) => {
  return (
    <Card
      as="article"
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        transition: "box-shadow 150ms linear",
        ":hover": {
          boxShadow: "lg",
        },
      }}
    >
      <CardBackgroundLink
        href="/meetings/[id]"
        as={`/meetings/${meeting.id}`}
        sx={{
          ...borderRadii,
          // backgroundImage: Do we need it?
          //   meeting.image?.kind === "background" ? meeting.image.src : "none",
        }}
      />
      {meeting.image && (
        <Image
          src={meeting.image?.src}
          alt=""
          bg="gray.2"
          sx={{
            ...borderRadii,
            width: ["100%", 200],
            height: [200, "100%"],
            minHeight: 200,
            minWidth: 200,
            objectFit: "cover",
          }}
        />
      )}
      <div sx={{ pl: "1em" }}>
        <Heading as="h3" sx={{ my: "1em" }}>
          {meeting.title}
        </Heading>
        <MeetingCreationInfo meeting={meeting} />
        <p>{meeting.description}</p>
      </div>
    </Card>
  );
};
