import { ComponentProps } from "react";
import { Box } from "theme-ui";

export const Center = (props: ComponentProps<"div">) => (
  <Box
    {...props}
    sx={{
      ...props.sx,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  />
);
