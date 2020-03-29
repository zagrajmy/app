import { SystemCssProperties } from "theme-ui";

export interface SpacerProps
  extends Pick<SystemCssProperties, "width" | "height"> {}
export const Spacer = (props: SpacerProps) => <div sx={props} />;
