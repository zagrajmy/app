import { makeSummon } from "../../lib/summon";

export const zagrajmyRestApi = makeSummon(
  process.env.NODE_ENV === "production"
    ? fetch
    : (...args) => {
        const url = typeof args[0] === "string" ? args[0] : args[0].url;

        if (!url.endsWith("/")) {
          // you'll get a 302 and lose the method if you don't add a trailing slash
          throw new Error("all endpoint URLs in our Django API end with slash");
        }

        return fetch(...args);
      },
  `${process.env.NEXT_PUBLIC_ZAGRAJMY_REST_API_URL}v1/`
);
