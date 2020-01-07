import { Avatar } from "@theme-ui/components";
import { ComponentProps } from "react";
import { Claims } from "../auth";

interface MenuProps extends ComponentProps<"details"> {
  user: Claims;
}
export const Menu = ({ user, ...rest }: MenuProps) => (
  <details
    sx={{
      height: "48px",
      width: "32px",
      position: "relative",
    }}
    {...rest}
  >
    <summary
      sx={{
        display: "inline-flex",
        cursor: "pointer",
        listStyle: "none",
        outline: "none",

        "::-webkit-details-marker": {
          display: "none",
        },

        my: "8px",
      }}
    >
      <Avatar
        async
        decoding="async"
        loading="lazy"
        importance="low"
        alt="hasparus"
        title="hasparus"
        width="32"
        height="32"
        src={user.picture}
      />
    </summary>
    <div
      role="menu"
      sx={{
        position: "absolute",
        transform: "translate(-100%, 0px)",
      }}
    >
      menu
    </div>
  </details>
);
