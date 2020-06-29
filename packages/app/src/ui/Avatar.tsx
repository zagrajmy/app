import { forwardRef, Ref } from "react";
import {
  Avatar as ThemeUIAvatar,
  AvatarProps as ThemeUIAvatarProps,
  Box,
} from "theme-ui";

export interface AvatarProps extends Omit<ThemeUIAvatarProps, "ref"> {}

export const Avatar = forwardRef(function Avatar(
  { className, ...rest }: AvatarProps,
  ref: Ref<HTMLElement>
) {
  return (
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: "round",
        overflow: "hidden",
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
        {...rest}
      />
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
