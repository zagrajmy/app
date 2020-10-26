import React, { ComponentPropsWithoutRef } from "react";
import { useTranslation } from "react-i18next";

import { Center } from "../../Center";
import { mdx } from "../../mdx";

import { MacbookGuy } from "./ItWasntSupposedToHappen";
import { MessageScreen } from "./MessageScreen";

interface BrbDownForMaintenanceProps extends ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}
export const BrbDownForMaintenance = ({
  children,
  ...rest
}: BrbDownForMaintenanceProps) => {
  const { t } = useTranslation();

  return (
    <MessageScreen
      picture={MacbookGuy}
      heading={t("brb-down-for-maintenance")}
      {...rest}
    >
      {mdx(t("brb-down-for-maintenance-error-message"))}
      {children && <Center sx={{ pt: 4 }}>{children}</Center>}
    </MessageScreen>
  );
};
