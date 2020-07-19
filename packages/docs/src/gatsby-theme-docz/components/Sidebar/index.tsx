/* eslint-disable import/no-extraneous-dependencies */

/** @jsxFrag React.Fragment */
import { Global } from "@emotion/core";
import { useCurrentDoc, useMenus } from "docz";
import { NavGroup } from "gatsby-theme-docz/src/components/NavGroup";
import { NavLink } from "gatsby-theme-docz/src/components/NavLink";
import * as styles from "gatsby-theme-docz/src/components/Sidebar/styles";
import React, { useEffect, useRef, useState } from "react";
import { Box } from "theme-ui";

import { NavSearch } from "../NavSearch";

export interface SidebarProps {
  open?: boolean;
  onClick?: () => void;
}
export const Sidebar = React.forwardRef(
  (props: SidebarProps, ref: React.Ref<HTMLDivElement>) => {
    const [query, setQuery] = useState("");
    const menus = useMenus({
      query,
    });
    const currentDoc = useCurrentDoc();
    const currentDocRef = useRef<HTMLDivElement>();

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(ev.target.value);
    };

    useEffect(() => {
      if (
        (ref as React.RefObject<HTMLElement>).current &&
        currentDocRef.current
      ) {
        (ref as React.RefObject<HTMLElement>).current!.scrollTo(
          0,
          currentDocRef.current.offsetTop
        );
      }
    }, [ref]);
    return (
      <>
        <Box
          onClick={props.onClick}
          sx={{
            ...styles.overlay(props),
            minHeight: "100vh",
          }}
        >
          {props.open && <Global styles={styles.global} />}
        </Box>
        <Box
          ref={ref}
          sx={{
            ...styles.wrapper(props),
            flexShrink: 0,
            maxHeight: "unset",
          }}
          data-testid="sidebar"
        >
          <NavSearch
            placeholder="Type to search..."
            value={query}
            onChange={handleChange}
          />
          {menus &&
            menus
              .sort(({ order: a = 99999 }, { order: b = 99999 }) => a - b)
              .map((menu) => {
                if (!menu.route)
                  return (
                    <NavGroup key={menu.id} item={menu} sidebarRef={ref} />
                  );

                if (menu.route === currentDoc.route) {
                  return (
                    <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                      {menu.name}
                    </NavLink>
                  );
                }

                return (
                  <NavLink key={menu.id} item={menu}>
                    {menu.name}
                  </NavLink>
                );
              })}
        </Box>
      </>
    );
  }
);
