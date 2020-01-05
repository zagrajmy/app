import { initAuth0 } from "@auth0/nextjs-auth0";
import { IClaims } from "@auth0/nextjs-auth0/dist/session/session";

require("dotenv").config();

export const auth = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile",
  redirectUri: "http://localhost:3000/api/logged-in",
  postLogoutRedirectUri: "http://localhost:3000/",
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    cookieLifetime: 60 * 60 * 8
  }
});

export type Claims = IClaims;
