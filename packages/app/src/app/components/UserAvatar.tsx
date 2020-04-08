import { Avatar, AvatarProps } from "../../ui/Avatar";

import { Claims } from "../auth";

export interface UserAvatarProps extends Omit<AvatarProps, "ref"> {
  claims: Pick<Claims, "name" | "nickname" | "picture">;
}

export function UserAvatar({ claims, ...rest }: UserAvatarProps) {
  return (
    <Avatar
      alt={claims.name || claims.nickname}
      title={claims.name || claims.nickname}
      src={claims.picture}
      {...rest}
    />
  );
}
