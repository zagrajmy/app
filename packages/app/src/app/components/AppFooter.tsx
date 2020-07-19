import { Link } from "next-next-link";
import { useTranslation } from "react-i18next";

import { useAppState } from "../store";
import { HeaderFooterListItem } from "./HeaderFooterListItem";

export const AppFooter = () => {
  const { t } = useTranslation();
  const { sphere } = useAppState();

  const appName = t("page-title") || sphere.name;

  return (
    <footer sx={{ bg: "gray.9", mt: "auto" }}>
      <ul
        sx={{
          height: "68px",
          px: 2,
          margin: 0,
          display: "flex",
          alignItems: "center",
          listStyle: "none",

          maxWidth: 1120,
          mx: "auto",
        }}
      >
        <HeaderFooterListItem sx={{ flex: 1, textAlign: "left" }}>
          <Link href="/">{appName}</Link>
        </HeaderFooterListItem>
        {/* <HeaderFooterListItem>
          <a href="https://github.com/zagrajmy/">GitHub</a>
        </HeaderFooterListItem> */}
      </ul>
    </footer>
  );
};
