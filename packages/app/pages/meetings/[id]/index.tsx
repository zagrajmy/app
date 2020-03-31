import { get } from "@theme-ui/css";
import { useRef, useState } from "react";
import Datepicker, { registerLocale } from "react-datepicker";
import { CheckSquare, Edit } from "react-feather";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
} from "theme-ui";

import pl from "date-fns/locale/pl";
import { meetingsApi } from "../../../src/app/api";
import { MeetingDetailsImage, Page } from "../../../src/app/components";
import { MaxWidthContainer } from "../../../src/app/components/MaxWidthContainer";
import { Id, Meeting, User } from "../../../src/app/types";
import { Dl, Link, Theme } from "../../../src/ui";

registerLocale("pl-PL", pl);

interface EditMeetingButtonProps {
  isEditing: boolean;
  onStartEdit: React.ReactEventHandler;
  onFinishEdit: React.ReactEventHandler;
}
const EditMeetingButton = ({
  isEditing,
  onStartEdit,
  onFinishEdit,
  ...rest
}: EditMeetingButtonProps) => {
  const props = {
    title: "Edit meeting",
    ...rest,
  };

  return isEditing ? (
    <Button type="button" onClick={onFinishEdit} {...props}>
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
    <Button type="button" onClick={onStartEdit} {...props}>
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

  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<Meeting>({
    defaultValues: {
      ...meeting,
    },
  });

  const onSubmit = form.handleSubmit(value => {
    console.log("Meeting edited", { value, errors: form.errors });

    // AWAIT DB CHANGE HERE

    setIsEditing(false);
  });

  if (!meeting) {
    return "404: Couldn't find meeting.";
  }

  const LinkToAuthor: React.FC = ({ children }) => (
    <Link
      href="/u/[username_slug]"
      as={`/u/${meeting.author.slug}`}
      sx={{ fontWeight: "bold", display: "inline-flex" }}
    >
      {children}
    </Link>
  );

  const { start_time, description, title } = form.watch({ nest: true });

  return (
    <Page>
      {meeting.image ? (
        <>
          <MeetingDetailsImage image={meeting.image} />
          <Box pt={4} />
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "calc(240px + 2em)",
            p: 2,
          }}
          bg="gray.3"
        >
          <Button type="button" variant="secondary">
            Add featured picture
          </Button>
        </Box>
      )}
      <MaxWidthContainer
        bg="white"
        as={isEditing ? "form" : "article"}
        // as="form"
        ref={formRef as any /* as React.Ref<HTMLFormElement> */}
        onSubmit={onSubmit}
        p={3}
        sx={{
          borderRadius: "rounded-lg",
          boxShadow: "sm",
          zIndex: 1,
          mt:
            meeting.image?.kind !== "background"
              ? (th: Theme) => `-${get(th, "space.3")}px`
              : 0,
        }}
      >
        <header>
          <Flex sx={{ alignItems: "center" }}>
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
                <Controller
                  name="start_time"
                  as={Datepicker}
                  control={form.control}
                  showTimeSelect
                  customInput={<Input sx={{ bg: "gray.1", border: 0 }} />}
                  valueName="selected"
                  defaultValue={start_time || new Date()}
                  dateFormat="Pp"
                  timeFormat="p"
                  // locale="pl-PL" // TODO: Check if it's detected and respects preference
                />
              ) : (
                <Text as="span" sx={{ padding: 1, fontWeight: 500 }}>
                  {start_time && new Date(start_time).toLocaleString("pl-PL")}
                </Text>
              )}
            </Flex>
            <div role="group" sx={{ marginLeft: "auto" }}>
              <EditMeetingButton
                isEditing={isEditing}
                onStartEdit={() => setIsEditing(true)}
                onFinishEdit={() => {
                  if (formRef.current) {
                    formRef.current.dispatchEvent(new Event("submit"));
                  }
                }}
              />
            </div>
          </Flex>
          {isEditing ? (
            <Input
              mt={1}
              mb={3}
              sx={{
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                minWidth: 0,
                // TODO: this shouldn't be copied
                fontSize: 7,
                letterSpacing: "-0.049375rem",
                border: "none",
                fontFamily: "inherit",
                fontWeight: "heading",
                lineHeight: "heading",
                marginTop: "4px",
                marginBottom: "16px",
                backgroundColor: "background",
                borderRadius: "rounded",
              }}
              name="title"
              ref={form.register({ minLength: 4 })}
            />
          ) : (
            <Heading mt={1} mb={3}>
              {title}
            </Heading>
          )}

          <Flex mb={3} sx={{ flexDirection: "row", alignItems: "center" }}>
            <LinkToAuthor>
              <Avatar
                src={User.avatar(meeting.author) || ""}
                bg="primaryDark"
                sx={{
                  borderRadius: "50%",
                }}
              />
            </LinkToAuthor>
            <div sx={{ ml: 2, fontSize: 3 }}>
              <Text as="span">Hosted by </Text>
              <LinkToAuthor>{meeting.author.name}</LinkToAuthor>
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
              ref={form.register()}
            />
          ) : (
            <p sx={{ mt: 0 }}>{description}</p>
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
