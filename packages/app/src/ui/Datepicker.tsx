import {
  differenceInCalendarDays,
  getMinutes,
  isSameDay,
  set,
  subMinutes,
} from "date-fns";
import pl from "date-fns/locale/pl";
import { array } from "fp-ts/lib/Array";
import { none, some } from "fp-ts/lib/Option";
import { forwardRef, ReactNode } from "react";
import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import { Controller } from "react-hook-form";
import { ControllerProps } from "react-hook-form/dist/types/props";
import { ThemeUIStyleObject } from "theme-ui";

import { Calendar } from "./icons";
import { Input } from "./Input";

registerLocale("pl-PL", pl);

const defaultInput = (
  <Input icon={<Calendar size={18} sx={{ color: "muted" }} />} />
);

const excludedHoursOnMinDate = (min: Date) => {
  const latestSlot = set(min, {
    milliseconds: 0,
    seconds: 0,
    minutes: getMinutes(min) >= 30 ? 30 : 0,
  });

  return array.unfold(latestSlot, (x) =>
    differenceInCalendarDays(latestSlot, x) > 0
      ? none
      : some([x, subMinutes(x, 30)])
  );
};

const reactDatePickerStyleOverride: ThemeUIStyleObject = {
  ".react-datepicker-wrapper": {
    display: "unset",
    border: "unset",
    padding: "unset",
  },
};

type OmittedPropsForMin = "minTime" | "minDate" | "excludeTimes";

export interface DatePickerProps
  extends Omit<
    ReactDatePickerProps,
    OmittedPropsForMin | "customInput" | "selected"
  > {
  input?: ReactNode;
  min?: Date;
}

export const DatePicker = forwardRef<ReactDatePicker, DatePickerProps>(
  function DatePicker({ input = defaultInput, min, value, ...rest }, ref) {
    const date = value !== undefined ? new Date(value) : undefined;
    return (
      <div sx={reactDatePickerStyleOverride}>
        <ReactDatePicker
          ref={ref}
          showTimeSelect
          customInput={input}
          dateFormat="Pp"
          timeFormat="p"
          selected={date}
          autoComplete="off"
          minDate={min}
          excludeTimes={
            min && date && isSameDay(date, min)
              ? excludedHoursOnMinDate(min)
              : undefined
          }
          {...rest}
          // locale="pl-PL" // TODO: Check if it's detected and respects preference
        />
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";
