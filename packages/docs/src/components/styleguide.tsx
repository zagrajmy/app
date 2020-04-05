/* eslint-disable import/no-extraneous-dependencies */
import { version as __EMOTION_VERSION__ } from "@emotion/core/package.json";
import { Context as ThemeContext } from "@theme-ui/core";
import {
  ColorPalette,
  FontFamily,
  HeadingStyle,
  TypeScale,
  TypeStyle,
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore // TODO
} from "@theme-ui/style-guide";
import { theme } from "@zagrajmy/app";
import { Code } from "gatsby-theme-docz/src/components/Code";
import { Heading } from "theme-ui";

const ActualThemeProvider: React.FC = ({ children }) => (
  <ThemeContext.Provider value={{ __EMOTION_VERSION__, theme }}>
    {children}
  </ThemeContext.Provider>
);

export const Colors = () => (
  <ActualThemeProvider>
    <ColorPalette omit={["modes"]} />
  </ActualThemeProvider>
);

export const Typography = () => (
  <ActualThemeProvider>
    <Heading as="h3" sx={{ fontSize: 4, my: 3 }}>
      Body
    </Heading>
    <TypeStyle fontSize={5}>
      <FontFamily name="body" />
    </TypeStyle>
    <Heading as="h3" sx={{ fontSize: 4, my: 3 }}>
      Heading
    </Heading>
    <HeadingStyle
      fontFamily="heading"
      fontWeight="heading"
      lineHeight="heading"
      fontSize={5}
      sx={{ my: 4 }}
    >
      <FontFamily name="heading" />
    </HeadingStyle>
    <Heading as="h3" sx={{ fontSize: 4, my: 3 }}>
      Type Scale
    </Heading>
    <TypeScale />
  </ActualThemeProvider>
);

export const ThemeRawJson = () => (
  <ActualThemeProvider>
    <Code className="language-json">{JSON.stringify(theme, null, 2)}</Code>
  </ActualThemeProvider>
);
