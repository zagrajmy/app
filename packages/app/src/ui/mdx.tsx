import { htmdx } from "htmdx";
import { jsx, Styled } from "theme-ui";

import { Link } from "../ui/Link";

const components = {
  ...Styled,
  Link,
};

export const mdx = (s: string) => htmdx(s, jsx, { components });
