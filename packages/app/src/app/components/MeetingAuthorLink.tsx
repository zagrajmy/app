import { Meeting } from "../types";
import { Link } from "../../lib/Link";

export const MeetingAuthorLink = ({
  children,
  author
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
