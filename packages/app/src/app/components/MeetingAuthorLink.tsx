import { Link } from "next-next-link";
import { Meeting } from "../../../data/types";

export const MeetingAuthorLink = ({
  children,
  author,
}: {
  children: React.ReactChild;
  author: Meeting["organizer"];
}) => (
  <Link
    href="/u/[username_slug]"
    as={`/u/${author.slug}`}
    sx={{ fontWeight: "bold" }}
  >
    {children}
  </Link>
);
