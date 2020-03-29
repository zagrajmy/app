import React, { ComponentProps } from "react";

export const HeaderFooterListItem = (props: ComponentProps<"li">) => (
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
