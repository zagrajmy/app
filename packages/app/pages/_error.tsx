import { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";

import { Page } from "../src/app/components/Page";
import { Container } from "../src/ui/Container";

const ItWasntSupposedToHappen = dynamic<{}>(() =>
  import("../src/ui/organisms/messageScreens/ItWasntSupposedToHappen").then(
    (mod) => mod.ItWasntSupposedToHappen
  )
);

const BrbDownForMaintenance = dynamic<{}>(() =>
  import("../src/ui/organisms/messageScreens/BrbDownForMaintenance").then(
    (mod) => mod.BrbDownForMaintenance
  )
);

interface ErrorProps {
  err:
    | NextPageContext["err"]
    | {
        code: string;
        errno: string;
        message: string;
        type: "system" | string;
      };
}

const Error: NextPage<ErrorProps> = ({ err }) => {
  console.error({ err });

  return (
    <Page>
      <Container>
        {err &&
        "errno" in err &&
        err.errno === "ECONNREFUSED" &&
        err.message.includes(
          "v1/graphql failed, reason: connect ECONNREFUSED"
        ) ? (
          <BrbDownForMaintenance />
        ) : (
          <ItWasntSupposedToHappen />
        )}
      </Container>
    </Page>
  );
};

Error.getInitialProps = ({ err }) => {
  return { err };
};

export default Error;
