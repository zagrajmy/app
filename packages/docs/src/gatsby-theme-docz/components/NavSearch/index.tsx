/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { Search } from "gatsby-theme-docz/src/components/Icons";
import { jsx } from "theme-ui";

export const NavSearch = (props) => {
  return (
    <div
      sx={{
        mb: 2,
        display: "inline-flex",
        alignItems: "center",
      }}
      data-testid="nav-search"
    >
      <Search
        size={20}
        sx={{
          color: "gray.4",
          mr: 2,
        }}
      />
      <input
        {...props}
        sx={{
          px: 1,
          py: 2,
          outline: "none",
          background: "none",
          border: "none",
          color: "text",
          fontSize: 1,
        }}
      />
    </div>
  );
};
