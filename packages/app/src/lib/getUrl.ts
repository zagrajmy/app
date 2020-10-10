import { IncomingMessage } from "http";

// can this be replaced with VERCEL_URL env var?
export const getUrl = (arg: Pick<IncomingMessage, "headers"> | undefined) => {
  console.log(">>>", process.env.VERCEL_URL);

  const { headers: { referer = "", host = "" } = {} } = arg || {};

  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  if (host) {
    return `http${host.includes("localhost") ? "" : "s"}://${host}`;
  }
  if (referer && referer !== "/") {
    return referer;
  }
  throw new Error("cant get URL");
};
