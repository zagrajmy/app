import { IClaims, ISession } from "@auth0/nextjs-auth0/dist/session/session";

import { Brand } from "../../lib";

/**
 * Key-value store for the user's claims.
 * @see https://auth0.com/docs/scopes/current/oidc-scopes#standard-claims
 * @see https://auth0.com/docs/users/normalized
 */
interface Auth0Claims extends IClaims {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string; // Auth0 provides default avatar
  locale?: string; // 'en'
  email: string;
  email_verified?: boolean;
  /**
   * @example
   * google-oauth2|117333436324283117304
   * facebook|1061633990853022
   */
  sub: string;
}

export type UserUuid = Brand<string, "UserId">;

/**
 * User data from Auth0 with our own `uuid`.
 * @see https://auth0.com/docs/scopes/current/oidc-scopes#standard-claims
 * @see https://auth0.com/docs/users/normalized
 */
export interface Claims extends Auth0Claims {
  // add own stuff here if needed
}

export interface Session extends ISession {
  user: Claims;
}

// TODO: Use `export type { User } from 'auth0';` after Babel supports it
export type User = import("auth0").User;
