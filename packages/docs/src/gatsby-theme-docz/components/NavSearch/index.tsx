/* eslint-disable import/no-extraneous-dependencies */

import { Search } from "gatsby-theme-docz/src/components/Icons";
import { ComponentProps } from "react";
import { get, Theme } from "theme-ui";

export const NavSearch = (props: ComponentProps<"input">) => {
  return (
    <div
      sx={{
        display: "inline-flex",
        alignItems: "center",
        margin: (t: Theme) => `-${get(t, "space.1")}px`,
        py: 1,
        px: 2,
        borderRadius: "rounded-lg",
        "&:focus-within": {
          backgroundColor: "gray.3",
        },
        mb: 2,
      }}
      data-testid="nav-search"
    >
      <Search
        size={20}
        sx={{
          color: "gray.5",
          mr: 2,
        }}
      />
      <input
        {...props}
        sx={{
          px: 1,
          py: 2,
          background: "none",
          border: "none",
          color: "text",
          fontSize: 1,
          ":focus": {
            outline: "none",
          },
        }}
      />
    </div>
  );
};
