import { Email } from "../model/Email";
import {
  Assign,
  DeepPartial,
  Required,
  StrictOmit,
  Optional,
} from "../../lib/utilityTypes";
import { generated } from "../../../data";
import { Id } from "../model/Id";
import { slugify } from "../../lib/slugify";

type GuildKeys = "guilds" | "guilds_aggregate";
type MeetingKeys =
  | "meetings"
  | "meetings_aggregate"
  | "organized_meetings"
  | "organized_meetings_aggregate";
type Irrelevant = "created_at";
type IgnoredKeys = GuildKeys | MeetingKeys | Irrelevant;

interface MinimalUser
  extends Required<
    DeepPartial<StrictOmit<generated.user, IgnoredKeys>>,
    "email" | "name"
  > {}

export interface User
  extends Assign<
    Optional<generated.user, IgnoredKeys>,
    {
      // narrowed properties
      uuid?: Id;
      email: Email;
    }
  > {
  // future properties
  avatar?: string;
  slug: string;
}

export const User = {
  avatar(u: User) {
    return (
      u.avatar ||
      `${
        typeof window !== "undefined"
          ? window.location.origin
          : "https://zagrajmy.now.sh"
      }/api/u/avatar/${u.slug}`
    );
  },
  parse(u: MinimalUser): User {
    return {
      ...u,
      slug: slugify(u.name!),
    };
  },
};
