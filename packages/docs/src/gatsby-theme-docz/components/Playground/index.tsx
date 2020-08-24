/* eslint-disable import/no-extraneous-dependencies */
import type { ExactTheme } from "@zagrajmy/docs";
import copy from "copy-text-to-clipboard";
import { useConfig } from "docz";
import * as Icons from "gatsby-theme-docz/src/components/Icons";
import { Language } from "prism-react-renderer";
import { Resizable } from "re-resizable";
import * as React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

// import ReactResizeDetector from "react-resize-detector";
import { syntaxStyles } from "../../theme/syntax";
import { usePrismTheme } from "../../utils/theme";
import * as styles from "./styles";

const getResizableProps = (width: string, setWidth: (v: string) => void) => ({
  minWidth: 260,
  maxWidth: "100%",
  size: {
    width,
    height: "auto",
  },
  style: {
    margin: 0,
    marginRight: "auto",
  },
  enable: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  },
  onResizeStop: (
    e: unknown,
    direction: unknown,
    ref: { style: { width: string } }
  ) => {
    setWidth(ref.style.width);
  },
});

const transformCode = (code: string) => {
  if (code.startsWith("()") || code.startsWith("class")) return code;
  return `<React.Fragment>${code}</React.Fragment>`;
};

interface PlaygroundProps {
  code: string;
  scope?: {
    [key: string]: any;
  };
  language: Language;
}
export const Playground = ({ code, scope, language }: PlaygroundProps) => {
  const {
    themeConfig: { showPlaygroundEditor, showLiveError, showLivePreview },
  } = useConfig();
  const [showingCode, setShowingCode] = React.useState(showPlaygroundEditor);

  const prismTheme = usePrismTheme();
  const [scopeOnMount] = React.useState(scope);
  const [width, setWidth] = React.useState("100%");
  const resizableProps = getResizableProps(width, setWidth);

  const copyCode = () => copy(code);

  const toggleCode = () => setShowingCode((s: boolean) => !s);

  return (
    <Resizable
      {...resizableProps}
      data-testid="playground"
      sx={{
        ...syntaxStyles,
        border: (t: any) => `2px solid ${(t as ExactTheme).colors.border}`,
      }}
    >
      <LiveProvider
        code={code}
        scope={scopeOnMount}
        transformCode={transformCode}
        language={language}
        theme={prismTheme}
      >
        <div sx={{ position: "relative" }}>
          <div sx={styles.previewInner(showingCode)}>
            {showLivePreview && (
              <LivePreview sx={styles.preview} data-testid="live-preview" />
            )}
          </div>
          <div sx={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="button" sx={styles.button} onClick={copyCode}>
              <Icons.Clipboard size={12} />
            </button>
            <button type="button" sx={styles.button} onClick={toggleCode}>
              <Icons.Code size={12} />
            </button>
          </div>
        </div>
        {showingCode && (
          <div sx={styles.previewInner(showingCode)}>
            <div sx={styles.editor}>
              <LiveEditor data-testid="live-editor" />
            </div>
          </div>
        )}
        {showLiveError && (
          <LiveError sx={styles.error} data-testid="live-error" />
        )}
      </LiveProvider>
    </Resizable>
  );
};
