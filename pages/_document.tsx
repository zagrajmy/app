import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";
// import { InitializeColorMode } from 'theme-ui'

function MyDocument(_: DocumentInitialProps) {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <body>
        {/* <InitializeColorMode /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = (ctx: DocumentContext) => {
  return Document.getInitialProps(ctx);
};

export default MyDocument;
