import { Link } from "next-next-link";

import { useAppName } from "../store/useAppName";
import { HeaderFooterListItem } from "./HeaderFooterListItem";

export const AppFooter = () => {
  const appName = useAppName();

  return (
    <footer sx={{ bg: "gray.8", mt: "auto" }}>
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
