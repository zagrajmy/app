import { forwardRef, useCallback, useRef } from "react";
import {
  Box,
  IconButton,
  Input as ThemeUiInput,
  InputProps as ThemeUiInputProps,
} from "theme-ui";

import { Center } from "./Center";
import { X } from "./icons";

// TODO: Derive this px values from theme

const ICON_SIZE = 46;

const overlayStyle = {
  outline: "none",
  position: "absolute",
  height: "100%",
  minHeight: ICON_SIZE,
  width: ICON_SIZE,
  svg: {
    stroke: "gray.7",
  },
} as const;

export interface InputProps extends ThemeUiInputProps {
  icon?: React.ReactNode;
  onClear?: () => void;
  inline?: boolean;
}

export interface FormInputProps<Name> extends Omit<InputProps, "name"> {
  name: Name;
}
export type FormInput<Name> = (props: FormInputProps<Name>) => JSX.Element;

/**
 * Input variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.input` variant by default.
 * @see https://theme-ui.com/components/input/
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, icon, onClear, children, inline, variant: _, ...rest },
    forwardedRef
  ) => {
    const defaultRef = useRef(null);
    const ref = forwardedRef || defaultRef;

    const handleClear = useCallback(() => {
      if (typeof onClear !== "function") {
        return;
      }

      onClear();

      if (ref && typeof ref === "object" && ref.current) {
        ref.current.focus();
      }
    }, [onClear, ref]);

    return (
      <Box
        className={className}
        variant="forms.input"
        sx={{
          position: "relative",
          flexBasis: "auto",
          display: inline ? "inline-block" : "block",
        }}
      >
        {icon && <Center sx={overlayStyle}>{icon}</Center>}
        <ThemeUiInput
          // TODO: Fix and test it in theme-ui?
          ref={(ref as React.Ref<HTMLInputElement>) as any}
          sx={{
            height: "100%",
            width: "100%",
            p: 2,
            font: "inherit",
            lineHeight: "inherit",
            border: "none",
            background: "none",
            ...(icon && { pl: ICON_SIZE - 2 }),
          }}
          {...rest}
        />
        {children}
        {onClear && (
          <IconButton
            onClick={handleClear}
            sx={{
              ...overlayStyle,
              right: 0,
              top: 0,
              visibility: rest.value ? "visible" : "hidden",
            }}
          >
            <X />
          </IconButton>
        )}
      </Box>
    );
  }
);
