import React from "react";
import Link from "next/link";

export const NavHeader = () => (
  <header>
    <nav sx={{ bg: "gray" }}>
      <ul sx={{ p: "4px 12px" }}>
        <li sx={{ flex: 1, textAlign: "left" }}>
          <Link href="/">
            <a>zagraj.my</a>
          </Link>
        </li>
        <li>
          <Link href="/meetings">
            <a>Spotkania</a>
          </Link>
        </li>
        <li>
          <a href="https://github.com/zagrajmy/">GitHub</a>
        </li>
        <li>
          <Link href="/login">
            <a
              sx={{
                display: "block",
                p: "0.35em 0.15em",
                cursor: "pointer",
                "& > div": {
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                  borderRadius: "5px",
                  padding: "0.4em 0.6em",
                },
                "&:hover > div": {
                  bg: "accent",
                  color: "gray",
                },
              }}
            >
              <div>Login</div>
            </a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        ul {
          margin: 0;
          display: flex;
          align-items: center;

          list-style: none;
        }
        li:not(:first-of-type) {
          display: inline-block;
          margin-left: 1em;
        }
        a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          padding: 0.75em;
        }
        a:hover {
          color: rgba(255, 255, 255, 1);
        }
      `}</style>
    </nav>
  </header>
);
