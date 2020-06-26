import React from "react";
import { Card, Image } from "theme-ui";

import { SupportedLanguage, timeFromNow, useLanguage } from "../../i18n";
import { Heading, Link, LinkProps } from "../../ui";

const meetingTimes = (
  m: {
    start_time: string | Date;
    end_time: string | Date;
  },
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
  meeting: {
    organizer: { username: string };
    start_time: string | Date;
    end_time: string | Date;
  };
}
const MeetingCreationInfo = ({ meeting }: MeetingCreationInfoProps) => {
  const lang = useLanguage();
  const times = meetingTimes(meeting, lang);

  return (
    <span>
      <Link
        href="/u/[username_slug]"
        as={`/u/${meeting.organizer.username}`}
        variant="underlined"
      >
        {meeting.organizer.username}
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
  meeting: {
    id: number;
    name: string;
    image?: string;
    description: string;
  } & MeetingCreationInfoProps["meeting"];
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
        sx={borderRadii}
      />
      {meeting.image && (
        <Image
          src={meeting.image}
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
          {meeting.name}
        </Heading>
        <MeetingCreationInfo meeting={meeting} />
        <p>{meeting.description}</p>
      </div>
    </Card>
  );
};
