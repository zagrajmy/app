import React from "react";
import { useRouter } from "next/router";
import { Link, LinkProps } from "../../lib/Link";

const NavLink = (props: LinkProps) => {
  const { pathname } = useRouter();

  return (
    <Link
      {...props}
      sx={
        props.href === pathname
          ? {
              "&&": {
                color: "rgba(255, 255, 255, 0.95)"
              },
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                top: "2.25em",
                left: "50%",
                width: "80%",
                transform: "translate3d(-50%, 2px, 0px)",
                borderBottom: "2px solid currentColor"
              }
            }
          : {}
      }
    />
  );
};

export const NavHeader = () => (
  <header
    sx={{
      a: {
        color: "rgba(255, 255, 255, 0.85)",
        textDecoration: "none",
        padding: "0.75em",
        ":hover": {
          color: "rgba(255, 255, 255, 1)"
        }
      }
    }}
  >
    <nav sx={{ bg: "gray.9" }}>
      <ul
        sx={{
          p: "4px 12px",
          margin: 0,
          display: "flex",
          alignItems: "center",
          listStyle: "none"
        }}
      >
        <li sx={{ flex: 1, textAlign: "left" }}>
          <Link href="/">zagraj.my</Link>
        </li>
        <li>
          <NavLink href="/meetings">Spotkania</NavLink>
        </li>
        <li>
          <a href="https://github.com/zagrajmy/">GitHub</a>
        </li>
        <li>
          <Link
            href="/login"
            sx={{
              display: "block",
              p: "0.35em 0.15em",
              cursor: "pointer",
              "& > div": {
                border: "1px solid rgba(255, 255, 255, 0.9)",
                borderRadius: "rounded",
                padding: "0.4em 0.6em"
              },
              "&:hover > div": {
                bg: "white",
                color: "gray.9"
              }
            }}
          >
            <div>Log in</div>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
