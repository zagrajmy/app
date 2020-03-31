import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { InitializeColorMode } from "theme-ui";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
