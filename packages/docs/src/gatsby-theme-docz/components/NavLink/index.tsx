/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { Entry, useCurrentDoc, useDocs } from "docz";
import { Link } from "gatsby";
import { get } from "lodash/fp";
import React, { ComponentProps } from "react";
import { jsx } from "theme-ui";

import * as styles from "./styles";

const getHeadings = (route: string, docs: Entry[]) => {
  const doc = docs.find((x) => x.route === route);
  const headings = get("headings", doc);
  return headings ? headings.filter((x) => x.depth === 2) : [];
};

const getCurrentHash = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location ? decodeURI(window.location.hash) : "";
};

export const NavLink = React.forwardRef(
  (
    { item, ...props }: { item: any } & ComponentProps<typeof Link>,
    ref: React.Ref<any>
  ) => {
    const docs = useDocs();
    const to = item.route;
    const headings = docs && getHeadings(to, docs);
    const current = useCurrentDoc();
    const isCurrent = item.route === current.route;
    const showHeadings = isCurrent && headings && headings.length > 0;
    const currentHash = getCurrentHash();
    return (
      <React.Fragment>
        <Link
          {...props}
          to={to}
          sx={styles.link}
          activeClassName="active"
          ref={ref}
        />
        {showHeadings &&
          headings!.map((heading) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link
              key={heading.slug}
              to={`${to}#${heading.slug}`}
              sx={styles.smallLink}
              className={currentHash === `#${heading.slug}` ? "active" : ""}
            >
              {heading.value}
            </Link>
          ))}
      </React.Fragment>
    );
  }
);
