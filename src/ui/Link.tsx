import { useThemeUI } from "theme-ui";
import { Link as BaseLink, LinkProps as BaseLinkProps } from "../lib/Link";

export interface LinkProps extends BaseLinkProps {
  variant?: "button";
}
export const Link = ({ variant, ...rest }: LinkProps) => {
  const { theme } = useThemeUI();
  const variantStyles = variant === "button" ? theme.buttons.primary : {};

  return <BaseLink sx={variantStyles} {...rest} />;
};
