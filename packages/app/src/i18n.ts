import i18n, { ResourceLanguage } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import translationEN from "../public/locales/en.json";
import translationPL from "../public/locales/pl.json";

export const SUPPORTED_LANGUAGES = ["pl", "en"] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];
export const FALLBACK_LANG: SupportedLanguage = "en";
export const isSupportedLanguage = (x: unknown): x is SupportedLanguage =>
  SUPPORTED_LANGUAGES.includes(x as SupportedLanguage);
export function assertLanguageIsSupported(
  x: unknown
): asserts x is SupportedLanguage {
  if (!isSupportedLanguage(x)) {
    throw new Error(
      `${x} is not supported language.\n
      Supported languages are ${SUPPORTED_LANGUAGES}`
    );
  }
}

// Polish and English will always be bundled
// Additional languages / customizations
// can be held in localstorage
// if missing, we'll fetch them during SSR
// @see https://react.i18next.com/latest/ssr
const resources: Record<SupportedLanguage, ResourceLanguage> = {
  pl: {
    translation: translationPL,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: FALLBACK_LANG,

  partialBundledLanguages: true,
  keySeparator: false,

  // debug: process.env.NODE_ENV !== "production",

  interpolation: {
    escapeValue: false,
  },
});

export { i18n };

export function useLanguage() {
  const [, { language = FALLBACK_LANG }] = useTranslation();
  assertLanguageIsSupported(language);
  return language;
}
