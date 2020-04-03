import { formatRelative } from "date-fns";
import React from "react";
import { Image, Card } from "theme-ui";

import { Link, LinkProps } from "next-next-link";

import { Meeting } from "../model";

interface MeetingCreationInfoProps {
  meeting: Pick<Meeting, "organizer" | "start_time">;
}
const MeetingCreationInfo = ({ meeting }: MeetingCreationInfoProps) => {
  return (
    <span>
      <Link href="/u/[username_slug]" as={`/u/${meeting.organizer.slug}`}>
        {meeting.organizer.name}
      </Link>
      {meeting.start_time
        ? ` • ${formatRelative(new Date(meeting.start_time), new Date())}`
        : ""}
    </span>
  );
};

// onClicks on divs are evil and require javascript
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
        <h3>{meeting.title}</h3>
        <MeetingCreationInfo meeting={meeting} />
        <p>{meeting.description}</p>
      </div>
    </Card>
  );
};
