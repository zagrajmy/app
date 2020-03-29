/** @jsx jsx */
import { useRef, useState } from "react";
import { jsx, Box } from "theme-ui";
import { Global } from "@emotion/core";
import global from "gatsby-theme-docz/src/theme/global";
import { media } from "gatsby-theme-docz/src/theme/breakpoints";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLDivElement>(null);
  return (
    <Box sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
      <Global styles={global} />
      <Box
        as="main"
        sx={{
          backgroundColor: "background",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Header onOpen={() => setOpen(s => !s)} />
        <div
          sx={{
            py: 0,
            flex: 1,
            display: "grid",
            gridTemplateColumns: "250px 1fr",
            [media.tablet]: {
              display: "block",
            },
          }}
        >
          <Sidebar ref={nav} open={open} onClick={() => setOpen(false)} />
          <Box
            sx={{
              position: "relative",
              maxWidth: 960,
              py: 5,
              px: 4,
              variant: "styles.Container",
              [media.tablet]: {
                py: 4,
                px: 4,
                pt: 5,
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
