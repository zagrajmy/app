import {
  Box,
  Heading,
  Text,
  Button,
  ButtonProps,
  Avatar,
  Flex,
  IconButton,
  Textarea,
} from "@theme-ui/components";
import { get } from "@theme-ui/css";
import { Theme } from "theme-ui";
import { Edit, CheckSquare } from "react-feather";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Datepicker from "react-datepicker";
import { useTranslation } from "react-i18next";

import { Id, Meeting, User } from "../../../src/app/types";
import { meetingsApi } from "../../../src/app/api";
import { MeetingDetailsImage, Page } from "../../../src/app/components";
import { Link } from "../../../src/lib";
import { Dl } from "../../../src/ui";
import { MaxWidthContainer } from "../../../src/app/components/MaxWidthContainer";

interface EditMeetingButtonProps {
  isEditing: boolean;
  onFinishEdit: React.ReactEventHandler;
  onStartEdit: React.ReactEventHandler;
}
const EditMeetingButton = ({
  isEditing,
  onStartEdit,
  onFinishEdit,
  ...rest
}: EditMeetingButtonProps) => {
  const props: ButtonProps = {
    title: "Edit meeting",
    ...rest,
  };

  return isEditing ? (
    <Button onClick={onFinishEdit} {...props}>
      Confirm
      <CheckSquare
        size={18}
        sx={{
          ml: 2,
          verticalAlign: "text-bottom",
        }}
      />
    </Button>
  ) : (
    <Button onClick={onStartEdit} {...props}>
      Edit
      <Edit size={18} sx={{ ml: 2, verticalAlign: "text-bottom" }} />
    </Button>
  );
};

type Query = { id: Id };

interface InitialProps {
  meeting?: Meeting;
}

export function MeetingDetailsPage({ meeting }: InitialProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { t } = useTranslation();

  const form = useForm<Meeting>({
    defaultValues: {
      ...meeting,
    },
  });

  const onSubmit = form.handleSubmit(value => {
    console.log("Meeting edited", { value, errors: form.errors });
  });

  if (!meeting) {
    return "404: Couldn't find meeting.";
  }

  const linkToAuthor = (children: React.ReactChild) => (
    <Link
      href="/u/[username_slug]"
      as={`/u/${meeting.author.slug}`}
      sx={{ fontWeight: "bold", display: "inline-flex" }}
    >
      {children}
    </Link>
  );

  return (
    <Page>
      {meeting.image ? (
        <>
          <MeetingDetailsImage image={meeting.image} />
          <Box pt={4} />
        </>
      ) : (
        <Box sx={{ width: "100%", height: "240px" }} bg="white">
          <Button type="button">Add picture</Button>
        </Box>
      )}
      <MaxWidthContainer
        bg="white"
        as="article"
        p={3}
        sx={{
          borderRadius: "rounded-lg",
          boxShadow: "sm",
          zIndex: 1,
          mt:
            meeting.image?.kind === "banner"
              ? (th: Theme) => `-${get(th, "space.3")}px`
              : 0,
        }}
      >
        <header>
          <Flex sx={{ alignItems: "center" }}>
            {meeting.start_time && (
              <Flex
                sx={{
                  alignItems: "center",
                  color: "gray.9",
                  "@media (hover: hover)": {
                    "> button": {
                      opacity: 0.2,
                    },
                    ":hover > button": {
                      opacity: 1,
                    },
                  },
                }}
              >
                {isEditing ? (
                  <Datepicker
                    selected={
                      form.getValues().start_time
                        ? new Date(form.getValues().start_time!)
                        : null
                    }
                    onChange={date => {
                      form.setValue("date", date || undefined);
                    }}
                  />
                ) : (
                  <Text as="span" sx={{ padding: 1, fontWeight: 500 }}>
                    {new Date(meeting.start_time).toLocaleString("pl-PL")}
                  </Text>
                )}
              </Flex>
            )}
            <div role="group" sx={{ marginLeft: "auto" }}>
              <EditMeetingButton
                isEditing={isEditing}
                onStartEdit={() => setIsEditing(true)}
                onFinishEdit={e => {
                  setIsEditing(false);
                  onSubmit(e);
                }}
              />
            </div>
          </Flex>
          <Heading mt={1} mb={3} contentEditable={isEditing}>
            {meeting.title}
          </Heading>
          <Flex mb={3} sx={{ flexDirection: "row", alignItems: "center" }}>
            {linkToAuthor(
              <Avatar
                src={User.avatar(meeting.author) || ""}
                bg="primaryDark"
                sx={{
                  borderRadius: "50%",
                }}
              />
            )}
            <div sx={{ ml: 2, fontSize: 3 }}>
              <Text as="span">Hosted by </Text>
              {linkToAuthor(meeting.author.name)}
            </div>
          </Flex>
        </header>
        <Dl sx={{ mt: 2 }}>
          <dt>Opublikowano</dt>
          <dd>
            {meeting.published_at
              ? new Date(meeting.published_at).toLocaleString("pl-PL")
              : t("not-published")}
          </dd>
          <dt>Utworzono</dt>
          <dd>
            {meeting.created_at &&
              new Date(meeting.created_at).toLocaleString("pl-PL")}
          </dd>
        </Dl>
        <section sx={{ mt: 3 }}>
          <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>
            {t("meeting-description")}
          </Heading>
          {isEditing ? (
            <Textarea
              rows={5}
              sx={{ resize: "none" }}
              name="description"
              ref={form.register}
            />
          ) : (
            <p sx={{ mt: 0 }}>{meeting.description}</p>
          )}
        </section>
      </MaxWidthContainer>
    </Page>
  );
}

MeetingDetailsPage.getInitialProps = async ({
  query,
}: {
  res: Response;
  req: Request;
  query: Query;
}): Promise<InitialProps> => {
  const meeting = await meetingsApi.get(query.id);
  return { meeting };
};

export default MeetingDetailsPage;
