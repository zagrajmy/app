import { HTMLAttributes } from "react";

declare namespace NodeJS {
  export interface ProcessEnv {
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_CLIENT_SECRET: string;
    AUTH0_COOKIE_SECRET: string;
  }
}

declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    /**
     * @see https://medium.com/@jeffochoa/this-is-what-i-just-learned-about-htm-async-img-9fbd9e831967
     */
    async?: boolean;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes
     */
    loading?: "lazy" | "eager";
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes
     */
    importance?: "auto" | "high" | "low";
  }
}
