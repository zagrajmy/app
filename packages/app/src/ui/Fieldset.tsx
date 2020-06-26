import { Stack, StackProps } from "./Stack";

export interface FieldsetProps extends Omit<StackProps, "as"> {}
export const Fieldset = (props: FieldsetProps) => {
  return (
    <Stack
      as="fieldset"
      gap={3}
      sx={{ border: "none", px: 0, py: 3, mx: 0, my: 2 }}
      {...props}
    />
  );
};
