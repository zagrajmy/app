import React, { ComponentPropsWithoutRef } from "react";

// TODO: Discuss fonts other than system-ui
// import "typeface-poppins";
// :global(h1, h2, h3) {
//   font-family: Poppins, sans-serif;
//  */}

interface PageProps extends ComponentPropsWithoutRef<"div"> {}
export const Page: React.FC<PageProps> = ({ children, ...rest }) => (
  <div {...rest}>
    <style jsx>{`
      :global(body) {
        --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        --shadowMd: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --shadowLg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --shadowXl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
        --shadow2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
  </div>
);
