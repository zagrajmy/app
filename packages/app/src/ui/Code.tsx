import * as React from "react";
import { Styled } from "theme-ui";

export type CodeProps = React.ComponentProps<"code">;
export const Code: React.ComponentType<CodeProps> = Styled.code;
