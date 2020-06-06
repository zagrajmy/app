// eslint-disable-next-line import/no-extraneous-dependencies
import { SystemStyleObject } from "theme-ui";

export const link: SystemStyleObject = {
  my: 2,
  display: "block",
  color: "sidebar.navGroup",
  textDecoration: "none",
  fontSize: 2,
  "&.active": {
    color: "sidebar.navLinkActive",
  },
  transition: "all 0.2s",
  "&:not(.active):hover": {
    transform: "translateX(0.25em)",
    filter: "brightness(0.75)",
  },
};

export const smallLink: SystemStyleObject = {
  ...link,
  ml: 3,
  fontSize: 1,
  position: "relative",
  color: "sidebar.tocLink",
  ":hover::before": {},
  "&.active": {
    color: "sidebar.tocLinkActive",
  },
  "&.active::before": {
    content: '""',
    position: "absolute",
    display: "block",
    top: "3px",
    left: -2,
    height: "calc(1em - 1px)",
    backgroundColor: "primary",
    transition: "width 200ms ease 0s",
    width: "2px",
    borderRadius: 1,
  },
};
