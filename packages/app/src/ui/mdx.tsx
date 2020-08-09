import { htmdx } from "htmdx";
import { jsx, Styled } from "theme-ui";

import { Link } from "../ui/Link";
import { Text } from "../ui/Text";

const components = {
  ...Styled,
  Link,
  Text,
};

export const mdx = (s: string) => htmdx(s, jsx, { components });
