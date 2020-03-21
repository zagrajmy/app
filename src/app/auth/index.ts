import { initAuth0 } from "@auth0/nextjs-auth0";
import { ServerResponse, IncomingMessage } from "http";

import * as dotenv from "dotenv";

import { Session, UserUuid } from "./types";

export * from "./types";

// eslint-disable-next-line import/no-mutable-exports
export let auth = (() => {
  if (typeof window !== "undefined") {
    return undefined;
  }

  dotenv.config();

  /**
   * We use the same Auth0 application to access
   * Management API and Authentication API right now.
   * Avoid leaking AUTH0_CLIENT_SECRET to the frontend or
   * create two apps -- Next Clientside and Next Serverside if
   * clientside Auth0 Authentication API actions are needed.
   *
   * TODO: Check if this code is accessible in browser.
   */
  const {
    AUTH0_DOMAIN,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_COOKIE_SECRET,
  } = process.env;

  const auth0 = initAuth0({
    domain: AUTH0_DOMAIN!,
    clientId: AUTH0_CLIENT_ID!,
    clientSecret: AUTH0_CLIENT_SECRET!,
    scope: "openid profile",
    redirectUri: "http://localhost:3000/api/login-callback",
    postLogoutRedirectUri: "http://localhost:3000/",
    session: {
      cookieSecret: AUTH0_COOKIE_SECRET!,
      cookieLifetime: 60 * 60 * 8,
    },
  });

  // TODO: Remove me
  // user id from session will be exactly the user_id in zagrajmy db
  const getSession = async (
    req: IncomingMessage
  ): Promise<Session | undefined | null> => {
    const session = (await auth0.getSession(req)) as Session;

    if (session) {
      // getCookie?
      session.user.uuid = "not-implemented-yet" as UserUuid;
    }

    return session;
  };

  const getSessionOrLogIn = async (
    req?: IncomingMessage,
    res?: ServerResponse
  ) => {
    if (typeof window === "undefined" && req && res) {
      const session = await getSession(req);
      if (!session?.user) {
        res.writeHead(302, { Location: "/api/login" });
        res.end();

        return { user: null };
      }

      return { user: session.user };
    }
    return { user: null };
  };

  const createManagementClient = () => {
    type ManagementClient = import("auth0").ManagementClient;
    if (typeof window === "undefined") {
      // eslint-disable-next-line global-require
      const { ManagementClient } = require("auth0") as typeof import("auth0");

      return new ManagementClient({
        domain: "zagrajmy.eu.auth0.com",
        clientId: AUTH0_CLIENT_ID,
        clientSecret: AUTH0_CLIENT_SECRET,
        scope: "read:users update:users delete:users",
        audience: "https://zagrajmy.eu.auth0.com/api/v2/",
      });
    }

    return new Proxy<ManagementClient>({} as ManagementClient, {
      get() {
        throw new Error(`ManagementAPI can't be accessed on clientside`);
      },
    });
  };

  return {
    ...auth0,
    getSession,
    getSessionOrLogIn,
    management: createManagementClient(),
  };
})()!;

type Auth = typeof auth;

auth =
  auth ||
  new Proxy<Auth>({} as Auth, {
    /**
     * @see https://github.com/auth0/nextjs-auth0/blob/master/src/instance.browser.ts
     */
    get(_target, _property) {
      return () => ({ __SHOULD_NOT_BE_USED_IN_BROWSER: true });
    },
  });
