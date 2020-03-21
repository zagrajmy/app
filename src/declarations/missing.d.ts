declare module "next-cookies" {
  import { NextPageContext } from "next";

  const nextCookies: (ctx: NextPageContext) => object;
  // eslint-disable-next-line import/no-default-export
  export default nextCookies;
}

declare module "graphqurl";

declare module "@theme-ui/color-modes";
declare module "@theme-ui/theme-provider";
declare module "@theme-ui/mdx";
