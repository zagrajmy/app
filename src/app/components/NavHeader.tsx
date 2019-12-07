import React from "react";

import { Link } from "../../lib/Link";

export const NavHeader = () => (
  <header
    sx={{
      a: {
        color: "rgba(255, 255, 255, 0.9)",
        textDecoration: "none",
        padding: "0.75em",
        ":hover": {
          color: "rgba(255, 255, 255, 1)"
        }
      }
    }}
  >
    <nav sx={{ bg: "gray.900" }}>
      <ul
        sx={{
          p: "4px 12px",
          margin: 0,
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          li: {
            ":not(:first-of-type)": {
              display: "inline-block",
              marginLeft: "1em"
            }
          }
        }}
      >
        <li sx={{ flex: 1, textAlign: "left" }}>
          <Link href="/">zagraj.my</Link>
        </li>
        <li>
          <Link href="/meetings">Spotkania</Link>
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
                borderRadius: "5px",
                padding: "0.4em 0.6em"
              },
              "&:hover > div": {
                bg: "accent",
                color: "gray.900"
              }
            }}
          >
            <div>Login</div>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
