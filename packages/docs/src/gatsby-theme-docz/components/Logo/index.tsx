/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link, useConfig } from "docz";

export const Logo = () => {
  const config = useConfig();
  return (
    <Flex
      data-testid="logo"
      sx={{
        alignItems: "center",
        letterSpacing: "-0.02em",
        fontWeight: 600,
        fontSize: 4,
      }}
    >
      <Link
        to="/"
        sx={{
          fontWeight: 600,
          color: "header.text",
          textDecoration: "none",
        }}
      >
        {config.title}
      </Link>
    </Flex>
  );
};
