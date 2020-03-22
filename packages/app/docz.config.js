/* eslint-disable import/no-default-export */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

require("ts-node").register({ compilerOptions: { module: "commonjs" } });

const { theme } = require("./src/ui/theme");

const prism = {
  light: {
    plain: {
      fontFamily: "Inconsolata",
      color: "#393A34",
      backgroundColor: "#f6f8fa",
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata"],
        style: {
          color: "#999988",
          fontStyle: "italic",
        },
      },
      {
        types: ["namespace"],
        style: {
          opacity: 0.7,
        },
      },
      {
        types: ["string", "attr-value"],
        style: {
          color: "#e3116c",
        },
      },
      {
        types: ["punctuation", "operator"],
        style: {
          color: "#393A34",
        },
      },
      {
        types: [
          "entity",
          "url",
          "symbol",
          "number",
          "boolean",
          "variable",
          "constant",
          "property",
          "regex",
          "inserted",
        ],
        style: {
          color: "#36acaa",
        },
      },
      {
        types: ["atrule", "keyword", "attr-name", "selector"],
        style: {
          color: "#00a4db",
        },
      },
      {
        types: ["function", "deleted", "tag"],
        style: {
          color: "#d73a49",
        },
      },
      {
        types: ["function-variable"],
        style: {
          color: "#6f42c1",
        },
      },
      {
        types: ["tag", "selector", "keyword"],
        style: {
          color: "#00009f",
        },
      },
    ],
  },
  dark: {
    plain: {
      fontFamily: "Inconsolata",
      color: "#d6deeb",
      backgroundColor: "#13161F",
    },
    styles: [
      {
        types: ["changed"],
        style: {
          color: "rgb(162, 191, 252)",
          fontStyle: "italic",
        },
      },
      {
        types: ["deleted"],
        style: {
          color: "rgba(239, 83, 80, 0.56)",
          fontStyle: "italic",
        },
      },
      {
        types: ["inserted", "attr-name"],
        style: {
          color: "rgb(173, 219, 103)",
          fontStyle: "italic",
        },
      },
      {
        types: ["comment"],
        style: {
          color: "rgb(99, 119, 119)",
          fontStyle: "italic",
        },
      },
      {
        types: ["string", "url"],
        style: {
          color: "rgb(173, 219, 103)",
        },
      },
      {
        types: ["variable"],
        style: {
          color: "rgb(214, 222, 235)",
        },
      },
      {
        types: ["number"],
        style: {
          color: "rgb(247, 140, 108)",
        },
      },
      {
        types: ["builtin", "char", "constant", "function"],
        style: {
          color: "rgb(130, 170, 255)",
        },
      },
      {
        // This was manually added after the auto-generation
        // so that punctuations are not italicised
        types: ["punctuation"],
        style: {
          color: "rgb(199, 146, 234)",
        },
      },
      {
        types: ["selector", "doctype"],
        style: {
          color: "rgb(199, 146, 234)",
          fontStyle: "italic",
        },
      },
      {
        types: ["class-name"],
        style: {
          color: "rgb(255, 203, 139)",
        },
      },
      {
        types: ["tag", "operator", "keyword"],
        style: {
          color: "rgb(127, 219, 202)",
        },
      },
      {
        types: ["boolean"],
        style: {
          color: "rgb(255, 88, 116)",
        },
      },
      {
        types: ["property"],
        style: {
          color: "rgb(128, 203, 196)",
        },
      },
      {
        types: ["namespace"],
        style: {
          color: "rgb(178, 204, 214)",
        },
      },
    ],
  },
};

const colors = {
  white: "#FFFFFF",
  grayUltraLight: "#FCFBFA",
  grayExtraLight: "#F5F6F7",
  grayLight: "#CED4DE",
  gray: theme.colors.gray[0],
  grayDark: theme.colors.gray[5],
  grayExtraDark: theme.colors.gray[9],
  dark: "#13161F",
  blueLight: "#e9f2fa",
  blue: "#0B5FFF",
  skyBlue: "#1FB6FF",
  negative: "#EB4D4B",
};

const modeLight = {
  ...colors,
  primary: colors.blue,
  text: colors.grayDark,
  muted: colors.gray,
  link: colors.blue,
  background: colors.white,
  border: colors.grayLight,
  sidebar: {
    bg: colors.white,
    navGroup: colors.grayDark,
    navLink: colors.grayDark,
    navLinkActive: colors.blue,
    tocLink: colors.gray,
    tocLinkActive: colors.grayExtraDark,
  },
  header: {
    bg: colors.grayExtraLight,
    text: colors.grayDark,
    border: colors.grayLight,
    button: {
      bg: colors.blue,
      color: colors.white,
    },
  },
  props: {
    bg: colors.grayUltraLight,
    text: colors.grayDark,
    highlight: colors.blue,
    defaultValue: colors.gray,
    descriptionText: colors.grayDark,
    descriptionBg: colors.white,
  },
  playground: {
    bg: colors.white,
    border: colors.grayLight,
  },
  blockquote: {
    bg: colors.grayExtraLight,
    border: colors.grayLight,
    color: colors.gray,
  },
  prism: prism.light,
};

const modeDark = {
  ...colors,
  primary: colors.skyBlue,
  text: colors.grayExtraLight,
  muted: colors.gray,
  link: colors.skyBlue,
  background: colors.grayExtraDark,
  border: colors.grayDark,
  sidebar: {
    bg: colors.grayExtraDark,
    navGroup: colors.gray,
    navLink: colors.grayLight,
    navLinkActive: colors.skyBlue,
    tocLink: colors.gray,
    tocLinkActive: colors.grayLight,
  },
  header: {
    bg: colors.dark,
    text: colors.grayLight,
    border: colors.grayDark,
    button: {
      bg: colors.skyBlue,
      color: colors.white,
    },
  },
  props: {
    bg: colors.dark,
    text: colors.gray,
    highlight: colors.skyBlue,
    defaultValue: colors.grayDark,
    descriptionText: colors.gray,
    descriptionBg: colors.grayExtraDark,
  },
  playground: {
    bg: colors.dark,
    border: colors.grayDark,
  },
  blockquote: {
    bg: colors.grayDark,
    border: colors.gray,
    color: colors.gray,
  },
  prism: prism.dark,
};

module.exports = {
  typescript: true,
  src: "./src",
  files: "**/*.mdx",
  port: 3001,
  themeConfig: {
    ...theme,
    initialColorMode: "light",
    // Show errors above playground editor
    showLiveError: true,
    // Show preview of the code inside playground
    showLivePreview: true,
    // Show editor when a playground is rendered
    showPlaygroundEditor: true,
    // Show dark/light mode switch toggle in header
    showDarkModeSwitch: true,
    // Display edit this page button on every page
    showMarkdownEditButton: true,
    // Wrap the playground editor and preview in iframes to avoid style/script collisions
    useScopingInPlayground: false,
    colors: {
      ...theme.colors,
      ...modeLight,
      dark: {
        ...theme.colors.modes.dark,
        ...modeDark,
      },
    },
  },
};
