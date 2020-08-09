import { forwardRef, Ref, useEffect, useRef, useState } from "react";
import {
  Avatar as ThemeUIAvatar,
  AvatarProps as ThemeUIAvatarProps,
  Box,
} from "theme-ui";

import { noop } from "../lib";
import { Center } from "./Center";

const PlaceholderText = ({ children }: { children?: string }) => (
  <Center sx={{ position: "absolute", size: "100%" }}>{children}</Center>
);

export interface AvatarProps extends Omit<ThemeUIAvatarProps, "ref"> {
  placeholder?: string;
}

export const Avatar = forwardRef(function Avatar(
  { className, src, placeholder, ...rest }: AvatarProps,
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
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: "round",
        overflow: "hidden",
        position: "relative",
        display: "inline-block",
      }}
      className={className}
      ref={ref as Ref<HTMLDivElement>}
    >
      <ThemeUIAvatar
        async
        decoding="async"
        loading="lazy"
        importance="low"
        width={32}
        height={32}
        src={src}
        ref={avatarRef}
        sx={{
          position: "absolute",
          display: state === "ok" ? "block" : "none",
          opacity: 0.97,
          transition: "opacity 150ms linear",
          ":hover": { opacity: 0.9 },
        }}
        {...rest}
      />
      {state === "error" && (
        <PlaceholderText>{placeholder || rest.alt?.[0]}</PlaceholderText>
      )}
      <Box
        sx={{
          bg: "gray.3",
          width: 30,
          height: 30,
          margin: "1px",
          borderRadius: "inherit",
        }}
      />
    </Box>
  );
});
