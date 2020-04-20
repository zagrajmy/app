import { Link } from "next-next-link";
import { useTranslation } from "react-i18next";

import { HeaderFooterListItem } from "./HeaderFooterListItem";

export const AppFooter = () => {
  const { t } = useTranslation();

  return (
    <footer sx={{ bg: "gray.9", mt: "auto" }}>
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
          <Link href="/">{t("page-title")}</Link>
        </HeaderFooterListItem>
        <HeaderFooterListItem>
          <a href="https://github.com/zagrajmy/">GitHub</a>
        </HeaderFooterListItem>
      </ul>
    </footer>
  );
};
