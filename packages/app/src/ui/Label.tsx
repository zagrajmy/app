import type { LabelProps } from "theme-ui";

export { Label } from "theme-ui";

export interface FormLabelProps<Name> extends Omit<LabelProps, "htmlFor"> {
  htmlFor: Name;
}
export type FormLabel<Name> = (props: FormLabelProps<Name>) => JSX.Element;

export type { LabelProps };
