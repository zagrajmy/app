import React, { ComponentPropsWithoutRef } from "react";
import { Flex } from "@theme-ui/components";

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
    <style jsx>{`
      :global(h1) {
        font-weight: 800;
        font-size: 72px;
      }
      :global(h2) {
        font-weight: 700;
        font-size: 56px;
        letter-spacing: -0.049375rem;
      }
    `}</style>
    {children}
  </Flex>
);
