import React, { ComponentPropsWithoutRef } from "react";
import { Flex, Grid, Heading } from "theme-ui";

interface MessageScreenProps extends ComponentPropsWithoutRef<"div"> {
  picture: React.FC<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  heading: string;
  children: React.ReactNode;
}

export const MessageScreen = ({
  picture: Picture,
  heading,
  children,
  ...rest
}: MessageScreenProps) => {
  return (
    <Grid
      as="section"
      columns={[1, 2]}
      sx={{ px: [4, 5], alignItems: "center", position: "relative" }}
      {...rest}
    >
      <Picture
        sx={{
          flex: 1,
          maxHeight: "100%",
          ".white": { fill: "transparent" },
          ".black": { fill: "gray.8" },
          m: [1, 3],
        }}
      />
      <Flex sx={{ flexDirection: "column", fontSize: 3 }}>
        <Heading as="h3">{heading}</Heading>
        {children}
      </Flex>
    </Grid>
  );
};
