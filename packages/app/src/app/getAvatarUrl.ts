import { generated } from "../../data";

export function getAvatarUrl(user: Pick<generated.cr_user, "username">) {
  return `https://zagrajmy.net/api/u/avatar/${user.username}`;
}
