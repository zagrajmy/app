import merge from "deepmerge";
import { useMemo } from "react";

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

const byTitle = <T extends { title: string }>(xs: T[]) =>
  Object.fromEntries(xs.map((x) => [x.title, x]));

export function useSettings(festival?: { settings: unknown }) {
  const { sphere } = useAppState();

  // todo: respect sphere's theme

  return useMemo((): MergedSettings => {
    const sphereSettings = sphere.settings;
    const festivalSettings = parseFestivalSettings(festival?.settings);

    const forms = merge(
      byTitle(sphereSettings.forms),
      byTitle(festivalSettings.forms)
    );

    return {
      theme: sphereSettings.theme,
      forms: Object.values(forms),
    };
  }, [festival, sphere]);
}
