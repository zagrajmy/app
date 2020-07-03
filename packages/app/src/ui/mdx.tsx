import { htmdx } from "htmdx";
import { jsx, Styled } from "theme-ui";

export const mdx = (s: string) => htmdx(s, jsx, { components: Styled });
