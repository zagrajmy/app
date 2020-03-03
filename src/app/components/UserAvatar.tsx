import { Avatar, AvatarProps , Box } from "theme-ui";


import { Claims } from "../auth";

export interface UserAvatarProps extends Omit<AvatarProps, "ref"> {
  user: Pick<Claims, "name" | "nickname" | "picture">;
}

export function UserAvatar({ user, ...rest }: UserAvatarProps) {
  return (
    <Box
      sx={{ width: 32, height: 32, borderRadius: "round", overflow: "hidden" }}
    >
      <Avatar
        async
        decoding="async"
        loading="lazy"
        importance="low"
        alt={user.name || user.nickname}
        title={user.name || user.nickname}
        src={user.picture}
        width={32}
        height={32}
        {...rest}
      />
      <div
        sx={{
          bg: "gray.3",
          width: 30,
          height: 30,
          margin: "1px",
          borderRadius: "inherit",
        }}
      />
    </Box>
  );
}
