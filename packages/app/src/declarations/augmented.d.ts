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

declare global {
  // augments map for pairs and triples
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    map<U>(
      this: readonly [T, T, T],
      callbackfn: (value: T, index: number, array: T[]) => U,
      thisArg?: any
    ): readonly [U, U, U];
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    map<U>(
      this: readonly [T, T],
      callbackfn: (value: T, index: number, array: T[]) => U,
      thisArg?: any
    ): readonly [U, U];
  }
}
