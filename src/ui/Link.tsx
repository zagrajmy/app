import { Link as BaseLink, LinkProps as BaseLinkProps } from "../lib/Link";
import { useTheme } from "./theme";

export interface LinkProps extends BaseLinkProps {
  variant?: "button";
}
export const Link = ({ variant, ...rest }: LinkProps) => {
  const { theme } = useTheme();
  const variantStyles = variant === "button" ? theme.buttons.primary : {};

  return <BaseLink sx={variantStyles} {...rest} />;
};
