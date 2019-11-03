import { Flavor } from "nom-ts";

// TODO: Codegen parts of this from the API in the future

export type Username = Flavor<string, "Username">;
export type Email = Flavor<string, "Email">;

export interface User {
  name: Username;
  email: Email;
}

export type Id = Flavor<string | number, "Id">;

export interface Meeting {
  id: Id;
  author: User;
  title: string;
  description?: string;
  published_at?: Date;
  date?: Date;
  created_at: Date;
}
