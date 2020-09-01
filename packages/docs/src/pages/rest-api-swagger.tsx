import { useDbQuery } from "gatsby-theme-docz/src/hooks/useDbQuery";
import SwaggerUI from "swagger-ui-react";

import DoczThemeProvider from "../gatsby-theme-docz";
import { Layout } from "../gatsby-theme-docz/components/Layout";

// TODO: base on node_modules/gatsby-theme-docz/src/base/Layout.js

function RestApiSwaggerPage() {
  const db = useDbQuery();

  return (
    <DoczThemeProvider db={db}>
      <Layout>
        <SwaggerUI url="http://localhost:8000/v1/openapi" />
      </Layout>
    </DoczThemeProvider>
  );
}

export default RestApiSwaggerPage;
