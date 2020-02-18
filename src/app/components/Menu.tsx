import { ComponentProps } from "react";
import { Theme } from "theme-ui";
import { Claims } from "../auth";
import { Link } from "../../lib";
import { UserAvatar } from "./UserAvatar";

const Tip = () => (
  <div
    sx={{
      display: "block",
      lineHeight: "11px",
      zIndex: 1,
      textAlign: "center",
      position: "absolute",
      right: 0,
      bottom: "calc(100% - 2px)",
      pr: 1,
      pt: "2px",
    }}
  >
    <svg width="24" height="12" viewBox="0 0 24 12">
      <path
        strokeWidth="1px"
        fillRule="evenodd"
        d="M20 12l-8-8-12 12"
        sx={{
          fill: "background",
          stroke: "background",
        }}
      />
    </svg>
  </div>
);

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
      <UserAvatar user={user} />
    </summary>
    <div
      sx={{
        right: 0,
        top: "calc(100% + 2px)",
        position: "absolute",
        bg: "background",
        borderRadius: 2,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        boxShadow: "lg",
        width: (theme: Theme) => theme?.space?.[6 as keyof typeof theme.space],
        p: 1,
      }}
    >
      <Tip />
      <Link
        href="/settings"
        sx={{
          py: 2,
          px: 3,
          borderRadius: "rounded-sm",
          color: "text",
          whiteSpace: "pre",
          textDecoration: "none",
          transition: "background-color 200ms ease-in",
          ":hover": { bg: "gray.2" },
        }}
      >
        Settings
      </Link>
      <Link
        href="/api/logout"
        sx={{
          py: 2,
          px: 3,
          borderRadius: "rounded-sm",
          color: "text",
          whiteSpace: "pre",
          textDecoration: "none",
          transition: "background-color 200ms ease-in",
          ":hover": { bg: "gray.2" },
        }}
      >
        Log Out
      </Link>
    </div>
  </details>
);
