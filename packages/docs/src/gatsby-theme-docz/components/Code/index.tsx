/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { ComponentProps } from "react";
import { Styled } from "theme-ui";

import { syntaxStyles } from "../../theme/syntax";
import { usePrismTheme } from "../../utils/theme";

interface CodeProps
  extends Omit<
    ComponentProps<typeof Highlight>,
    "code" | "langugage" | "theme" | "children"
  > {
  children: string;
  className?: string;
}

export const Code = ({ children, className: outerClassName }: CodeProps) => {
  const [language] = outerClassName
    ? outerClassName.replace(/language-/, "").split(" ")
    : ["text"];
  const theme = usePrismTheme();

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language as Language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Styled.pre
          className={`${outerClassName || ""} ${className}`}
          style={{ ...style, overflowX: "auto" }}
          data-testid="code"
          sx={syntaxStyles}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({
                line,
                key: i,
              })}
            >
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({
                    token,
                    key,
                  })}
                  sx={{
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
          ))}
        </Styled.pre>
      )}
    </Highlight>
  );
};
