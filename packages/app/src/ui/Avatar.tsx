import { forwardRef, Ref, useEffect, useRef, useState } from "react";
import {
  Avatar as ThemeUIAvatar,
  AvatarProps as ThemeUIAvatarProps,
  Box,
  BoxProps,
} from "theme-ui";

import { noop } from "../lib";
import { Center } from "./Center";
import { Text } from "./Text";

const borderedImgMargin: ThemeUIStyleObject = {
  boxSizing: "border-box",
  border: "1px solid transparent",
};

export const AvatarCenteredText = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <Center sx={{ position: "absolute", size: "100%" }}>
    <Text variant="bold">{children}</Text>
  </Center>
);

export interface AvatarCircleProps extends Omit<BoxProps, "size"> {
  size: number;
  bordered?: boolean;
}
export const AvatarCircle = ({
  children,
  size,
  bordered,
  ...rest
}: AvatarCircleProps) => {
  return (
    <Box
      sx={{
        size,
        borderRadius: "round",
        overflow: "hidden",
        position: "relative",
        display: "inline-block",
      }}
      {...rest}
    >
      {children}
      {bordered && (
        <div
          sx={{
            position: "absolute",
            height: size,
            width: size,
            boxSizing: "border-box",
            border: "2px solid",
            borderColor: "background",
            borderRadius: "round",
          }}
        />
      )}
      <Box
        sx={{
          bg: "gray.3",
          width: size - 2,
          height: size - 2,
          margin: "1px",
          borderRadius: "inherit",
        }}
      />
    </Box>
  );
};

export interface AvatarProps extends Omit<ThemeUIAvatarProps, "ref" | "size"> {
  placeholder?: string;
  size?: number;
  bordered?: boolean;
}

export const Avatar = forwardRef(function Avatar(
  { className, src, placeholder, size = 32, bordered, ...rest }: AvatarProps,
  ref: Ref<HTMLElement>
) {
  const [state, setState] = useState<"ok" | "error">("ok");
  const avatarRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = avatarRef.current;
    if (img) {
      const onError = () => {
        setState("error");
      };
      img.addEventListener("error", onError);

      return () => {
        img.removeEventListener("error", onError);
      };
    }

    return noop;
  }, []);

  return (
    <AvatarCircle
      size={size}
      className={className}
      ref={ref as Ref<HTMLDivElement>}
      bordered={bordered}
    >
      <ThemeUIAvatar
        async
        decoding="async"
        loading="lazy"
        importance="low"
        size={size}
        src={src}
        ref={avatarRef}
        sx={{
          position: "absolute",
          display: state === "ok" ? "block" : "none",
          opacity: 0.97,
          transition: "opacity 150ms linear",
          ":hover": { opacity: 0.88, filter: "lighten(1.1)" },
          objectFit: "cover",
          height: "100%",

          ...(bordered && borderedImgMargin),
        }}
        {...rest}
      />
      {state === "error" && (
        <AvatarCenteredText>{placeholder || rest.alt?.[0]}</AvatarCenteredText>
      )}
    </AvatarCircle>
  );
});
