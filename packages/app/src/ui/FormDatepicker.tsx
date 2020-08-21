import { Controller } from "react-hook-form";
import { ControllerProps } from "react-hook-form/dist/types/props";

import { DatePicker, DatePickerProps } from "./Datepicker";

interface FormDatepickerProps
  extends Omit<
    ControllerProps<typeof DatePicker>,
    "valueName" | "as" | "value" | "onChange"
  > {}

// TODO: test me after update to react-hook-form 6.
export function FormDatepicker(props: FormDatepickerProps) {
  return (
    <Controller
      as={DatePicker}
      {...({} as { onChange: DatePickerProps["onChange"] })}
      {...props}
    />
  );
}
