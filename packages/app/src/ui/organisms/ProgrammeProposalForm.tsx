import { htmdx } from "htmdx";
import { ErrorMessage, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Grid, jsx as h, Message, Styled, Textarea } from "theme-ui";

import { Container } from "../Container";
import { Fieldset } from "../Fieldset";
import { FormInput, Input as BaseInput } from "../Input";
import { FormLabelProps, Label as BaseLabel } from "../Label";

export interface ProgrammeProposalFormFields {
  title: string;
  description: string;

  phone: string;
  other_contact: string;
  city: string;
  club: string;

  needs: string;
  other_data: string;
}

type Field = keyof ProgrammeProposalFormFields;
type FieldLabels = { [K in Field]?: string };

//#region form components: Input, Label
const Input = BaseInput as FormInput<Field>;

interface LabelProps extends Omit<FormLabelProps<Field>, "ref"> {
  fieldLabels: FieldLabels;
}
const Label = ({ fieldLabels, htmlFor, ...rest }: LabelProps) => {
  const { t } = useTranslation();
  return (
    <BaseLabel {...rest} htmlFor={htmlFor}>
      {fieldLabels[htmlFor] || t(`proposal-form-${htmlFor}`)}
    </BaseLabel>
  );
};
//#endregion

const mdx = (s: string) => htmdx(s, h, { components: Styled });

const errorMessageProps = {
  as: Message,
  variant: "critical",
  sx: { mt: 1 },
} as const;

export interface ProgrammeProposalFestivalSettings extends FieldLabels {
  introText: string;
  footerText: string;
}

export interface ProgrammeProposalFormProps {
  settings: ProgrammeProposalFestivalSettings;
  onSubmit: (values: ProgrammeProposalFormFields) => void;
}

export function ProgrammeProposalForm({
  settings: { introText, footerText, ...labels },
  onSubmit,
}: ProgrammeProposalFormProps) {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm<
    ProgrammeProposalFormFields
  >();

  return (
    <Container
      as="form"
      variant="sheet"
      sx={{
        width: "containerThin",

        px: 5,
        pb: 5,
        pt: 4,
        mt: 4,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {mdx(introText)}
      <Grid gap={3}>
        <Fieldset>
          <div>
            <Label fieldLabels={labels} htmlFor="title" />
            <Input
              name="title"
              ref={register({ required: `${t("field-is-required")}` })}
            />
            <ErrorMessage errors={errors} name="title" {...errorMessageProps} />
          </div>
          <div>
            <Label fieldLabels={labels} htmlFor="description" />
            <Textarea
              name="description"
              rows={5}
              ref={register}
              sx={{ resize: "none" }}
            />
          </div>
        </Fieldset>
        <Fieldset>
          <div>
            <Label fieldLabels={labels} htmlFor="phone" />
            <Input name="phone" />
            <ErrorMessage errors={errors} name="phone" {...errorMessageProps} />
          </div>
          <div>
            <Label fieldLabels={labels} htmlFor="other_contact" />
            <Input name="phone" />
            <ErrorMessage errors={errors} name="phone" {...errorMessageProps} />
          </div>
          <div>
            <Label fieldLabels={labels} htmlFor="city" />
            <Input name="city" />
            <ErrorMessage errors={errors} name="city" {...errorMessageProps} />
          </div>
          <div>
            <Label fieldLabels={labels} htmlFor="club" />
            <Input name="city" />
            <ErrorMessage errors={errors} name="club" {...errorMessageProps} />
          </div>
        </Fieldset>
        <Fieldset>
          <div>
            <Label fieldLabels={labels} htmlFor="needs" />
            <Input name="needs" />
            <ErrorMessage errors={errors} name="needs" {...errorMessageProps} />
          </div>
          <div>
            <Label fieldLabels={labels} htmlFor="other_data" />
            <Textarea
              name="other_data"
              rows={5}
              ref={register}
              sx={{ resize: "none" }}
            />
          </div>
        </Fieldset>
      </Grid>
      {mdx(footerText)}
    </Container>
  );
}
