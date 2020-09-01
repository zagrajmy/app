import { ErrorMessage } from "@hookform/error-message";
import { absurd } from "fp-ts/lib/function";
import { TFunction } from "i18next";
import { forwardRef, useEffect, useMemo } from "react";
import { useForm, ValidationRules } from "react-hook-form";
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

import { DeepPartial } from "../../lib/utilityTypes";
import { settings } from "../../types";
import { Container } from "../Container";
import { Fieldset } from "../Fieldset";
import { Input } from "../Input";
import { Label as BaseLabel, LabelProps as BaseLabelProps } from "../Label";
import { mdx } from "../mdx";
import { Spacer } from "../Spacer";

/**
 * Type unsafe and impure 💩
 *
 * Don't use this function anywhere outside forms and use it only in places
 * which are thoroughly tested.
 *
 * react-hook-form doesn't coerce values from number fields into numbers so we
 * need to do this on submit. As we don't know the shape of the form value and
 * it can be deeply nested, we use this dirty piece of code.
 */
function unsafeMod(
  obj: Record<string, unknown>,
  path: string,
  f: (x: unknown) => unknown
) {
  let cur = obj as any;
  const p = path.split(".");
  for (const key of p.slice(0, -1)) {
    cur = cur[key];
  }

  cur[p[p.length - 1]] = f(cur[p[p.length - 1]]);
}
function unsafeGet(obj: Record<string, unknown>, path: string) {
  let cur = obj as any;
  for (const key of path.split(".")) {
    if (!cur) {
      return cur;
    }
    cur = cur[key];
  }
  return cur;
}

type FieldName = string;
export type ProgrammeProposalFormResult = {
  [K in FieldName]: string | number;
};

function coerceNumberFieldValuesToNumber(
  fieldsets: settings.Fieldset[],
  result: ProgrammeProposalFormResult
) {
  for (const fieldset of fieldsets) {
    for (const field of fieldset.fields) {
      if (field.type === "number") {
        // beware: 💩 code
        try {
          unsafeMod(result, field.name, Number);
        } catch (err) {
          console.error(err);
        }
      } else if (
        field.type === "multiple-choice" ||
        field.type === "single-choice"
      ) {
        const values = new Set(field.choices.map((x) => x[1]));
        try {
          unsafeMod(result, field.name, (chosen) => {
            if (Array.isArray(chosen)) {
              return chosen.map((x) => {
                if (values.has(x)) {
                  return x;
                }
                if (values.has(Number(x))) {
                  return Number(x);
                }
                console.error(`values does not contain ${x}`, { values });
                return x;
              });
            }
            return chosen;
          });
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
}

function fieldRef(
  register: (
    validationOptions: ValidationRules
  ) => (ref: Element | null) => void,
  field: settings.Field,
  t: TFunction
) {
  switch (field.type) {
    case "discord":
      return register({
        required: field.required ? `${t("field-is-required")}` : undefined,
        pattern: {
          value: /(.*)#(\d{4})/,
          message: t("does-not-match-discord-username-pattern"),
        },
      });
    default:
      return register({
        required: field.required ? `${t("field-is-required")}` : undefined,
      });
  }
}

const rowStyles = { display: "flex", alignItems: "center" };

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

// todo: uncomment this and use after new Theme UI version is published
// const YesOrNoText = () => {
//   const { t } = useTranslation();

//   return (
//     <span
//       sx={{
//         color: "text",
//         fontWeight: "normal",
//         ":before": {
//           content: `"${t("no")}"`,
//         },
//         "input:checked ~ &:before": {
//           content: `"${t("yes")}"`,
//         },
//       }}
//     />
//   );
// };

const errorMessageProps = {
  as: Message,
  variant: "critical",
  sx: { mt: 1 },
  role: "alert",
} as const;

interface FieldControlProps {
  field: settings.Field;
  isInvalid: boolean;
}
const FieldControl = forwardRef<any, FieldControlProps>(
  ({ field, isInvalid }, ref) => {
    const labelProps: LabelProps = {
      htmlFor: field.name,
      optional: !field.required,
      labelText: field.label,
      description: field.description,
    };

    const ariaInvalid = isInvalid ? "true" : "false";

    switch (field.type) {
      case "discord":
      case "line":
        return (
          <Label {...labelProps}>
            <Input
              name={field.name}
              id={field.name}
              aria-invalid={ariaInvalid}
              ref={ref}
            />
          </Label>
        );
      case "text":
        return (
          <Label {...labelProps}>
            <Textarea
              name="description"
              rows={5}
              ref={ref}
              aria-invalid={ariaInvalid}
              sx={{ resize: "none" }}
            />
          </Label>
        );
      case "single-choice":
        return (
          <Box as="fieldset" variant="forms.choiceGroup">
            <legend>{field.label}</legend>
            <FieldDescription>{field.description}</FieldDescription>
            {field.choices.map(([label, value]) => (
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
              {field.choices.map(([label, value]) => (
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
            <Input
              name={field.name}
              id={field.name}
              type="tel"
              aria-invalid={ariaInvalid}
              ref={ref}
            />
          </Label>
        );
      case "email":
        return (
          <Label {...labelProps}>
            <Input
              name={field.name}
              id={field.name}
              type="email"
              aria-invalid={ariaInvalid}
              ref={ref}
            />
          </Label>
        );
      case "checkbox":
        // User can agree or disagree to something.
        return (
          <Label {...labelProps}>
            <div sx={{ "> div": rowStyles, py: 1 }}>
              <Checkbox
                name={field.name}
                id={field.name}
                aria-invalid={ariaInvalid}
                ref={ref}
              >
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
              aria-invalid={ariaInvalid}
              ref={ref}
            />
          </Label>
        );
      default:
        absurd(field);
        return null;
    }
  }
);

export interface ProgrammeProposalFormProps {
  settings: settings.Form;
  onSubmit: (values: ProgrammeProposalFormResult) => void;
  defaultValues?: DeepPartial<ProgrammeProposalFormResult>;
  isSubmitting?: boolean;
  errors?: Record<string, string[]>;
}

export function ProgrammeProposalForm({
  settings: { introText, footerText, title, fieldsets, waitlist },
  onSubmit: propsOnSubmit,
  defaultValues,
  isSubmitting,
  errors: externalErrors,
}: ProgrammeProposalFormProps) {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, setError } = useForm<
    ProgrammeProposalFormResult
  >({ defaultValues });

  const id = title;

  useEffect(() => {
    if (externalErrors) {
      for (const [name, messages] of Object.entries(externalErrors)) {
        setError(name, {
          type: "manual",
          message: messages.join("\n"),
        });
      }
    }
  }, [externalErrors, setError]);

  const onSubmit = useMemo(
    () =>
      handleSubmit((result: ProgrammeProposalFormResult) => {
        coerceNumberFieldValuesToNumber(fieldsets, result);
        // eslint-disable-next-line no-param-reassign
        result.waitlist = waitlist;
        propsOnSubmit(result);
      }),
    [fieldsets, handleSubmit, propsOnSubmit, waitlist]
  );

  return (
    <Container
      as="form"
      variant="sheet"
      aria-labelledby={id}
      sx={{
        width: "containerThin",

        py: [3, 5],
        px: [2, 5],
      }}
      onSubmit={onSubmit}
    >
      <header>
        <Heading as="h1" id={id}>
          {title}
        </Heading>
        <div sx={{ pt: 2, pb: 4 }}>{mdx(introText)}</div>
      </header>
      <Grid gap={3}>
        {fieldsets.map(({ description, fields }, i) => {
          return (
            <Box key={i}>
              <Heading
                as="h3"
                sx={{
                  color: "gray.8",
                  borderBottom: "2px solid",
                  borderBottomColor: "gray.1",
                }}
              >
                {description}
              </Heading>
              <Fieldset>
                {fields.map((field, j) => {
                  const error =
                    errors[field.name] || unsafeGet(errors, field.name);

                  return (
                    <div key={j}>
                      <FieldControl
                        field={field}
                        ref={fieldRef(register, field, t)}
                        isInvalid={Boolean(error)}
                      />
                      {error && (
                        <ErrorMessage
                          errors={errors}
                          name={field.name}
                          {...errorMessageProps}
                        />
                      )}
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
        <Button
          type="submit"
          sx={{ fontWeight: "bold", marginLeft: "auto" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? t("submitting") : t("submit")}
        </Button>
      </footer>
    </Container>
  );
}
