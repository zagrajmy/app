import React from "react";
import { useRouter } from "next/router";

import { Link, LinkProps } from "../../lib/Link";

export const NavLink = (props: LinkProps) => {
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
