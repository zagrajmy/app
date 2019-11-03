import React from "react";
import Link from "next/link";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>zagraj.my</a>
        </Link>
      </li>
      <a href="https://github.com/zagrajmy/">GitHub</a>
    </ul>

    <style jsx>{`
      nav {
        background: #333;
        text-align: center;
      }
      ul {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        list-style: none;
      }
      nav > ul {
        padding: 4px 16px;
      }
      a {
        color: rgba(255, 255, 255, 0.92);
        text-decoration: none;
        padding: 0.75em;
      }
      a:hover {
        color: rgba(255, 255, 255, 1);
      }
    `}</style>
  </nav>
);
