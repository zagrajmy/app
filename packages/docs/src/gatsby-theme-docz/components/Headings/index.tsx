/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import { ComponentProps } from "react";

const heading = (Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Component = (props: ComponentProps<"h1">) => {
    const { theme } = useThemeUI();

    const style = theme!.styles?.[Tag];

    return props.id && Tag !== "h1" ? (
      <Tag sx={style} {...props}>
        <a
          href={`#${props.id}`}
          sx={{
            color: "inherit",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
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
