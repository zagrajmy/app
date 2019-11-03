import React, { Fragment } from "react";

// TODO: Discuss fonts other than system-ui
// import "typeface-poppins";
// :global(h1, h2, h3) {
//   font-family: Poppins, sans-serif;
//  */}

// TODO: Consider theme-ui

export const Page: React.FC = ({ children }) => (
  <Fragment>
    <style jsx>{`
      :global(body) {
        --oldLace: #fbf6e5;
        --purpleNavy: #564d80;
        --cyberGrape: #4f4675;
        --inchworm: #c2f970;
        --jet: #333333;

        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Avenir Next,
          Avenir, Helvetica, sans-serif;
      }
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
  </Fragment>
);
