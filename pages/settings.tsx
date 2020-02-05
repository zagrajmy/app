import { NextPage } from "next";

import { Fragment } from "react";
import { Page } from "../src/app/components";
import { auth } from "../src/app/auth";
import { Dl } from "../src/ui";
import { MaxWidthContainer } from "../src/app/components/MaxWidthContainer";
import { useAppState } from "../src/app/store";

type SettingsProps = {};

const Settings: NextPage<SettingsProps> = () => {
  const { user } = useAppState();
  return (
    <Page>
      <MaxWidthContainer>
        {user && <Fragment>{Dl.fromObject(user)}</Fragment>}
      </MaxWidthContainer>
    </Page>
  );
};

Settings.getInitialProps = ({ req, res }) => {
  return auth.getUserOrLogIn(req, res);
};

export default Settings;
