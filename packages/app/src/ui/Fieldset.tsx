import { Stack, StackProps } from "./Stack";

export interface FieldsetProps extends Omit<StackProps, "as"> {}
export const Fieldset = (props: FieldsetProps) => {
  return (
    <Stack
      as="fieldset"
      gap={3}
      sx={{ border: "none", m: 0, p: 0 }}
      {...props}
    />
  );
};
