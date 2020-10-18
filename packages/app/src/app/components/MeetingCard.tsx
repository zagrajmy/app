import * as React from "react";
import { Image } from "theme-ui";

import { SupportedLanguage, timeFromNow, useLanguage } from "../../i18n";
import { Heading, Link, LinkProps } from "../../ui";
import {
  Card,
  CardBackgroundLink,
  CardBackgroundLinkProps,
} from "../../ui/Card";

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
declare namespace MeetingCreationInfoProps {
  export interface Meeting {
    organizer: { username: string };
    start_time: string | Date;
    end_time: string | Date;
  }
}
interface MeetingCreationInfoProps
  extends Partial<Pick<LinkProps, "href" | "as" | "onClick">> {
  meeting: MeetingCreationInfoProps.Meeting;
}
export const MeetingCreationInfo = ({
  meeting,
  ...linkProps
}: MeetingCreationInfoProps) => {
  const lang = useLanguage();
  const times = meetingTimes(meeting, lang);

  return (
    <span>
      <Link
        href="/u/[username_slug]"
        as={`/u/${meeting.organizer.username}`}
        variant="underlined"
        {...linkProps}
      >
        {meeting.organizer.username}
      </Link>
      {times && ` • ${times}`}
    </span>
  );
};

const borderRadii = {
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: [0, "5px"],
  borderTopRightRadius: ["5px", 0],
};

interface MeetingCardArticleProps {
  children: React.ReactNode;
}
export const MeetingCardArticle = (props: MeetingCardArticleProps) => {
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
        width: "640px",
      }}
      {...props}
    />
  );
};

export const MeetingCardImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
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
  );
};

export const MeetingCardContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div sx={{ pl: "1em", maxWidth: "100%" }}>{children}</div>;
};

export const MeetingCardBackgroundLink = (props: CardBackgroundLinkProps) => {
  return <CardBackgroundLink sx={borderRadii} {...props} />;
};

export declare namespace MeetingCardProps {
  export interface Meeting extends MeetingCreationInfoProps.Meeting {
    id: number;
    name: string;
    image?: string;
    description: string;
  }
}

export interface MeetingCardProps {
  meeting: MeetingCardProps.Meeting;
}

export const MeetingCard: React.FC<MeetingCardProps> = ({ meeting }) => {
  return (
    <MeetingCardArticle>
      <MeetingCardBackgroundLink
        href="/meetings/[id]"
        as={`/meetings/${meeting.id}`}
      />
      {meeting.image && <MeetingCardImage src={meeting.image} />}
      <MeetingCardContent>
        <Heading as="h3" sx={{ my: "1em" }}>
          {meeting.name}
        </Heading>
        <MeetingCreationInfo meeting={meeting} />
        <p>{meeting.description}</p>
      </MeetingCardContent>
    </MeetingCardArticle>
  );
};
