import { ComponentPropsWithoutRef } from "react";
import { ThemeUICSSProperties } from "theme-ui";
import { FunctionKeys } from "utility-types";

type OmitFunctions<T extends object> = Omit<T, FunctionKeys<T>>;

export interface StackProps
  extends OmitFunctions<ComponentPropsWithoutRef<"div">> {
  as?: "div" | "section" | "article" | "ol" | "ul" | "fieldset";
  row?: boolean;
  justify?: ThemeUICSSProperties["alignItems"];
  align?: ThemeUICSSProperties["alignItems"];
  gap?: number;
}
export const Stack = ({
  as: Root = "div",
  gap = 0,
  row: isRow,
  children,
  justify: justifyContent,
  align: alignItems,
  sx,
  ...rest
}: StackProps) => {
  const marginOrientation = isRow ? "marginInlineStart" : "marginBlockStart";

  return (
    <Root
      sx={{
        display: "flex",
        flexDirection: isRow ? "row" : "column",
        justifyContent,
        alignItems,
        // This is homogenous. Don't use different types of children.
        "& > *:not(:first-of-type)": {
          [marginOrientation]: gap,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Root>
  );
};
