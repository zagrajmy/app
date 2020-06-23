import { ThemeUICSSProperties } from "theme-ui";

export interface SpacerProps
  extends Pick<ThemeUICSSProperties, "width" | "height"> {}
export const Spacer = (props: SpacerProps) => <div sx={props} />;
