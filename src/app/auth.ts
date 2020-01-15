import { initAuth0 } from "@auth0/nextjs-auth0";
import { IClaims } from "@auth0/nextjs-auth0/dist/session/session";
import { ServerResponse, IncomingMessage } from "http";

require("dotenv").config();

const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN!,
  clientId: process.env.AUTH0_CLIENT_ID!,
  clientSecret: process.env.AUTH0_CLIENT_SECRET!,
  scope: "openid profile",
  redirectUri: "http://localhost:3000/api/logged-in",
  postLogoutRedirectUri: "http://localhost:3000/",
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET!,
    cookieLifetime: 60 * 60 * 8,
  },
});

const getUserOrLogin = async (req?: IncomingMessage, res?: ServerResponse) => {
  if (typeof window === "undefined" && req && res) {
    const session = await auth0.getSession(req);
    if (!session?.user) {
      res.writeHead(302, { Location: "/api/login" });
      res.end();

      return {};
    }

    return { user: session.user };
  }
  return {};
};

export const auth = {
  ...auth0,
  getUserOrLogIn: getUserOrLogin,
};

/**
 * Key-value store for the user's claims.
 */
export interface Claims extends IClaims {
  given_name?: string;
  nickname?: string;
  name?: string;
  picture?: string;
  locale?: string; // 'en'
}
