import { NextPage } from "next";
import useSWR from "swr";
import { Heading, Container } from "theme-ui";
import { assert } from "ts-essentials";

import { auth } from "../src/app/auth";
import { HttpError } from "../src/lib/HttpError";
import { summon, Dl } from "../src";
import { withUser } from "../src/app/withUser";
import { Page } from "../src/app/components";

type WeResponseJson = import("./api/u/me").GetMeResponseJson;

type SettingsProps = {};

const Settings: NextPage<SettingsProps> = withUser(({ user }) => {
  const sameEmailUsers = useSWR("/api/u/me", (url) =>
    summon(url).then((res) => {
      if (res.ok) {
        // TODO: consider io-ts or typescript-is?
        return res.json() as Promise<WeResponseJson>;
      }
      throw new HttpError(res);
    })
  );

  if (sameEmailUsers.error) {
    // TODO: handle 403: don't show anything
    console.error(sameEmailUsers);
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
            {sameEmailUsers.data.users.map((u) => (
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
