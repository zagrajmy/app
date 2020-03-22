import { NextPage } from "next";
import { Heading } from "theme-ui";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import { assert } from "ts-essentials";

import { Page } from "../src/app/components";
import { auth, Claims } from "../src/app/auth";
import { Dl } from "../src/ui";
import { MaxWidthContainer } from "../src/app/components/MaxWidthContainer";
import { useAppState } from "../src/app/store";
import { HttpError } from "../src/lib/HttpError";

type WeResponseJson = import("./api/u/me").MeResponseJson;

type SettingsProps = {
  user: null | Claims;
};

const Settings: NextPage<SettingsProps> = () => {
  const { user: sessionUsere } = useAppState();
  const sameEmailUsers = useSWR("/api/u/me", url =>
    fetch(url).then(res => {
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
    sessionUsere,
    "if user session is not present, we should have been redirected"
  );

  return (
    <Page>
      <MaxWidthContainer sx={{ py: 4 }}>
        <p>
          Disclaimer: We show too much data and this page will certainly change
          in the future. In the meanwhile, it's useful for debugging.
        </p>
        <p>We might leave this as a "development view" of settings.</p>
        <section>
          <Heading as="h3">Your Session Data</Heading>
          <Dl.FromObject value={sessionUsere} />
        </section>
        {sameEmailUsers.data && (
          <section>
            <Heading as="h3">Your Accounts</Heading>
            {sameEmailUsers.data.users.map(user => (
              <Dl.FromObject value={user} key={user.user_id} />
            ))}
          </section>
        )}
      </MaxWidthContainer>
    </Page>
  );
};

Settings.getInitialProps = ({ req, res }): Promise<SettingsProps> => {
  return auth.getSessionOrLogIn(req, res);
};

export default Settings;
