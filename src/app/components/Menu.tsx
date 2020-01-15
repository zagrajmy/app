import { Avatar } from "@theme-ui/components";
import { ComponentProps } from "react";
import { Claims } from "../auth";
import { Link } from "../../lib";

interface MenuProps extends ComponentProps<"details"> {
  user: Claims;
}
export const Menu = ({ user, ...rest }: MenuProps) => (
  <details
    sx={{
      height: "48px",
      width: "32px",
      position: "relative",
    }}
    {...rest}
  >
    <summary
      sx={{
        display: "inline-flex",
        cursor: "pointer",
        listStyle: "none",
        outline: "none",

        "::-webkit-details-marker": {
          display: "none",
        },

        my: "8px",
      }}
    >
      <Avatar
        async
        decoding="async"
        loading="lazy"
        importance="low"
        alt="hasparus"
        title="hasparus"
        width="32"
        height="32"
        src={user.picture}
      />
    </summary>
    <div
      sx={{
        position: "absolute",
        transform: "translate(-100%, 0px)",
        bg: "background",
        borderRadius: 2,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        boxShadow: "lg",
        "> *": {
          p: 2,
        },
      }}
    >
      <Link href="/settings" sx={{ color: "text", whiteSpace: "pre" }}>
        Settings
      </Link>
      <Link href="/api/logout" sx={{ color: "text", whiteSpace: "pre" }}>
        Log Out
      </Link>
    </div>
  </details>
);
