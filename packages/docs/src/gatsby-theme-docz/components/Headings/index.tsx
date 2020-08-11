/* eslint-disable import/no-extraneous-dependencies */

import { ComponentPropsWithoutRef } from "react";
import { useThemeUI } from "theme-ui";

import { getCurrentHash } from "../../getCurrentHash";

const activeStyle = { backgroundColor: "gray.2", borderRadius: "rounded" };

const heading = (Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Component = (props: ComponentPropsWithoutRef<"h1">) => {
    const { theme } = useThemeUI();

    const style = theme!.styles?.[Tag];

    const hash = `#${props.id}`;

    return props.id && Tag !== "h1" ? (
      <Tag sx={{ ...style }} {...props}>
        <a
          href={hash}
          sx={{
            color: "inherit",
            textDecoration: "none",
            ":hover": activeStyle,
            ...(hash === getCurrentHash() ? activeStyle : {}),
          }}
        >
          {props.children}
        </a>
      </Tag>
    ) : (
      <Tag sx={style} {...props} />
    );
  };

  Component.displayName = Tag;
  return Component;
};

export const h1 = heading("h1");
export const h2 = heading("h2");
export const h3 = heading("h3");
export const h4 = heading("h4");
export const h5 = heading("h5");
export const h6 = heading("h6");
