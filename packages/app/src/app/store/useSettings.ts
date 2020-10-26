import merge from "deepmerge";
import { useMemo, useRef } from "react";
import { merge as mergeTheme, Theme } from "theme-ui";

import { mergeLocale } from "../../i18n";
import { settings } from "../../types";

import { useAppState } from "./index";

// todo: json schema validator or io-ts
// this function isn't safe at this moment
const parseFestivalSettings = (
  s: unknown
): settings.SphereAndFestivalSettings => {
  if (typeof s === "object" && s) {
    return {
      ...s,
      forms:
        "forms" in s ? (s as settings.SphereAndFestivalSettings).forms : [],
      theme:
        "theme" in s ? (s as settings.SphereAndFestivalSettings).theme : {},
    };
  }
  return {
    forms: [],
    theme: {},
  };
};

const byWaitlist = <T extends { waitlist: string | number }>(xs: T[]) =>
  Object.fromEntries(xs.map((x) => [x.waitlist, x]));

export type MergedSettings = Required<settings.SphereAndFestivalSettings> & {
  sphereName?: string;
};

export function useSettings(
  festival?: { name: string; settings: { theme?: Theme } } | null
): MergedSettings {
  const { sphere } = useAppState();

  // ugly side effect, but I'm not sure how to do it nicer
  // while preserving SSR result
  const festivalName = useRef<string | null | undefined>();
  if (festivalName.current !== festival?.name) {
    const festivalLocale =
      typeof festival?.settings === "object" &&
      festival.settings &&
      // todo: validate me
      (festival.settings as any).locale;
    if (festivalLocale && typeof festivalLocale === "object") {
      mergeLocale(festivalLocale);
    }

    festivalName.current = festival?.name;
  }

  return useMemo((): MergedSettings => {
    const sphereSettings = sphere.settings;
    const festivalSettings = parseFestivalSettings(festival?.settings);

    const forms = merge(
      byWaitlist(sphereSettings.forms || []),
      byWaitlist(festivalSettings.forms || [])
    );

    const theme = mergeTheme(
      sphereSettings.theme,
      festival?.settings.theme || {}
    );

    return {
      sphereName: sphere.name,
      theme,
      forms: Object.values(forms),
      locale: merge(sphereSettings.locale || {}, festivalSettings.locale || {}),
      content: {
        ...sphereSettings.content,
        ...festivalSettings.content,
      },
    };
    // todo: use festival.id? instead of festival?
  }, [festival, sphere]);
}
