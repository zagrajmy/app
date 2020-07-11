import { Link as BaseLink, LinkProps as BaseLinkProps } from "next-next-link";
import { useRouter } from "next/router";
import type { UrlObject } from "url";

import { ExactTheme, useTheme } from "./theme";

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
      searchParams.append("__dev_sphere_domain", value);

      return `${path}?${searchParams.toString()}`;
    } else {
      const url = { ...currentUrl };
      const searchParams = new URLSearchParams(url.search || "");
      searchParams.append("__dev_sphere_domain", value);
      url.search = searchParams.toString();

      return url;
    }
  }

  return currentUrl;
}

export interface LinkProps extends BaseLinkProps {
  variant?: "button" | "buttons.secondary" | keyof ExactTheme["links"];
}
export const Link = ({ variant, ...rest }: LinkProps) => {
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

  // if query params contain `__dev_sphere_domain`, we pass it further
  const newUrl = usePersistedQueryParameter(
    rest.as ? rest.as : rest.href,
    "__dev_sphere_domain"
  );
  /* eslint-disable no-param-reassign */
  if (rest.as) {
    rest.as = newUrl;
  } else {
    rest.href = newUrl;
  }

  return <BaseLink sx={variantStyles} {...rest} />;
};
