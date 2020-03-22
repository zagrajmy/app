import { Box, BoxProps } from "theme-ui";
import { forwardRef } from "react";

export const MaxWidthContainer = forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLDivElement>) => (
    <Box
      ref={ref}
      sx={{
        width: "1100px",
        maxWidth: "100%",
        margin: "0 auto",
      }}
      {...props}
    />
  )
);
