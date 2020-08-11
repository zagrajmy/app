import { testUtils } from "../../../test/testUtils";
import { getAvatarUrl } from "../../app/getAvatarUrl";
import { Stack } from "../Stack";
import { MeetingParticipants } from "./MeetingParticipants";

const users = {
  hasparus: {
    uuid: "1",
    username: "hasparus",
    profilePath: "#hasparus",
    avatarUrl: getAvatarUrl({ username: "hasparus" }),
  },
  radowit: {
    uuid: "2",
    username: "radowit",
    profilePath: "#radowit",
    avatarUrl: getAvatarUrl({ username: "radowit" }),
  },
  mszczuj: {
    uuid: "3",
    username: "mszczuj-ze-skrzynna",
    profilePath: "#mszczuj-ze-skrzynna",
    avatarUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
  },
  person1: {
    uuid: "5",
    username: "munchkin77",
    profilePath: "#munchkin77",
    avatarUrl:
      "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80  ",
  },
  person2: {
    uuid: "5",
    username: "munchkin202",
    profilePath: "#munchkin202",
    avatarUrl: "https://thispersondoesnotexist.com/?x=2",
  },
  zagrajmy: Array.from({ length: 20 }).map((_, i) => {
    const username = `zagrajmy-awesome-user-${i}`;
    return {
      uuid: username,
      username,
      profilePath: `#${username}`,
      avatarUrl: getAvatarUrl({ username }),
    };
  }),
};

export const Demo = () => {
  testUtils.useEnglish();

  return (
    <Stack
      gap={3}
      wrapChildren
      sx={{
        "> *": {
          p: 3,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "gray.3",
        },
      }}
    >
      <MeetingParticipants participants={[users.hasparus, users.radowit]} />
      <MeetingParticipants
        limit={8}
        participants={[
          users.hasparus,
          users.radowit,
          users.mszczuj,
          users.person1,
          users.person2,
          users.zagrajmy[0],
          users.zagrajmy[1],
        ]}
      />
      <MeetingParticipants
        limit={40}
        participants={[
          users.zagrajmy[1],
          users.mszczuj,
          users.person1,
          users.zagrajmy[2],
          users.person2,
          users.hasparus,
          users.zagrajmy[0],
          users.radowit,
          users.zagrajmy[3],
        ]}
      />
      <MeetingParticipants
        participants={[users.person2, users.person2, ...users.zagrajmy]}
      />
    </Stack>
  );
};
