import { Flavor } from "nom-ts";

// TODO: Codegen parts of this from the API in the future

export type Username = Flavor<string, "Username">;

export type UsernameSlug = Flavor<string, "UsernameSlug">;

export type Email = Flavor<string, "Email">;

export interface User {
  name: Username;
  slug: UsernameSlug;
  email: Email;
  /**
   * default to https://unavatar.now.sh/:email
   */
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
  date?: Date;
  created_at: Date;
}
