/** @jsx jsx */
/* eslint-disable import/no-extraneous-dependencies */
import { jsx } from "theme-ui";
import React from "react";
import { useConfig } from "docz";
import { LiveProvider, LiveError, LivePreview, LiveEditor } from "react-live";
import { Resizable } from "re-resizable";
import copy from "copy-text-to-clipboard";
import ReactResizeDetector from "react-resize-detector";
import { IframeWrapper } from "gatsby-theme-docz/src/components/Playground/IframeWrapper";
import * as Icons from "gatsby-theme-docz/src/components/Icons";
import { Language } from "prism-react-renderer";

import { usePrismTheme } from "../../utils/theme";
import { syntaxStyles } from "../../theme/syntax";

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
  useScoping?: boolean;
}
export const Playground = ({
  code,
  scope,
  language,
  useScoping = false,
}: PlaygroundProps) => {
  const {
    themeConfig: {
      showPlaygroundEditor,
      showLiveError,
      showLivePreview,
      useScopingInPlayground,
    },
  } = useConfig();
  const [previewHeight, setPreviewHeight] = React.useState<number>();
  const [editorHeight, setEditorHeight] = React.useState<number>();
  const Wrapper = React.useCallback(
    useScoping || useScopingInPlayground
      ? props => <IframeWrapper {...props}>{props.children}</IframeWrapper>
      : props => (
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          <div sx={styles.previewInner(showingCode)}>{props.children}</div>
        ),
    [useScoping]
  ); // Makes sure scope is only given on mount to avoid infinite re-render on hot reloads

  const prismTheme = usePrismTheme();
  const [scopeOnMount] = React.useState(scope);
  const [showingCode, setShowingCode] = React.useState(showPlaygroundEditor);
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
        border: t => `2px solid ${t.colors.border}`,
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
          <Wrapper height={previewHeight}>
            {showLivePreview && (
              <LivePreview sx={styles.preview} data-testid="live-preview" />
            )}
            <ReactResizeDetector
              handleHeight
              onResize={(_: number, height: number) => {
                setPreviewHeight(height);
              }}
            />
          </Wrapper>
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
          <Wrapper height={editorHeight}>
            <div sx={styles.editor}>
              <LiveEditor data-testid="live-editor" />
            </div>
            <ReactResizeDetector
              handleHeight
              onResize={(_: number, height: number) => {
                setEditorHeight(height);
              }}
            />
          </Wrapper>
        )}
        {showLiveError && (
          <LiveError sx={styles.error} data-testid="live-error" />
        )}
      </LiveProvider>
    </Resizable>
  );
};
