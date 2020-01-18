import React, { ComponentProps } from "react";
import { useRouter } from "next/router";

import { Link, LinkProps } from "../../lib/Link";
import { useAppState, StateFromAppInitialProps } from "../store";
import { Menu } from "./Menu";

const NavLink = (props: LinkProps) => {
  const { pathname } = useRouter();

  return (
    <Link
      {...props}
      sx={
        props.href === pathname
          ? {
              "&&": {
                color: "rgba(255, 255, 255, 0.95)",
              },
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                top: "2.25em",
                left: "50%",
                width: "80%",
                transform: "translate3d(-50%, 2px, 0px)",
                borderBottom: "2px solid currentColor",
              },
            }
          : {}
      }
    />
  );
};

const ListItem = (props: ComponentProps<"li">) => (
  <li
    sx={{
      "> a": {
        color: "rgba(255, 255, 255, 0.85)",
        textDecoration: "none",
        padding: "0.75em",
        ":hover": {
          color: "rgba(255, 255, 255, 1)",
        },
      },
    }}
    {...props}
  />
);

export interface NavHeaderProps
  extends Pick<StateFromAppInitialProps, "user"> {}

export const NavHeader = (props: NavHeaderProps) => {
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
          }}
        >
          <ListItem sx={{ flex: 1, textAlign: "left" }}>
            <Link href="/">zagraj.my</Link>
          </ListItem>
          <ListItem>
            <NavLink href="/meetings">Spotkania</NavLink>
          </ListItem>
          <ListItem>
            <a href="https://github.com/zagrajmy/">GitHub</a>
          </ListItem>
          <ListItem>
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
          </ListItem>
        </ul>
      </nav>
    </header>
  );
};
