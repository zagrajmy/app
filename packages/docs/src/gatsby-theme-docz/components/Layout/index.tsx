/** @jsx jsx */
import { useRef, useState } from "react";
import { jsx, Box } from "theme-ui";
import { Global } from "@emotion/core";
import global from "gatsby-theme-docz/src/theme/global";
import * as styles from "gatsby-theme-docz/src/components/Layout/styles";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLDivElement>(null);
  return (
    <Box sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
      <Global styles={global} />
      <Box as="main" sx={styles.main}>
        <Header onOpen={() => setOpen(s => !s)} />
        <div sx={styles.wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            // onFocus={() => setOpen(true)}
            // onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <Box sx={styles.content} data-testid="main-container">
            {children}
          </Box>
        </div>
      </Box>
    </Box>
  );
};
