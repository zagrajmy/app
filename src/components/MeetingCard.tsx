import React from "react";
import { formatRelative } from "date-fns";

import { Link, LinkProps } from "../components/Link";

import { Meeting } from "../types";

const MeetingCreationInfo: React.FC<{ meeting: Meeting }> = ({ meeting }) => {
  return (
    <span>
      <Link href="/u/[username_slug]" as={`/u/${meeting.author.slug}`}>
        {meeting.author.name}
      </Link>
      {meeting.date
        ? ` • ${formatRelative(new Date(meeting.date), new Date())}`
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
    <article className="container">
      <CardBackgroundLink
        href="/meetings/[id]"
        as={`/meetings/${meeting.id}`}
      />
      {meeting.image && <img src={meeting.image} className="image" alt="" />}
      <div sx={{ pl: "1em" }}>
        <h3>{meeting.title}</h3>
        <MeetingCreationInfo meeting={meeting} />
        <p>{meeting.description}</p>
      </div>
      <style jsx>{`
        .container {
          position: relative;

          box-shadow: var(--shadowMd);
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.9);

          min-height: 200px;
          display: flex;

          width: 800px;
          max-width: 80vw;
          margin: 1em;

          cursor: pointer;

          transition: box-shadow 150ms linear;
        }
        .container:hover {
          box-shadow: var(--shadowLg);
        }
        .right {
          padding-left: 1em;
        }
        .image {
          border-radius: 5px 0 0 5px;
          width: 200px;
          height: 200px;
        }
      `}</style>
    </article>
  );
};
