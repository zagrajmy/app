import { Avatar, AvatarProps } from "@theme-ui/components";
import { Box } from "theme-ui";

import { Claims } from "../auth";

export interface UserAvatarProps extends Omit<AvatarProps, "ref"> {
  user: Pick<Claims, "name" | "nickname" | "picture">;
}

export function UserAvatar({ user, ...rest }: UserAvatarProps) {
  return (
    <Box sx={{ width: 32, height: 32, bg: "gray.3", borderRadius: "round" }}>
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
    </Box>
  );
}
