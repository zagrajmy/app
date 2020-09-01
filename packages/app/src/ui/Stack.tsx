import { Children, ComponentPropsWithoutRef } from "react";
import { ThemeUIStyleObject, ThemeUICSSProperties } from "theme-ui";
import { FunctionKeys } from "utility-types";

const listStyles: ThemeUIStyleObject = {
  listStyle: "none",
  pl: 0,
};

function getStyles(
  isRow: boolean | "only-desktop" | undefined,
  gap:
    | number
    | [
        number,
        (number | undefined)?,
        (number | undefined)?,
        (number | undefined)?
      ],
  justifyContent: ThemeUICSSProperties["justifyContent"],
  alignItems: ThemeUICSSProperties["alignItems"],
  rootIsList: boolean
) {
  const childMargin: ThemeUIStyleObject =
    isRow === "only-desktop"
      ? {
          marginBlockStart: [gap, null],
          marginInlineStart: [null, gap],
        }
      : {
          [isRow ? "marginInlineStart" : "marginBlockStart"]: gap,
        };

  const containerStyle: ThemeUIStyleObject = Object.assign(
    {
      display: "flex",
      flexDirection:
        isRow === "only-desktop" ? ["column", "row"] : isRow ? "row" : "column",
      justifyContent,
      alignItems,
    },
    rootIsList ? listStyles : null
  );
  return { containerStyle, childMargin };
}

type OmitFunctions<T extends object> = Omit<T, FunctionKeys<T>>;

export interface StackProps
  extends OmitFunctions<ComponentPropsWithoutRef<"div">> {
  as?: "div" | "section" | "article" | "ol" | "ul" | "fieldset";
  row?: boolean | "only-desktop";
  justify?: ThemeUICSSProperties["justifyContent"];
  align?: ThemeUICSSProperties["alignItems"];
  gap?: number | [number, number?, number?, number?];
  // use whenever children are heterogenous
  wrapChildren?: boolean;
}
export const Stack = ({
  as: Root = "div",
  gap = 0,
  row: isRow,
  children,
  justify: justifyContent,
  align: alignItems,
  wrapChildren,
  sx,
  ...rest
}: StackProps) => {
  const { containerStyle, childMargin } = getStyles(
    isRow,
    gap,
    justifyContent,
    alignItems,
    Root === "ul" || Root === "ol"
  );

  if (wrapChildren) {
    return (
      <Root sx={{ ...containerStyle, ...sx }} {...rest}>
        {Children.map(children, (child, i) => (
          <div key={i} sx={i === 0 ? {} : childMargin}>
            {child}
          </div>
        ))}
      </Root>
    );
  }

  return (
    <Root
      sx={{
        ...containerStyle,
        "& > *:not(:first-of-type)": childMargin,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Root>
  );
};
