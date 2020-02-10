declare module "next-cookies" {
  import { NextPageContext } from "next";

  const nextCookies: (ctx: NextPageContext) => object;
  // eslint-disable-next-line import/no-default-export
  export default nextCookies;
}
