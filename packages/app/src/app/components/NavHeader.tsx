import { alpha } from "@theme-ui/color";
import { Link } from "next-next-link";
import React from "react";
import { useTranslation } from "react-i18next";

import { Select, SelectProps } from "../../ui";

import { SUPPORTED_LANGUAGES, SupportedLanguage } from "../../i18n";
import {
  StateFromAppInitialProps,
  useAppState,
  ApplicationState,
} from "../store";
import { HeaderFooterListItem } from "./HeaderFooterListItem";
import { Menu } from "./Menu";
import { NavLink } from "./NavLink";
import { summon } from "../../lib";

/**
 * I think we're gonna use `user.locale` only as language
 * on the frontend and let browser locale take care of
 * number and date formatting.
 */
interface LanguagePickerProps
  extends Omit<SelectProps, "ref" | "onChange" | "value"> {
  user: ApplicationState["zmUser"];
}
const LanguagePicker = ({ user, ...rest }: LanguagePickerProps) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;

    if (!SUPPORTED_LANGUAGES.includes(value as SupportedLanguage)) {
      throw new Error(
        `${value} is not supported language.\n
        Supported languages are ${SUPPORTED_LANGUAGES}`
      );
    }

    // TODO: Optimistic update? Should I just use swr here?
    summon("/api/u/me", {
      method: "PATCH",
      json: {
        locale: value,
      },
    })
      .then(() => {
        // temporary lazy solution
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        // TODO: Rollback application if it failed
        // TODO: Display error toast
      });
  };

  if (!user) {
    return null;
  }

  return (
    <Select
      variant="select-small"
      sx={{
        color: alpha("white", 0.85),
        py: "0.75rem",
        px: 2,
        textAlignLast: "center",
        textTransform: "uppercase",
        fontSize: "0.9em",
        ":hover, :focus": {
          color: "white",
        },
      }}
      value={user?.locale || "en"}
      onChange={handleChange}
      {...rest}
    >
      {SUPPORTED_LANGUAGES.map((l) => (
        <option key={l}>{l}</option>
      ))}
    </Select>
  );
};

export interface NavHeaderProps {
  appState: Pick<StateFromAppInitialProps, "user" | "zmUser">;
}

export const NavHeader = (props: NavHeaderProps) => {
  const { t } = useTranslation();
  const state = useAppState();

  const claims = state.user || props.appState.user;
  const user = state.zmUser || props.appState.zmUser;

  return (
    <header>
      <nav
        sx={{
          bg: "gray.9",
          boxShadow: "inset 0 -1px 0 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        <ul
          sx={{
            height: "68px",
            p: "4px 12px",
            margin: 0,
            display: "flex",
            alignItems: "center",
            listStyle: "none",

            maxWidth: 1120,
            mx: "auto",
          }}
        >
          <HeaderFooterListItem sx={{ flex: 1, textAlign: "left" }}>
            <Link href="/">zagraj.my</Link>
          </HeaderFooterListItem>
          <HeaderFooterListItem>
            <LanguagePicker user={user} />
          </HeaderFooterListItem>
          <HeaderFooterListItem>
            <NavLink href="/meetings">{t("meetings")}</NavLink>
          </HeaderFooterListItem>
          <HeaderFooterListItem>
            {claims ? (
              <Menu claims={claims} />
            ) : (
              <Link
                href="/api/login"
                sx={{
                  display: "block",
                  p: "0.35em 0.15em",
                  cursor: "pointer",
                  "& > div": {
                    border: "1px solid rgba(255, 255, 255, 0.9)",
                    borderRadius: "rounded",
                    padding: "0.4em 0.6em",
                  },
                  "&:hover > div": {
                    bg: "white",
                    color: "gray.9",
                  },
                }}
              >
                <div>Log in</div>
              </Link>
            )}
          </HeaderFooterListItem>
        </ul>
      </nav>
    </header>
  );
};
