import { ThemeUICSSProperties } from "theme-ui";

export type SpacerProps = Pick<ThemeUICSSProperties, "width" | "height">;
export const Spacer = (props: SpacerProps) => <div sx={props} />;
