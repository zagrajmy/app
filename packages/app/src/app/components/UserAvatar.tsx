import { Avatar, AvatarProps } from "../../ui/Avatar";

import { Claims } from "../auth";

export interface UserAvatarProps extends Omit<AvatarProps, "ref"> {
  user: Pick<Claims, "name" | "nickname" | "picture">;
}

export function UserAvatar({ user, ...rest }: UserAvatarProps) {
  return (
    <Avatar
      alt={user.name || user.nickname}
      title={user.name || user.nickname}
      src={user.picture}
      {...rest}
    />
  );
}
