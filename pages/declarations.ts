declare namespace NodeJS {
  export interface ProcessEnv {
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_CLIENT_SECRET: string;
    AUTH0_COOKIE_SECRET: string;
  }
}
