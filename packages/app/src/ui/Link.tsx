import { Link as BaseLink, LinkProps as BaseLinkProps } from "next-next-link";
import { useRouter } from "next/router";
import type { UrlObject } from "url";

import { ExactTheme, useTheme } from "./theme";

// This is specific to the app, but it's not worth to keep this `Link`
// clean and reusable yet.
export const DEV_SPHERE_DOMAIN_PARAM_NAME = `__dev_sphere_domain`;

function usePersistedQueryParameter(
  currentUrl: string | UrlObject,
  key: string
): string | UrlObject {
  const { query } = useRouter();

  const value = query[key];
  if (value) {
    if (Array.isArray(value)) {
      console.error(`multiple ${key} query parameters are not supported`);
      return currentUrl;
    }

    if (typeof currentUrl === "string") {
      const queryParamsStart = currentUrl.indexOf("?");
      let path: string;
      let search: string;
      if (queryParamsStart === -1) {
        path = currentUrl;
        search = "";
      } else {
        path = currentUrl.slice(0, queryParamsStart);
        search = currentUrl.slice(queryParamsStart + 1);
      }

      const searchParams = new URLSearchParams(search);
      searchParams.append(DEV_SPHERE_DOMAIN_PARAM_NAME, value);

      return `${path}?${searchParams.toString()}`;
    } else {
      const url = { ...currentUrl };
      const searchParams = new URLSearchParams(url.search || "");
      searchParams.append(DEV_SPHERE_DOMAIN_PARAM_NAME, value);
      url.search = searchParams.toString();

      return url;
    }
  }

  return currentUrl;
}

export interface LinkProps extends BaseLinkProps {
  variant?: "button" | "buttons.secondary" | keyof ExactTheme["links"];
}
export const Link = ({ variant, sx, ...rest }: LinkProps) => {
  // links can use variants from `theme.links`, "button" and "buttons.secondary"
  const { theme } = useTheme();

  const variantStyles =
    variant === undefined
      ? {}
      : variant === "button"
      ? theme.buttons.primary
      : variant === "buttons.secondary"
      ? theme.buttons.secondary
      : theme.links[variant];
  const styles = sx
    ? {
        ...variantStyles,
        ...sx,
      }
    : variantStyles;

  // if query params contain DEV_SPHERE_DOMAIN_PARAM_NAME, we pass it further
  const newUrl = usePersistedQueryParameter(
    rest.as ? rest.as : rest.href,
    DEV_SPHERE_DOMAIN_PARAM_NAME
  );

  // external URLs are mapped to `a` instead of Next `Link`
  if (
    typeof rest.href === "string" &&
    rest.href.match(/^(https?:|\/\/|#|mailto:|javascript:)/)
  ) {
    return <a sx={styles} {...rest} href={rest.href as string} />;
  }

  /* eslint-disable no-param-reassign */
  if (rest.as) {
    rest.as = newUrl;
  } else {
    rest.href = newUrl;
  }

  return <BaseLink sx={styles} {...rest} />;
};
