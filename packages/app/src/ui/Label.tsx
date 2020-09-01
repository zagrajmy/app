import { useTranslation } from "react-i18next";
import { Label as BaseLabel, LabelProps as BaseLabelProps } from "theme-ui";

const OptionalMark = ({ value }: { value?: boolean }) => {
  const { t } = useTranslation();

  return value ? (
    <small sx={{ fontWeight: "normal", order: -1, px: 1 }}>
      ({t("optional")})
    </small>
  ) : null;
};

export interface LabelProps<Name extends string>
  extends Omit<BaseLabelProps, "ref" | "htmlFor"> {
  optional?: boolean;
  htmlFor?: Name;
}

export type FormLabel<Name extends string> = (
  props: LabelProps<Name>
) => JSX.Element;
export const Label = <Name extends string = string>({
  children,
  optional,
  ...rest
}: LabelProps<Name>) => {
  return (
    <BaseLabel {...rest}>
      <OptionalMark value={optional} />
      {children}
    </BaseLabel>
  );
};

Label.OptionalMark = OptionalMark;
