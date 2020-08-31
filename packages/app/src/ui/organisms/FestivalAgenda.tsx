import { ThemeUIStyleObject } from "theme-ui";

import { slugify } from "../../lib/slugify";
import { Heading } from "../Heading";

const listStyles: ThemeUIStyleObject = {
  listStyle: "none",
  pl: 0,
};

function FestivalAgendaItemTime({ children }: { children: string }) {
  return (
    <div
      sx={{
        width: ["100%", "30%"],
        flexGrow: 0,
        flexShrink: 0,
        fontSize: 3,
        fontWeight: "bold",
        color: ["gray.4", "gray.5"],
        mb: 1,
        lineHeight: 1,
      }}
    >
      {children}
    </div>
  );
}

export interface FestivalAgendaProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  sx?: ThemeUIStyleObject;
}
export function FestivalAgenda({
  id,
  children,
  sx,
  ...rest
}: FestivalAgendaProps) {
  return (
    <ul
      id={id}
      sx={{
        ...listStyles,
        // TODO: Stack?
        "> li:not(:first-of-type)": { mt: 4 },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </ul>
  );
}

export interface FestivalAgendaRoomProps {
  id: string;
  name: string;
  children: React.ReactNode;
}
FestivalAgenda.Room = ({ id, name, children }: FestivalAgendaRoomProps) => {
  return (
    <li id={id}>
      <a
        href={`#${id}`}
        sx={{
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
          color: "gray.6",
        }}
      >
        <Heading as="h3" sx={{ mb: 3 }}>
          {name}
        </Heading>
      </a>
      <ol
        sx={{
          ...listStyles,
          li: { mb: 3 },
        }}
      >
        {children}
      </ol>
    </li>
  );
};

export interface FestivalAgendaItemProps {
  /**
   * Already formatted time.
   */
  time: string;
  title: string;
  organizer?: {
    name: string;
    organization?: string;
  };
  description?: string;
}
FestivalAgenda.Item = ({
  time,
  organizer,
  title,
  description,
}: FestivalAgendaItemProps) => {
  return (
    <li sx={{ display: "flex", flexDirection: ["column", "row"] }}>
      <FestivalAgendaItemTime>{time}</FestivalAgendaItemTime>
      <div sx={{ overflowX: "hidden" }}>
        <Heading as="h4" size={3} sx={{ color: "gray.5", mb: 2 }}>
          {title}
        </Heading>
        {organizer && (
          <strong sx={{ color: "gray.8" }}>
            {organizer.name}
            {organizer.organization && ` · ${organizer.organization}`}
          </strong>
        )}
        {description && (
          <p sx={{ whiteSpace: "pre-line" }}>{description.trim()}</p>
        )}
      </div>
    </li>
  );
};
