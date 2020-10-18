import { Link, LinkProps } from "./Link";

// styled in ui/theme
export { Card } from "theme-ui";

export interface CardBackgroundLinkProps extends LinkProps {}
/**
 * onClicks on divs are evil, and what's worse, they require javascript
 * put this inside of Card to make it clickable
 */
export const CardBackgroundLink = (props: CardBackgroundLinkProps) => (
  <Link
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      cursor: "pointer",
    }}
    {...props}
  />
);
