import { IncomingMessage } from "http";

export const getUrl = ({
  headers: { referer, host } = {},
}: Pick<IncomingMessage, "headers">) => {
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
