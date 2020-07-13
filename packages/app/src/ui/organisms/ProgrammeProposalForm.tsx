import { absurd } from "fp-ts/lib/function";
import { forwardRef } from "react";
import { ErrorMessage, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Heading,
  Label as SimpleLabel,
  Message,
  Radio,
  Textarea,
} from "theme-ui";

import { settings } from "../../types";
import { Container } from "../Container";
import { Fieldset } from "../Fieldset";
import { Input } from "../Input";
import { Label as BaseLabel, LabelProps as BaseLabelProps } from "../Label";
import { mdx } from "../mdx";
import { Spacer } from "../Spacer";

const rowStyles = { display: "flex", alignItems: "center" };

type FieldName = string;
export type ProgrammeProposalFormResult = {
  [K in FieldName]: string | number;
};

const FieldDescription = ({ children }: { children?: string }) =>
  children ? (
    <div sx={{ fontSize: 1, fontStyle: "italic", p: { m: 0 } }}>
      {mdx(children)}
    </div>
  ) : null;

interface LabelProps extends Omit<BaseLabelProps<FieldName>, "ref"> {
  /**
   * field label
   */
  labelText: string;
  /**
   * additional description
   */
  description?: string;
}
// Consider moving it out to `Label.tsx`. It might be useful in other forms.
const Label = ({
  htmlFor,
  labelText,
  children,
  optional,
  description,
  ...rest
}: LabelProps) => {
  const { t } = useTranslation();
  return (
    <BaseLabel {...rest} htmlFor={htmlFor}>
      <Box variant="forms.label">
        {labelText || t(`proposal-form-${htmlFor}`)}
        <BaseLabel.OptionalMark value={optional} />
      </Box>
      <FieldDescription>{description}</FieldDescription>
      {children}
    </BaseLabel>
  );
};

const YesOrNoText = () => {
  const { t } = useTranslation();

  return (
    <span
      sx={{
        color: "text",
        fontWeight: "normal",
        ":before": {
          content: `"${t("no")}"`,
        },
        "input:checked ~ &:before": {
          content: `"${t("yes")}"`,
        },
      }}
    />
  );
};

const errorMessageProps = {
  as: Message,
  variant: "critical",
  sx: { mt: 1 },
} as const;

interface FieldControlProps {
  field: settings.Field;
}
const FieldControl = forwardRef<any, FieldControlProps>(({ field }, ref) => {
  const labelProps: LabelProps = {
    htmlFor: field.name,
    optional: !field.required,
    labelText: field.label,
    description: field.description,
  };

  switch (field.type) {
    case "discord":
    case "line":
      return (
        <Label {...labelProps}>
          <Input name={field.name} id={field.name} ref={ref} />
        </Label>
      );
    case "text":
      return (
        <Label {...labelProps}>
          <Textarea
            name="description"
            rows={5}
            ref={ref}
            sx={{ resize: "none" }}
          />
        </Label>
      );
    case "single-choice":
      return (
        <Box as="fieldset" variant="forms.choiceGroup">
          <legend>{field.label}</legend>
          <FieldDescription>{field.description}</FieldDescription>
          {Object.entries(field.choices).map(([label, value]) => (
            <SimpleLabel key={value} sx={rowStyles}>
              <Radio name={field.name} value={value} ref={ref} />
              {label}
            </SimpleLabel>
          ))}
        </Box>
      );
    case "multiple-choice":
      return (
        <div>
          <Box as="fieldset" variant="forms.choiceGroup">
            <legend>{field.label}</legend>
            <FieldDescription>{field.description}</FieldDescription>
            {Object.entries(field.choices).map(([label, value]) => (
              <SimpleLabel key={value} sx={rowStyles}>
                <Checkbox name={field.name} value={value} ref={ref} />
                {label}
              </SimpleLabel>
            ))}
          </Box>
        </div>
      );
    case "phone":
      return (
        <Label {...labelProps}>
          <Input name={field.name} id={field.name} type="tel" ref={ref} />
        </Label>
      );
    case "email":
      return (
        <Label {...labelProps}>
          <Input name={field.name} id={field.name} type="email" ref={ref} />
        </Label>
      );
    case "checkbox":
      // User can agree or disagree to something.
      return (
        <Label {...labelProps}>
          <div sx={{ "> div": rowStyles, py: 1 }}>
            <Checkbox name={field.name} id={field.name} ref={ref}>
              {/* <YesOrNoText /> uncomment it after Theme UI update */}
            </Checkbox>
          </div>
        </Label>
      );
    case "number":
      return (
        <Label {...labelProps}>
          <Input
            type="number"
            name={field.name}
            id={field.name}
            max={field.max}
            min={field.min}
            step={field.step}
            ref={ref}
          />
        </Label>
      );
    default:
      absurd(field);
      return null;
  }
});

export interface ProgrammeProposalFormProps {
  settings: settings.Form;
  onSubmit: (values: ProgrammeProposalFormResult) => void;
}

export function ProgrammeProposalForm({
  settings: { introText, footerText, title, fieldsets },
  onSubmit,
}: ProgrammeProposalFormProps) {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm<
    ProgrammeProposalFormResult
  >();

  return (
    <Container
      as="form"
      variant="sheet"
      sx={{
        width: "containerThin",

        py: [3, 5],
        px: [2, 5],
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <header>
        <Heading as="h1">{title}</Heading>
        <div sx={{ pt: 2, pb: 4 }}>{mdx(introText)}</div>
      </header>
      <Grid gap={3}>
        {fieldsets.map(({ description, fields }, i) => {
          return (
            <Box key={i}>
              <Heading
                as="h3"
                sx={{
                  color: "gray.9",
                  borderBottom: "2px solid",
                  borderBottomColor: "gray.1",
                }}
              >
                {description}
              </Heading>
              <Fieldset>
                {fields.map((field, j) => {
                  return (
                    <div key={j}>
                      <FieldControl
                        field={field}
                        ref={register({
                          required: field.required
                            ? `${t("field-is-required")}`
                            : undefined,
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name={field.name}
                        {...errorMessageProps}
                      />
                    </div>
                  );
                })}
              </Fieldset>
            </Box>
          );
        })}
      </Grid>
      <footer>
        {/* triggers missing unique key warning */}
        {mdx(footerText)}
        <Spacer height={3} />
        <Button type="submit" sx={{ fontWeight: "bold", marginLeft: "auto" }}>
          {t("submit")}
        </Button>
      </footer>
    </Container>
  );
}
