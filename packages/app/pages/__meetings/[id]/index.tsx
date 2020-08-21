import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
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

import { hasura } from "../../../data";
import { AsyncReturnType } from "../../../src";
import { MeetingDetailsImage, Page } from "../../../src/app/components";
import { getAvatarUrl } from "../../../src/app/getAvatarUrl";
import {
  Container,
  Dl,
  FormDatepicker,
  Link,
  LinkProps,
} from "../../../src/ui";
import { CheckSquare, Edit } from "../../../src/ui/icons";

/**
 * @deprecated
 */
type OldMeeting = {
  id: number;
  start_time: string | Date;
  end_time: string | Date;
  name: string;
  image: string;
  description: string;
  organizer: {
    username: string;
    email: string;
  };
};

function queryMeeting(ctx: {
  req?: NextPageContext["req"];
  query: NextPageContext["query"];
}) {
  return hasura
    .fromCookies(ctx.req)
    .query({
      nb_meeting_by_pk: [
        { id: Number(ctx.query.id) },
        {
          id: true,
          organizer: { username: true, email: true },
          participants: [{}, { participant: { name: true, email: true } }],
          name: true,
          description: true,
          image: true,
          start_time: true,
          end_time: true,
          publication_time: true,
          created_at: true,
        },
      ],
    })
    .then((x) => ({ meeting: x.nb_meeting_by_pk }));
}

interface LinkToAuthorProps extends Omit<LinkProps, "href" | "as"> {
  meeting: { organizer: { username: string } };
}
const LinkToAuthor = ({ children, meeting, ...rest }: LinkToAuthorProps) => (
  <Link
    href="/u/[username_slug]"
    as={`/u/${meeting.organizer.username}`}
    sx={{ display: "inline-flex" }}
    {...rest}
  >
    {children}
  </Link>
);

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

type QueriedData = AsyncReturnType<typeof queryMeeting>;
interface InitialProps {
  initialData?: QueriedData;
}

export function MeetingDetailsPage({ initialData }: InitialProps) {
  const { query } = useRouter();
  const { t } = useTranslation();

  const { data } = useSWR([{ query }], queryMeeting, { initialData });

  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<OldMeeting>({ defaultValues: data?.meeting || {} });

  const onSubmit = form.handleSubmit((value) => {
    // eslint-disable-next-line no-console
    console.log("Meeting edited", { value, errors: form.errors });

    // AWAIT DB CHANGE HERE

    setIsEditing(false);
  });

  const meeting = useMemo(() => data?.meeting, [data]);

  if (!data) {
    return null; // TODO skeleton UI
  }

  if (!meeting) {
    // this should not happen here
    return "404: Couldn't find meeting.";
  }

  const { start_time, description, name } = form.watch();

  return (
    <Page>
      {meeting.image ? (
        <>
          <MeetingDetailsImage src={meeting.image} />
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
      <Container
        variant="sheet"
        as={isEditing ? "form" : "article"}
        // as="form"
        ref={formRef as any /* as React.Ref<HTMLFormElement> */}
        onSubmit={onSubmit}
        sx={{ mt: 0, mb: 4 }}
      >
        <header>
          <Flex sx={{ alignItems: "center" }}>
            <Flex
              sx={{
                alignItems: "center",
                color: "gray.8",
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
                <FormDatepicker
                  name="start_time"
                  input={<Input sx={{ bg: "gray.1", border: 0 }} />}
                  defaultValue={start_time || new Date()}
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
              {name}
            </Heading>
          )}

          <Flex mb={3} sx={{ flexDirection: "row", alignItems: "center" }}>
            <LinkToAuthor meeting={meeting}>
              <Avatar
                src={getAvatarUrl(meeting.organizer) || ""}
                bg="primaryDark"
                sx={{
                  borderRadius: "50%",
                }}
              />
            </LinkToAuthor>
            <div sx={{ ml: 2, fontSize: 3 }}>
              <Text as="span">Hosted by </Text>
              <LinkToAuthor variant="underlined" meeting={meeting}>
                {meeting.organizer.username}
              </LinkToAuthor>
            </div>
          </Flex>
        </header>
        <Dl sx={{ mt: 2 }}>
          <dt>{t("published-at")}</dt>
          <dd>
            {meeting.publication_time
              ? new Date(meeting.publication_time).toLocaleString("pl-PL")
              : t("not-published")}
          </dd>
          <dt>{t("created-at")}</dt>
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
      </Container>
    </Page>
  );
}

MeetingDetailsPage.getInitialProps = async (
  ctx: NextPageContext
): Promise<InitialProps> => {
  return queryMeeting(ctx).then(({ meeting }) => ({
    initialData: meeting && { meeting },
  }));
};

export default MeetingDetailsPage;
