import { useTranslation } from "react-i18next";

import { useAppState } from ".";

export const useAppName = () => {
  const { t } = useTranslation();
  const { sphere } = useAppState();

  return sphere.name || "zagrajmy";
};
