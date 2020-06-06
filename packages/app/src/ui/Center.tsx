import { ComponentProps } from "react";
import { Box } from "theme-ui";

export const Center = (
  props: ComponentProps<"div"> & { as?: "section" | "div" | "article" }
) => (
  <Box
    {...props}
    sx={{
      ...(props.sx as {}),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  />
);
