/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { useCurrentDoc } from "docz";
import { ChevronDown } from "gatsby-theme-docz/src/components/Icons";
import { NavLink } from "gatsby-theme-docz/src/components/NavLink";
import React from "react";
import { jsx } from "theme-ui";

export interface NavGroupProps {
  item: { name: string; menu: { name: string; route: string; id: string }[] };
  sidebarRef: React.RefObject<HTMLDivElement>;
}
export const NavGroup = ({ item, sidebarRef }: NavGroupProps) => {
  const currentDoc = useCurrentDoc();
  const currentDocRef = React.useRef<HTMLDivElement>();
  const { name, menu } = item;
  const [subheadingsVisible, setShowsubheadings] = React.useState(true);

  const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible);

  React.useEffect(() => {
    if (sidebarRef.current && currentDocRef.current) {
      sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop);
    }
  }, [sidebarRef]);

  return (
    <div sx={{ my: 3 }} data-testid="nav-group">
      <div
        sx={{
          mb: 1,
          fontSize: 2,
          fontWeight: 500,
          color: "sidebar.navGroup",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={toggleSubheadings}
      >
        {item.name}
        <ChevronDown
          sx={{
            ml: 1,
            flexShrink: 0,
            alignSelf: "baseline",
            transform: `rotateX(${subheadingsVisible ? 180 : 0}deg)`,
            transformOrigin: "center",
            transition: "transform .3s ease-in-out",
            opacity: 0.25,
            "div:hover > &": {
              opacity: 0.75,
            },
          }}
        />
      </div>
      <div sx={{ ml: 2 }} data-testid="nav-group-links">
        {menu &&
          subheadingsVisible &&
          menu.map((menu) => {
            if (currentDoc.route === menu.route) {
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
      </div>
    </div>
  );
};
