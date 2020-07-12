/* eslint-disable import/no-extraneous-dependencies */

import { Global } from "@emotion/core";
import { media } from "gatsby-theme-docz/src/theme/breakpoints";
import { useLayoutEffect, useRef, useState } from "react";
import { Box } from "theme-ui";

import { globalStyles } from "../../theme/global";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <Box sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
      <Global styles={globalStyles} />
      <Box
        as="main"
        sx={{
          backgroundColor: "background",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header onOpen={() => setOpen((s) => !s)} />
        <div
          sx={{
            py: 0,
            flex: 1,
            display: "flex",
            [media.tablet]: {
              display: "block",
            },
          }}
        >
          <Sidebar ref={nav} open={open} onClick={() => setOpen(false)} />
          <Box
            sx={{
              position: "relative",
              py: 5,
              px: 4,
              variant: "styles.Container",
              flex: 1,
              [media.tablet]: {
                py: 4,
                px: 4,
                pt: 5,
              },
              "> h1:first-child": {
                mt: 0,
              },
            }}
            data-testid="main-container"
          >
            {children}
          </Box>
        </div>
      </Box>
    </Box>
  );
};
