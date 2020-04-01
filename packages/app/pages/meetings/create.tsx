import { NextPage } from "next";
import { OnSubmit, useForm } from "react-hook-form";
import {
  Label as ThLabel,
  Textarea,
  Container,
  LabelProps,
  Select,
  Grid,
  Button,
  Flex,
} from "theme-ui";
import { OmitByValue } from "utility-types";
import fetch from "isomorphic-unfetch";

import { useTranslation } from "react-i18next";
import { meeting as Meeting } from "../../data/graphql-zeus";
import { makeAuth } from "../../src/app/auth";
import { Page } from "../../src/app/components";
import {
  FormDatepicker,
  Input as ThInput,
  InputProps as ThInputProps,
} from "../../src/ui";
import { InsertMeetingBody } from "../api/meetings/insert";

const GUILD_ID = 1; // TODO

type MeetingProperty = keyof OmitByValue<Meeting, object>;

interface InputProps extends Omit<ThInputProps, "name"> {
  name: MeetingProperty;
}
const Input = ThInput as (props: InputProps) => JSX.Element;

const Label = ThLabel as (
  props: Omit<LabelProps, "htmlFor"> & { htmlFor: MeetingProperty }
) => JSX.Element;

const CreateMeetingPage: NextPage = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, control } = useForm<Meeting>({
    defaultValues: {
      guild_id: GUILD_ID,
    },
  });

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
        title: values.title,
        sphere_id: 2, // TODO (zagrajmy.now.sh)
      },
    };

    // TODO: Move fetching outside of callback handler to a proper place
    // useEffect or query hook
    fetch("/api/meetings/insert", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        // TODO: Handle me. Display error in the UI.
        // Let's make useMutation hook or think about react-query
        // once again
        // steida had a pretty cool useMutation hook on Twitter
      });
  };

  return (
    <Page>
      <Container
        as="form"
        variant="sheet"
        sx={
          {
            maxWidth: 720,

            px: 5,
            pb: 5,
            pt: 4,
            mt: 4,

            display: "grid",
            gridGap: 3,
          } as any /* TODO: Add gridGap to Theme UI styles */
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Label htmlFor="title">{t("title")}</Label>
          <Input name="title" ref={register} />
        </div>
        <div>
          <Label htmlFor="description">{t("description")}</Label>
          <Textarea
            name="description"
            rows={5}
            ref={register}
            sx={{ resize: "none" }}
          />
        </div>
        <div>
          <Label htmlFor="guild">
            {t("guild")} <small>{t("optional")}</small>
          </Label>
          <Select name="guild" disabled>
            <option value={1}>Twoja Gildia</option>
          </Select>
        </div>
        <Grid columns={2}>
          <div>
            <Label htmlFor="start_time">{t("meeting-start-time")}</Label>
            <FormDatepicker name="start-time" control={control} />
          </div>
          <div>
            <Label htmlFor="end_time">{t("meeting-end-time")}</Label>
            <FormDatepicker name="end-time" control={control} />
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
      </Container>
    </Page>
  );
};

CreateMeetingPage.getInitialProps = async ({ req, res }) => {
  return makeAuth(req)?.getSessionOrLogIn(req, res) || {};
};

export default CreateMeetingPage;
