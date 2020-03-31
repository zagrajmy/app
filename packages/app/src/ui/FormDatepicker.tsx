import ReactDatePicker, { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
import { Controller, ControllerProps } from "react-hook-form";
import { ReactNode } from "react";

registerLocale("pl-PL", pl);

interface FormDatepickerProps
  extends Omit<
    ControllerProps<typeof ReactDatePicker>,
    "customInput" | "as" | "valueName"
  > {
  input?: ReactNode;
}
export function FormDatepicker({
  input,
  defaultValue = new Date(),
  ...rest
}: FormDatepickerProps) {
  return (
    <Controller
      as={ReactDatePicker}
      showTimeSelect
      customInput={input}
      valueName="selected"
      defaultValue={defaultValue}
      dateFormat="Pp"
      timeFormat="p"
      {...rest}
      // locale="pl-PL" // TODO: Check if it's detected and respects preference
    />
  );
}
