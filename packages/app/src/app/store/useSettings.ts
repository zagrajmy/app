import merge from "deepmerge";
import { useMemo, useRef } from "react";

import { mergeLocale } from "../../i18n";
import { settings } from "../../types";
import { useAppState } from "./index";

// todo: json schema validator or io-ts
// this function isn't exactly safe at this moment
const parseFestivalSettings = (s: unknown): settings.FestivalSettings => {
  return {
    forms: typeof s === "object" && s && "forms" in s ? (s as any).forms : [],
  };
};

interface MergedSettings
  extends settings.FestivalSettings,
    settings.SphereSettings {}

const byWaitlist = <T extends { waitlist: string | number }>(xs: T[]) =>
  Object.fromEntries(xs.map((x) => [x.waitlist, x]));

type Settings = MergedSettings & { sphereName?: string };

export function useSettings(
  festival?: { name: string; settings: unknown } | null
) {
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

  return useMemo((): Settings => {
    const sphereSettings = sphere.settings;
    const festivalSettings = parseFestivalSettings(festival?.settings);

    const forms = merge(
      byWaitlist(sphereSettings.forms || []),
      byWaitlist(festivalSettings.forms || [])
    );

    return {
      sphereName: sphere.name,
      theme: sphereSettings.theme,
      forms: Object.values(forms),
    };
  }, [festival, sphere]);
}
