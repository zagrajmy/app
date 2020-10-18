import { OverlayProvider } from "@react-aria/overlays";
import React, { ComponentPropsWithoutRef } from "react";
import { Flex } from "theme-ui";

interface PageProps extends ComponentPropsWithoutRef<"div"> {}
export const Page: React.FC<PageProps> = ({ children, ...rest }) => (
  <Flex
    sx={{
      flexDirection: "column",
      position: "relative",
      flex: 1,
    }}
    {...rest}
  >
    <OverlayProvider>{children}</OverlayProvider>
  </Flex>
);
