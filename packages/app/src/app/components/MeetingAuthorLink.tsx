import { Link } from "next-next-link";
import { Meeting } from "../types";

export const MeetingAuthorLink = ({
  children,
  author,
}: {
  children: React.ReactChild;
  author: Meeting["author"];
}) => (
  <Link
    href="/u/[username_slug]"
    as={`/u/${author.slug}`}
    sx={{ fontWeight: "bold" }}
  >
    {children}
  </Link>
);
