import NextJsProgressBar from "nextjs-progressbar";
import React from "react";

import { useTheme } from "../../ui/theme";

const progressBarOptions = { showSpinner: false };

export const ProgressBar = () => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <NextJsProgressBar color={colors.primary} options={progressBarOptions} />
  );
};

// for dynamic import
// eslint-disable-next-line import/no-default-export
export default ProgressBar;
