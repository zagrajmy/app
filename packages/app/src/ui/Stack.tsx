import { ComponentPropsWithoutRef } from "react";
import { FunctionKeys } from "utility-types";

import { Theme } from "./theme";

type OmitFunctions<T extends object> = Omit<T, FunctionKeys<T>>;

export interface StackProps
  extends OmitFunctions<ComponentPropsWithoutRef<"div">> {
  as?: "div" | "section" | "article" | "ol" | "ul" | "fieldset";
  row?: boolean;
  gap?: number;
}
export const Stack = ({
  as: Root = "div",
  gap = 0,
  row: isRow,
  children,
  sx,
  ...rest
}: StackProps) => {
  const marginOrientation = isRow
    ? "margin-inline-start"
    : "margin-block-start";

  return (
    <Root
      sx={{
        display: "flex",
        flexDirection: isRow ? "row" : "column",
        "& > *:not(:first-child)": {
          [marginOrientation]: (t: Theme) => t.space[gap] ?? gap,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Root>
  );
};
