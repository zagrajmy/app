import { Heading, Text } from "../src";
import { Page } from "../src/app/components/Page";
import { Container } from "../src/ui/Container";

const NotFound = () => {
  return (
    <Page>
      <Container sx={{ width: "containerThin", py: 5 }}>
        <Heading as="h1" sx={{ mb: 2 }}>
          404 Not Found
        </Heading>
        <Text as="strong" variant="bold">
          Well, there's nothing here.
        </Text>
        <p>
          Should something be there? If you think so, contact us at
          zagrajmy.net@gmail.com.
        </p>
      </Container>
    </Page>
  );
};

export default NotFound;
