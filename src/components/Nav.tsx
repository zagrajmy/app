import React from "react";
import Link from "next/link";

export const Nav = () => (
  <nav>
    <ul>
      <li style={{ flex: 1, textAlign: "left" }}>
        <Link href="/">
          <a>zagraj.my</a>
        </Link>
      </li>
      <li>
        <a href="https://github.com/zagrajmy/">GitHub</a>
      </li>
      <li>
        <Link href="/login">
          <a className="login-button">
            <div>Login</div>
          </a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      .login-button {
        display: block;
        padding: 0.35em 0.15em;
      }
      .login-button > div {
        border: 1px solid rgba(255, 255, 255, 0.9);
        border-radius: 5px;
        padding: 0.4em 0.6em;
      }
      .login-button:hover > div,
      .login-button:focus > div {
        background: white;
        color: var(--jet);
      }
      nav {
        background: var(--jet);
        text-align: center;
      }
      ul {
        margin: 0;
        display: flex;
        align-items: center;

        list-style: none;
      }
      nav > ul {
        padding: 4px 12px;
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
);
