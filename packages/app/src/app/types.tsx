import { Flavor } from "nom-ts";

// TODO: Clean this up

export type Username = Flavor<string, "Username">;

export type UsernameSlug = Flavor<string, "UsernameSlug">;

export type Email = Flavor<string, "Email">;

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
};
export interface User {
  name: Username;
  slug: UsernameSlug;
  email: Email;
  avatar?: string;
}

export type Id = Flavor<string | number, "Id">;

type MeetingImageKind = "background" | "banner" | "small";

export interface MeetingImage {
  src: string;
  kind: MeetingImageKind;
}

export interface Meeting {
  id: Id;
  author: User;
  title: string;
  image?: MeetingImage;
  description?: string;
  published_at?: Date;
  start_time?: Date;
  end_time?: Date;
  created_at: Date;
}
