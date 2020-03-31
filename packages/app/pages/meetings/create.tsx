import { NextPage } from "next";
import { OnSubmit, useForm } from "react-hook-form";
import {
  Input as ThInput,
  InputProps as ThInputProps,
  Label,
  Textarea,
  Card,
} from "theme-ui";
import { OmitByValue } from "utility-types";

import { useTranslation } from "react-i18next";
import { meeting as Meeting } from "../../data/graphql-zeus";
import { auth } from "../../src/app/auth";
import { Page } from "../../src/app/components";

const GUILD_ID = 1; // TODO

interface InputProps extends Omit<ThInputProps, "name"> {
  name: keyof OmitByValue<Meeting, object>;
}
const Input = ThInput as (props: InputProps) => JSX.Element;

const CreateMeetingPage: NextPage = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm<Meeting>({
    defaultValues: {
      guild_id: GUILD_ID,
    },
  });

  const onSubmit: OnSubmit<Meeting> = (values) => console.log({ values });

  return (
    <Page>
      <Card as="form" onSubmit={handleSubmit(onSubmit)}>
        <Label>
          {t("title")}
          <Input name={t("title")} ref={register} />
        </Label>
        <Label>
          {t("description")}
          <Textarea
            name={t("description")}
            rows={5}
            ref={register}
            sx={{ resize: "none" }}
          />
        </Label>
      </Card>
    </Page>
  );
};

CreateMeetingPage.getInitialProps = async ({ req, res }) => {
  return auth.getSessionOrLogIn(req, res);
};

export default CreateMeetingPage;
