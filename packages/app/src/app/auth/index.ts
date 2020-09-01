import { initAuth0 } from "@auth0/nextjs-auth0";
import IAuth0Settings from "@auth0/nextjs-auth0/dist/settings";
import * as dotenv from "dotenv";
import { IncomingMessage, ServerResponse } from "http";

// TODO: Eject nextjs-auth0 to refactor this into lightweight functional API
// I'm not sure this is currently serverless friendly
// TODO: but write tests first
// TODO: We'd like to keep zagrajmy user id in session
import { getUrl } from "../../lib/getUrl";
import { Claims, Session } from "./types";

export * from "./types";

let dotenvRead = false;

export const makeAuth = (nextReq?: IncomingMessage) => {
  if (typeof window !== "undefined") {
    return undefined;
  }

  if (!dotenvRead) {
    dotenv.config();
    dotenvRead = true;
  }

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

  const url = nextReq && getUrl(nextReq);
  const origin = url ? new URL(url).origin : "~INVALID";

  const auth0Settings: IAuth0Settings = {
    domain: AUTH0_DOMAIN!,
    clientId: AUTH0_CLIENT_ID!,
    clientSecret: AUTH0_CLIENT_SECRET!,
    scope: "openid profile",
    redirectUri: `${origin}/api/login-callback`,
    postLogoutRedirectUri: `${origin}/`,
    session: {
      cookieSecret: AUTH0_COOKIE_SECRET!,
      cookieLifetime: 60 * 60 * 8,
      cookieName: "zm|session",
    },
  };

  const auth0 = initAuth0(auth0Settings);

  const getSessionOrLogIn = async (
    req: IncomingMessage | undefined,
    res: ServerResponse | undefined
  ) => {
    if (typeof window === "undefined" && req && res) {
      const session = await auth0.getSession(req);
      if (!session?.user) {
        res.writeHead(302, { Location: "/api/login" });
        res.end();

        return { user: null };
      }

      return { user: session.user as Claims };
    }
    return { user: null };
  };

  type ManagementClient = import("auth0").ManagementClient;
  const createManagementClient = () => {
    if (typeof window === "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
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

  let managementClient: ManagementClient;

  return {
    ...auth0,
    getSession: auth0.getSession as (
      req: IncomingMessage
    ) => Promise<Session | null | undefined>,
    getSessionOrLogIn,
    get management() {
      if (!managementClient) {
        managementClient = createManagementClient();
      }
      return managementClient;
    },
  };
};

// eslint-disable-next-line import/no-mutable-exports
export let auth = makeAuth()!;

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
