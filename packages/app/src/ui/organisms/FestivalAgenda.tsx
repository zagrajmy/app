import { SystemStyleObject } from "theme-ui";

import { slugify } from "../../lib/slugify";
import { Heading } from "../Heading";

const listStyles: SystemStyleObject = {
  listStyle: "none",
  pl: 0,
  my: 4,
};

export interface FestivalAgendaProps {
  id: string;
  children: React.ReactNode;
}
export function FestivalAgenda({ id, children }: FestivalAgendaProps) {
  return (
    <ul id={id} sx={listStyles}>
      {children}
    </ul>
  );
}

export interface FestivalAgendaRoomProps {
  name: string;
  children: React.ReactNode;
}
FestivalAgenda.Room = ({ name, children }: FestivalAgendaRoomProps) => {
  return (
    <li id={slugify(name)}>
      <Heading as="h3" sx={{ mb: 2, color: "gray.7" }}>
        {name}
      </Heading>
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
      <div
        sx={{
          width: ["100%", "30%"],
          flexGrow: 0,
          flexShrink: 0,

          fontSize: 3,
          fontWeight: "bold",
          color: ["gray.4", "gray.6"],
          mb: 1,
          lineHeight: 1,
        }}
      >
        {time}
      </div>
      <div>
        <Heading as="h4" size={3} sx={{ color: "gray.6", mb: 2 }}>
          {title}
        </Heading>
        {organizer && (
          <strong sx={{ color: "gray.9" }}>
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