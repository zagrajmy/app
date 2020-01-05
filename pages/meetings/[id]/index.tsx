import {
  Box,
  Heading,
  Text,
  Button,
  Avatar,
  Flex,
  IconButton
} from "@theme-ui/components";
import { Edit } from "react-feather";

import { Id, Meeting } from "../../../src/app/types";
import { meetingsApi } from "../../../src/app/api";
import { MeetingDetailsImage, Page } from "../../../src/app/components";
import { Link } from "../../../src/lib";

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
        <MeetingDetailsImage image={meeting.image} />
      ) : (
        <Box sx={{ width: "100%", height: "200px" }} bg="accent">
          <Button type="button">Add picture</Button>
        </Box>
      )}
      <Box
        bg="whites.1"
        as="article"
        mx="auto"
        p={3}
        sx={{
          width: "1100px",
          maxWidth: "100%",
          zIndex: 1
        }}
      >
        <header>
          <Flex>
            <div>
              <Text as="span" sx={{ padding: 1 }}>
                {meeting.date && new Date(meeting.date).toLocaleString()}
              </Text>
              <IconButton
                aria-label="Edit meeting date"
                onClick={() => console.log("start editing meeting date")}
              >
                <Edit />
              </IconButton>
            </div>
            <div role="group" sx={{ marginLeft: "auto" }}>
              <Link
                href="/meetings/[id]/something"
                // as={`/meetings/${meeting.id}/edit`}
              >
                Do Something
              </Link>
            </div>
          </Flex>
          <Heading mt={0} mb={3}>
            {meeting.title}
          </Heading>
          <Flex mb={3} sx={{ flexDirection: "row", alignItems: "center" }}>
            {linkToAuthor(
              <Avatar
                src={meeting.author?.avatar || ""}
                bg="primaryDark"
                sx={{
                  borderRadius: "50%"
                }}
              />
            )}
            <div sx={{ ml: 3, fontSize: 4 }}>
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
            bg: "whites.2"
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
          <Heading as="h3" sx={{ fontSize: 3 }}>
            Opis spotkania
          </Heading>
          <p>{meeting.description}</p>
        </section>
      </Box>
    </Page>
  );
}

MeetingDetailsPage.getInitialProps = async ({
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
