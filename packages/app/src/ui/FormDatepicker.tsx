import pl from "date-fns/locale/pl";
import { ReactNode } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { Controller, ControllerProps } from "react-hook-form";

import { Calendar } from "./icons";
import { Input } from "./Input";

registerLocale("pl-PL", pl);

const defaultInput = (
  <Input icon={<Calendar size={18} sx={{ color: "muted" }} />} />
);

interface FormDatepickerProps
  extends Omit<
    ControllerProps<typeof ReactDatePicker>,
    "customInput" | "as" | "valueName"
  > {
  input?: ReactNode;
}
export function FormDatepicker({
  input = defaultInput,
  ...rest
}: FormDatepickerProps) {
  return (
    <div
      sx={{
        ".react-datepicker-wrapper": {
          display: "unset",
          border: "unset",
          padding: "unset",
        },
      }}
    >
      <Controller
        as={ReactDatePicker}
        showTimeSelect
        customInput={input}
        valueName="selected"
        dateFormat="Pp"
        timeFormat="p"
        {...rest}
        // locale="pl-PL" // TODO: Check if it's detected and respects preference
      />
    </div>
  );
}
