import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorMessage, OnSubmit, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import type { LabelProps } from "theme-ui";
import {
  Button,
  Container,
  Flex,
  Grid,
  Message,
  Select,
  Textarea,
} from "theme-ui";
import { OmitByValue } from "utility-types";

import { hasura } from "../../data";
import { nb_meeting as Meeting } from "../../data/graphql-zeus";
import { makeError, summon } from "../../src";
import { makeAuth } from "../../src/app/auth";
import { Page } from "../../src/app/components";
import { withUser } from "../../src/app/withUser";
import {
  FormDatepicker,
  FormInput,
  FormLabel,
  Input as BaseInput,
  Label as BaseLabel,
} from "../../src/ui";
import {
  InsertMeetingBody,
  InsertMeetingResultJson,
} from "../api/meetings/insert";

const extractGuilds = (data: {
  nb_guild_member: { nb_guild: { id: number; name: string } }[];
}) => ({
  guilds: data.nb_guild_member.map((gm) => gm.nb_guild),
});

type MeetingProperty = keyof OmitByValue<Meeting, object>;

const Input = BaseInput as FormInput<MeetingProperty>;

const Label = BaseLabel as FormLabel<MeetingProperty>;

interface CreateMeetingPageProps {
  initialData?: { guilds: { id: number; name: string }[] };
}

// TODO: Add validations in the endpoint.
const CreateMeetingPage: NextPage<CreateMeetingPageProps> = withUser<
  CreateMeetingPageProps
>((props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { data } = useSWR(
    "user-guilds",
    () => {
      return hasura
        .fromCookies()
        .query({
          nb_guild_member: [
            { where: { user_id: { _eq: props.user.uuid } } },
            { nb_guild: { id: true, name: true } },
          ],
        })
        .then(extractGuilds);
    },
    { initialData: props.initialData }
  );

  const [backendError, setBackendError] = useState<Error | undefined>();
  const { register, handleSubmit, control, errors, watch } = useForm<Meeting>(
    {}
  );

  const onSubmit: OnSubmit<Meeting> = (values) => {
    const formAction = document.activeElement?.getAttribute("formAction");
    if (formAction !== "publish" && formAction !== "save-draft") {
      throw new Error("Unexpected formAction");
    }

    const body: InsertMeetingBody = {
      command: formAction,
      meeting: {
        description: values.description,
        end_time: values.end_time,
        guild_id: values.guild_id,
        start_time: values.start_time,
        name: values.name,
        sphere_id: 2, // TODO (zagrajmy.now.sh)
      },
    };

    // TODO: Move fetching outside of callback handler to a proper place
    // useEffect or query hook
    summon("/api/meetings/insert", {
      method: "POST",
      json: body,
    })
      .then((res: InsertMeetingResultJson) => {
        if (!res.insert_nb_meeting_one?.id) {
          throw new Error("failed to insert meeting");
        }

        router.push(
          "/meetings/[id]",
          `/meetings/${res.insert_nb_meeting_one?.id}`
        );

        // TODO
        // eslint-disable-next-line no-console
        console.log({ res });
      })
      .catch((error) => {
        setBackendError(makeError(error));
        // Let's make useMutation hook or think about react-query
        // steida had a pretty cool useMutation hook on Twitter
      });
  };

  const now = new Date();
  return (
    <Page>
      <Container
        as="form"
        variant="sheet"
        sx={{
          width: "containerThin",

          px: 5,
          pb: 5,
          pt: 4,
          mt: 4,

          display: "grid",
          // TODO: gridGap in theme-ui should accept number
          // export type GridGapProperty<TLength> = Globals | TLength | string;
          gridGap: 3 as any, // TODO: Turn this into `gap`
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Label htmlFor="name">{t("title")}</Label>
          <Input
            name="name"
            ref={register({ required: `${t("title")} ${t("is-required")}` })}
          />
          <ErrorMessage
            errors={errors}
            name="title"
            as={Message}
            variant="critical"
            sx={{ mt: 1 }}
          />
        </div>
        <div>
          <Label htmlFor="description">{t("description")}</Label>
          <Textarea
            name="description"
            ref={register}
            rows={5}
            sx={{ resize: "none" }}
          />
        </div>
        <div>
          <Label htmlFor="guild_id" optional>
            {t("guild")}{" "}
          </Label>
          <Select name="guild" disabled={!data || data.guilds.length === 0}>
            {data &&
              (data.guilds.length === 0 ? (
                <option>{t("you-belong-to-no-guild")}</option>
              ) : (
                data.guilds.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))
              ))}
          </Select>
        </div>
        <Grid columns={[1, 2]}>
          <div>
            <Label htmlFor="start_time">{t("meeting-start-time")}</Label>
            <FormDatepicker min={now} name="start_time" control={control} />
          </div>
          <div>
            <Label htmlFor="end_time">{t("meeting-end-time")}</Label>
            <FormDatepicker
              min={new Date(watch("start_time") || now)}
              name="end_time"
              control={control}
            />
          </div>
        </Grid>
        <Flex
          sx={{ justifyContent: "flex-end", "& > button": { marginLeft: 2 } }}
        >
          <Button variant="secondary" type="submit" formAction="save-draft">
            {t("save-draft")}
          </Button>
          <Button variant="primary" type="submit" formAction="publish">
            {t("publish")}
          </Button>
        </Flex>
        {backendError && (
          <Message as="p" variant="critical">
            {backendError.message}
          </Message>
        )}
      </Container>
    </Page>
  );
});

CreateMeetingPage.getInitialProps = async ({ req, res }) => {
  if (req) {
    const session = await makeAuth(req)!.getSessionOrLogIn(req, res);
    const { query } = hasura.fromCookies(req);

    // When can this happen?
    if (!session.user) {
      return {};
    }

    return query({
      nb_guild_member: [
        { where: { cr_user: { auth0_id: { _eq: session.user.sub } } } },
        { nb_guild: { id: true, name: true } },
      ],
    })
      .then(extractGuilds)
      .then((initialData) => ({ initialData }));
  }

  return {};
};

export default CreateMeetingPage;
