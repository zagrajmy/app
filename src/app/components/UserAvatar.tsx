import { Avatar, AvatarProps } from "@theme-ui/components";
import { Claims } from "../auth";

export interface UserAvatarProps extends Omit<AvatarProps, "ref"> {
  user: Pick<Claims, "name" | "nickname" | "picture">;
}

export function UserAvatar({ user, ...rest }: UserAvatarProps) {
  return (
    <Avatar
      async
      decoding="async"
      loading="lazy"
      importance="low"
      alt={user.name || user.nickname}
      title={user.name || user.nickname}
      width="32"
      height="32"
      src={user.picture}
      {...rest}
    />
  );
}
