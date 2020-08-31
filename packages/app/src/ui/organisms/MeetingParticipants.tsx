import { useTranslation } from "react-i18next";
import { ThemeUIStyleObject } from "theme-ui";

import {
  Avatar,
  AvatarCenteredText as CenteredText,
  AvatarCircle as Circle,
} from "../Avatar";
import { Link, LinkProps } from "../Link";
import { Stack } from "../Stack";
import { Text } from "../Text";

const AVATARS_LIMIT = 7;

const AVATAR_SIZE = 40;

const avatarsStackItemStyles: ThemeUIStyleObject = {
  // TODO: keep --shadow CSS variable globally
  ...{ "--shadow": "0, 0, 0" },
  display: "flex",
  lineHeight: 0,
  transition: "transform 150ms ease, filter 150ms ease",
  filter: "drop-shadow(-2px 0px 3px rgba(var(--shadow),0.07))",
  "&:hover": {
    transform: "translateY(-2px)",
    filter: "drop-shadow(-2px 1px 4px rgba(var(--shadow),0.08))",
  },
};

export interface Participant {
  uuid: string;
  username: string;
  avatarUrl: string;
  profilePath: string;
}

interface ParticipantAvatarProps extends Participant, Omit<LinkProps, "href"> {}

// TODO: Publish Avatar and AvatarStack as a separate library?
// OR Write a short blogpost about it?
// I totally need this in other projects.
const ParticipantAvatar = ({
  avatarUrl,
  profilePath,
  username,
  ...rest
}: ParticipantAvatarProps) => {
  return (
    <Link href={profilePath} {...rest}>
      <Avatar
        size={AVATAR_SIZE}
        title={username}
        src={avatarUrl}
        placeholder={username[0]}
        bordered
      />
    </Link>
  );
};

interface MeetingParticipantsProps {
  participants: Participant[];
  limit?: number;
}

export function MeetingParticipants({
  participants,
  limit,
}: MeetingParticipantsProps) {
  const { t } = useTranslation();

  const { length: count } = participants;

  const cantShowAllParticipants = count > AVATARS_LIMIT;
  const shownParticipants = participants.slice(
    0,
    cantShowAllParticipants ? AVATARS_LIMIT - 1 : count
  );

  return (
    <>
      <Text variant="bold" my={2}>
        {count}
        {limit ? `/${limit}` : null}{" "}
        {t("meeting-participant", { count: limit || count })}
      </Text>
      <Stack row wrapChildren gap={-3}>
        {shownParticipants.map((p) => (
          <ParticipantAvatar key={p.uuid} sx={avatarsStackItemStyles} {...p} />
        ))}
        {cantShowAllParticipants && (
          // todo: open modal with all signed up users
          <Circle size={AVATAR_SIZE} bordered>
            <CenteredText>+{count - AVATARS_LIMIT}</CenteredText>
          </Circle>
        )}
      </Stack>
    </>
  );
}
