/**
 * # Plurals:
 *
 * @see https://www.i18next.com/translation-function/plurals#languages-with-multiple-plurals
 * @see https://jsfiddle.net/sm9wgLze
 *
 * pl:
 *  "goat_2": "{{count}} kóz" // 0 kóz, 5 kóz, 9 kóz
 *  "goat_0": "{{count}} koza" // 1 koza
 *  "goat_1": "{{count}} kozy" // 2 kozy
 *
 * en:
 *  "goat": "{{count}} goat" // 1 goat
 *  "goat_plural": "{{count}} goats" // 0 goats, 2 goats
 */

import { format, formatRelative } from "date-fns";
import { enUS, pl } from "date-fns/locale";
import i18n, { ResourceLanguage } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import translationEN from "../public/locales/en.json";
import translationPL from "../public/locales/pl.json";

export type TranslationTexts = typeof translationEN;

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
  defaultNS: "translation",
  ns: "translation",

  interpolation: {
    escapeValue: false,
  },

  // see https://github.com/i18next/react-i18next/issues/923
  ...(process.env.NODE_ENV === "test" && { lng: "en" }),
  // debug: process.env.NODE_ENV !== "production",
});

export { i18n };

export function useLanguage() {
  const [, { language = FALLBACK_LANG }] = useTranslation();
  assertLanguageIsSupported(language);
  return language;
}

export function mergeLocale(
  locales: Record<SupportedLanguage, Partial<TranslationTexts>>
) {
  Object.entries(locales).forEach(([k, v]) => {
    i18n.addResources(k, "translation", v);
  });
}

export const pickLocale = (language: SupportedLanguage) =>
  language === "pl" ? pl : enUS;

export const timeFromNow = (time: Date | string, language: SupportedLanguage) =>
  formatRelative(new Date(time), new Date(), { locale: pickLocale(language) });

export const formatHour = (time: Date | string, language: SupportedLanguage) =>
  format(new Date(time), "hh:mm", { locale: pickLocale(language) });

export const formatDate = (time: Date | string, language: SupportedLanguage) =>
  new Date(time).toLocaleDateString(language);
