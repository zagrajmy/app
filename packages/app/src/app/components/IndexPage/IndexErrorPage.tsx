import dynamic from "next/dynamic";
import React from "react";
import { useTranslation } from "react-i18next";

import { Container } from "../../../ui/Container";

const DeveloperSphereNotFoundMessage = dynamic(() =>
  import("./DeveloperSphereNotFoundMessage")
);

export interface IndexErrorPageProps {
  error: "sphere-not-found";
}
export function IndexErrorPage({ error }: IndexErrorPageProps) {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 4, px: 1 }}>
      <Container variant="sheet">
        {error === "sphere-not-found" ? (
          <>
            {/* todo: add a cute "oopsie" message screen */}
            <p>{t("sphere-home-not-found")}</p>
            {process.env.NODE_ENV === "development" && (
              <DeveloperSphereNotFoundMessage />
            )}
          </>
        ) : null}
      </Container>
    </Container>
  );
}

export default IndexErrorPage;
