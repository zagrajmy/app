import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "../../lib/Link";
import { useAppState, StateFromAppInitialProps } from "../store";
import { Menu } from "./Menu";
import { NavLink } from "./NavLink";
import { HeaderFooterListItem } from "./HeaderFooterListItem";

export interface NavHeaderProps
  extends Pick<StateFromAppInitialProps, "user"> {}

export const NavHeader = (props: NavHeaderProps) => {
  const { t } = useTranslation();
  const state = useAppState();

  const user = state.user || props.user;

  return (
    <header>
      <nav sx={{ bg: "gray.9" }}>
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
