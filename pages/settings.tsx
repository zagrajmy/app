import { NextPage } from "next";

import { Fragment } from "react";
import { Page } from "../src/app/components";
import { auth, Claims } from "../src/app/auth";
import { Dl } from "../src/ui";

type ProfileProps = {
  user?: Claims;
};

const Settings: NextPage<ProfileProps> = ({ user }) => {
  return <Page>{user && <Fragment>{Dl.fromObject(user)}</Fragment>}</Page>;
};

Settings.getInitialProps = ({ req, res }) => {
  return auth.getUserOrLogIn(req, res);
};

export default Settings;
