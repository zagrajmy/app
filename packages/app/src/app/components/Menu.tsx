import { get } from "@theme-ui/css";
import { Link } from "next-next-link";
import { ComponentProps, useRef } from "react";
import { Theme } from "theme-ui";
import useOnClickOutside from "use-onclickoutside";

import { Claims } from "../auth";
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
  claims: Claims;
}

/**
 * @note https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html
 */
export const Menu = ({ claims, ...rest }: MenuProps) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  useOnClickOutside(detailsRef, () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  });

  return (
    <details
      ref={detailsRef}
      sx={{
        height: "48px",
        width: "48px",
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

          py: 2,
          px: 1,
          // ":focus > :first-of-type": {}, // TODO?
        }}
      >
        <UserAvatar claims={claims} />
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
          width: (theme: Theme) => get(theme, "space.6"),
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
};
