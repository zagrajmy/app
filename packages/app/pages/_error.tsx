import { NextPage, NextPageContext } from "next";

import { Page } from "../src/app/components/Page";
import { Container } from "../src/ui/Container";
import { ItWasntSupposedToHappen } from "../src/ui/organisms/messageScreens";

interface ErrorProps {
  err: NextPageContext["err"];
}

const Error: NextPage<ErrorProps> = ({ err }) => {
  console.error({ err });

  return (
    <Page>
      <Container>
        <ItWasntSupposedToHappen />
      </Container>
    </Page>
  );
};

Error.getInitialProps = ({ res, err }) => {
  return { status: res?.statusCode, statusMessage: res?.statusMessage, err };
};

export default Error;
