import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const testUtils = {
  useEnglish() {
    const { i18n } = useTranslation();
    useEffect(() => {
      const { language } = i18n;

      i18n.changeLanguage("en");

      return () => {
        i18n.changeLanguage(language);
      };
    }, [i18n]);
  },
};
