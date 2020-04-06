import React, { ComponentProps } from "react";

export const HeaderFooterListItem = (props: ComponentProps<"li">) => (
  <li
    sx={{
      "> a": {
        color: "rgba(255, 255, 255, 0.85)",
        textDecoration: "none",
        py: "0.75em",
        px: 2,
        ":hover": {
          color: "rgba(255, 255, 255, 1)",
        },
      },
    }}
    {...props}
  />
);
