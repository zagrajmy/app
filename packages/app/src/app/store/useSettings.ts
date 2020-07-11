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

const byWaitlist = <T extends { waitlist: string | number }>(xs: T[]) =>
  Object.fromEntries(xs.map((x) => [x.waitlist, x]));

type Settings = MergedSettings & { sphereName?: string };

export function useSettings(festival?: { settings: unknown } | null) {
  const { sphere } = useAppState();

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
