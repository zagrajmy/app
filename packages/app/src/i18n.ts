import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../public/locales/en.json";
import translationPL from "../public/locales/pl.json";

// Polish and English will always be bundled
// Additional languages / customizations
// can be held in localstorage
// if missing, we'll fetch them during SSR
// @see https://react.i18next.com/latest/ssr
const resources = {
  pl: {
    translation: translationPL,
  },
  en: {
    translation: translationEN,
  },
};

export const SUPPORTED_LANGUAGES = Object.keys(resources);
export const FALLBACK_LANG = "en";

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: FALLBACK_LANG,

  keySeparator: false,

  // debug: process.env.NODE_ENV !== "production",

  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
