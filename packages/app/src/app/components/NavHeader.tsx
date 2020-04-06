import React from "react";
import { alpha } from "@theme-ui/color";
import { Link } from "next-next-link";
import { useTranslation } from "react-i18next";

import { Select, SelectProps } from "../../ui";

import { StateFromAppInitialProps, useAppState } from "../store";
import { HeaderFooterListItem } from "./HeaderFooterListItem";
import { Menu } from "./Menu";
import { NavLink } from "./NavLink";
import { SUPPORTED_LANGUAGES } from "../../i18n";

const LocalePicker = (props: Omit<SelectProps, "ref">) => {
  return (
    <Select
      variant="select-small"
      sx={{
        color: alpha("white", 0.85),
        py: "0.75rem",
        px: 2,
        textAlignLast: "center",
        textTransform: "uppercase",
        fontSize: "0.9em",
        ":hover, :focus": {
          color: "white",
        },
      }}
      {...props}
    >
      {SUPPORTED_LANGUAGES.map((l) => (
        <option key={l}>{l}</option>
      ))}
    </Select>
  );
};

export interface NavHeaderProps
  extends Pick<StateFromAppInitialProps, "user"> {}

export const NavHeader = (props: NavHeaderProps) => {
  const { t } = useTranslation();
  const state = useAppState();

  const user = state.user || props.user;

  return (
    <header>
      <nav
        sx={{
          bg: "gray.9",
          boxShadow: "inset 0 -1px 0 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        <ul
          sx={{
            height: "68px",
            p: "4px 12px",
            margin: 0,
            display: "flex",
            alignItems: "center",
            listStyle: "none",

            maxWidth: 1120,
            mx: "auto",
          }}
        >
          <HeaderFooterListItem sx={{ flex: 1, textAlign: "left" }}>
            <Link href="/">zagraj.my</Link>
          </HeaderFooterListItem>
          <HeaderFooterListItem>
            <LocalePicker
              value={user?.locale || "en"}
              onChange={(e) => console.log("change locale", e.target.value)}
            />
          </HeaderFooterListItem>
          <HeaderFooterListItem>
            <NavLink href="/meetings">{t("meetings")}</NavLink>
          </HeaderFooterListItem>
          <HeaderFooterListItem>
            {user ? (
              <Menu user={user} />
            ) : (
              <Link
                href="/api/login"
                sx={{
                  display: "block",
                  p: "0.35em 0.15em",
                  cursor: "pointer",
                  "& > div": {
                    border: "1px solid rgba(255, 255, 255, 0.9)",
                    borderRadius: "rounded",
                    padding: "0.4em 0.6em",
                  },
                  "&:hover > div": {
                    bg: "white",
                    color: "gray.9",
                  },
                }}
              >
                <div>Log in</div>
              </Link>
            )}
          </HeaderFooterListItem>
        </ul>
      </nav>
    </header>
  );
};
