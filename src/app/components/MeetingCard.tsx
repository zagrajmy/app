import React from "react";
import { formatRelative } from "date-fns";
import { Image } from "@theme-ui/components";

import { Link, LinkProps } from "../../lib/Link";

import { Meeting } from "../types";

const MeetingCreationInfo: React.FC<{ meeting: Meeting }> = ({ meeting }) => {
  return (
    <span>
      <Link href="/u/[username_slug]" as={`/u/${meeting.author.slug}`}>
        {meeting.author.name}
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
    }}
    {...props}
  />
);

interface MeetingCardProps {
  meeting: Meeting;
}
export const MeetingCard: React.FC<MeetingCardProps> = ({ meeting }) => {
  return (
    <article
      sx={{
        position: "relative",
        boxShadow: "md",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        borderRadius: "6px",
        background: "rgba(255, 255, 255, 0.9)",
        minHeight: " 200px",
        display: "flex",
        width: "800px",
        maxWidth: "80vw",
        margin: "1em",
        cursor: "pointer",
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
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          backgroundImage:
            meeting.image?.kind === "background" ? meeting.image.src : "none",
        }}
      />
      {meeting.image && meeting.image.kind !== "background" && (
        <Image
          src={meeting.image?.src}
          alt=""
          width={220}
          bg="white"
          sx={{
            width: 200,
            height: 200,
            objectFit: "cover",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        />
      )}
      <div sx={{ pl: "1em" }}>
        <h3>{meeting.title}</h3>
        <MeetingCreationInfo meeting={meeting} />
        <p>{meeting.description}</p>
      </div>
    </article>
  );
};
