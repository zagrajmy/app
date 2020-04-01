import { NextPage } from "next";
import { OnSubmit, useForm } from "react-hook-form";
import {
  Input as ThInput,
  InputProps as ThInputProps,
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

import { useTranslation } from "react-i18next";
import { meeting as Meeting } from "../../data/graphql-zeus";
import { makeAuth } from "../../src/app/auth";
import { Page } from "../../src/app/components";
import { FormDatepicker } from "../../src";

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

  const onSubmit: OnSubmit<Meeting> = (values, event) =>
    console.log({ values, event });

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
          <Label htmlFor="guild">{t("guild")}</Label>
          <Select name="guild" disabled>
            <option>Twoja Gildia</option>
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
