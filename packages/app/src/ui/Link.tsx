import { Link as BaseLink, LinkProps as BaseLinkProps } from "next-next-link";
import { Theme, useTheme } from "./theme";

export interface LinkProps extends BaseLinkProps {
  variant?: "button" | keyof Theme["links"];
}
export const Link = ({ variant, ...rest }: LinkProps) => {
  const { theme } = useTheme();
  const variantStyles =
    variant === undefined
      ? {}
      : variant === "button"
      ? theme.buttons.primary
      : theme.links[variant];

  return <BaseLink sx={variantStyles} {...rest} />;
};
