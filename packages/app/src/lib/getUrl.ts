import { IncomingMessage } from "http";

export const getUrl = ({ headers: { referer, host } }: IncomingMessage) =>
  referer && referer !== "/"
    ? referer
    : `http${host?.includes("localhost") ? "" : "s"}://${host}`;
