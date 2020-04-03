import { Email } from "../model/Email";
import { Assign } from "../../lib/utilityTypes";
import { generated } from "../../../data";
import { Id } from "../model/Id";
import { slugify } from "../../lib/slugify";

export interface User
  extends Assign<
    generated.user,
    {
      // narrowed properties
      uuid: Id;
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
  parseFromDb(u: generated.user): User {
    return {
      ...u,
      slug: slugify(u.name),
    };
  },
};
