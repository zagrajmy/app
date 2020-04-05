import { IncomingMessage } from "http";

export const getUrl = ({
  headers: { referer, host } = {},
}: Pick<IncomingMessage, "headers">) => {
  if (referer && referer !== "/") {
    return referer;
  }
  if (host) {
    return `http${host.includes("localhost") ? "" : "s"}://${host}`;
  }
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  throw new Error("cant get URL");
};
