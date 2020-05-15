import { NextPage } from "next";
import useSWR from "swr";
import { Container, Heading } from "theme-ui";
import { assert } from "ts-essentials";

import { Dl, summon } from "../src";
import { auth } from "../src/app/auth";
import { Page } from "../src/app/components";
import { withUser } from "../src/app/withUser";

type MeResponseJson = import("./api/u/me").GetMeResponseJson;

type SettingsProps = {};

const Settings: NextPage<SettingsProps> = withUser(function Settings({ user }) {
  const sameEmailUsers = useSWR<MeResponseJson, Error>(`/api/u/me`, summon);

  if (sameEmailUsers.error) {
    // TODO: handle 403: don't show anything
    console.error(sameEmailUsers.error);
  }

  assert(
    user,
    "if user session is not present, we should have been redirected"
  );

  return (
    <Page>
      <Container py={4}>
        <p>
          Disclaimer: We show too much data and this page will certainly change
          in the future. In the meanwhile, it's useful for debugging.
        </p>
        <p>We might leave this as a "development view" of settings.</p>
        <section>
          <Heading as="h3">Your Session Data</Heading>
          <Dl.FromObject value={user} />
        </section>
        {sameEmailUsers.data && (
          <section>
            <Heading as="h3">Your Accounts</Heading>
            {sameEmailUsers.data.users.map(u => (
              <Dl.FromObject value={u} key={u.user_id} />
            ))}
          </section>
        )}
      </Container>
    </Page>
  );
});

Settings.getInitialProps = async ({ req, res }): Promise<SettingsProps> => {
  auth.getSessionOrLogIn(req, res);
  return {};
};

export default Settings;
