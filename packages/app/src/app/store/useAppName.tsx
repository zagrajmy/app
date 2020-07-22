import { useAppState } from ".";

export const useAppName = () => {
  const { sphere } = useAppState();

  return sphere.name || "zagrajmy";
};
