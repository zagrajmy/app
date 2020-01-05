import { NextPage } from "next";
import { Heading } from "@theme-ui/components";

import { Fragment } from "react";
import { Page } from "../src/app/components";
import { auth, Claims } from "../src/app/auth";
import { Dl } from "../src/ui";

type ProfileProps = {
  user?: Claims;
};

const Settings: NextPage<ProfileProps> = ({ user }) => {
  return (
    <Page>
      <Heading>Profile</Heading>
      {user && <Fragment>{Dl.fromObject(user)}</Fragment>}
    </Page>
  );
};

Settings.getInitialProps = async ({ req, res }) => {
  if (typeof window === "undefined") {
    const session = await auth.getSession(req!);
    if (!session?.user) {
      res!.writeHead(302, {
        Location: "/api/login"
      });
      res!.end();

      return {};
    }

    return { user: session.user };
  }

  return {};
};

export default Settings;
