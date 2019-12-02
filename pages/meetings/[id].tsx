import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Avatar,
  Flex
} from "@chakra-ui/core";

import { Id, Meeting } from "../../src/types";
import { meetingsApi } from "../../src/api";
import { Link, Page } from "../../src/components";

type Query = { id: Id };

interface InitialProps {
  meeting?: Meeting;
}

export function MeetingDetailsPage({ meeting }: InitialProps) {
  if (!meeting) {
    return "404: Couldn't find meeting.";
  }

  const linkToAuthor = (children: React.ReactChild) => (
    <Link
      href="/u/[username_slug]"
      as={`/u/${meeting.author.slug}`}
      sx={{ fontWeight: "bold" }}
    >
      {children}
    </Link>
  );

  return (
    <Page>
      {meeting.image ? (
        <Image
          alt=""
          bg="whites.1"
          width="100%"
          height="200px"
          objectFit="cover"
          src={meeting.image}
          zIndex={1}
        />
      ) : (
        <Box width="100%" height="200px" bg="accent">
          <Button type="button">Add picture</Button>
        </Box>
      )}
      <Box
        bg="whites.1"
        as="article"
        mx="auto"
        width="1100px"
        maxWidth="100%"
        p={3}
      >
        <header>
          <Text as="span">
            {meeting.date && new Date(meeting.date).toLocaleString()}
          </Text>
          <Heading mt={0} mb={3}>
            {meeting.title}
          </Heading>
          <Flex direction="row" alignItems="center" mb={3}>
            {linkToAuthor(
              <Avatar
                src={meeting.author?.avatar || ""}
                bg="primaryDark"
                borderRadius="50%"
              />
            )}
            <div sx={{ ml: 3, fontSize: "lg" }}>
              <Text as="span">Hosted by </Text>
              {linkToAuthor(meeting.author.name)}
            </div>
          </Flex>
        </header>
        <dl
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "500px",
            maxWidth: "100%",
            "dt, dd": { flex: "0 0 50%" },
            dd: { marginLeft: 0 },
            my: 2,
            p: 2,
            borderRadius: 5,
            bg: "#faf9f9"
          }}
        >
          <dt>Data wydarzenia</dt>
          <dd>
            {meeting.date
              ? new Date(meeting.date).toLocaleString()
              : "Wybierz datę"}
          </dd>
          <dt>Opublikowano</dt>
          <dd>
            {meeting.published_at
              ? new Date(meeting.published_at).toLocaleString()
              : "Nie opublikowano"}
          </dd>
          <dt>Utworzono</dt>
          <dd>
            {meeting.created_at &&
              new Date(meeting.created_at).toLocaleString()}
          </dd>
        </dl>
        <section>
          <Heading as="h3" size="md">
            Opis spotkania
          </Heading>
          <p>{meeting.description}</p>
        </section>
      </Box>
    </Page>
  );
}

MeetingDetailsPage.getInitialProps = async ({
  res,
  query
}: {
  res: Response;
  req: Request;
  query: Query;
}): Promise<InitialProps> => {
  const meeting = await meetingsApi.get(query.id);
  return { meeting };
};

export default MeetingDetailsPage;
