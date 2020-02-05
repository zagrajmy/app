import { NextPage } from "next";
import { useForm, OnSubmit } from "react-hook-form";
import {
  Input as ThInput,
  InputProps as ThInputProps,
  Box,
  Label,
  Textarea,
} from "@theme-ui/components";
import { OmitByValue } from "utility-types";

import { meetings_meeting as Meeting } from "../../data/graphql-zeus";
import { Page } from "../../src/app/components";
import { hasura } from "../../data/hasura";
import { auth } from "../../src/app/auth";

const GUILD_ID = 1; // TODO
const SPHERE_ID = 1; // TODO

interface InputProps extends Omit<ThInputProps, "name"> {
  name: keyof OmitByValue<Meeting, object>;
}
const Input = ThInput as (props: InputProps) => JSX.Element;

const CreateMeetingPage: NextPage = () => {
  const { register, handleSubmit, errors, getValues } = useForm<Meeting>({
    defaultValues: {
      guild_id: GUILD_ID,
      sphere_id: SPHERE_ID,
    },
  });

  const onSubmit: OnSubmit<Meeting> = values => console.log({ values });

  return (
    <Page>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Title
          <Input name="title" ref={register} />
        </Label>
        <Label>
          Description
          <Textarea
            name="description"
            rows={5}
            ref={register}
            sx={{ resize: "none" }}
          />
        </Label>
      </Box>
    </Page>
  );
};

CreateMeetingPage.getInitialProps = ({ req, res }) => {
  return auth.getUserOrLogIn(req, res);
};

export default CreateMeetingPage;
