/* eslint-disable @typescript-eslint/no-use-before-define */
// https://on.cypress.io/custom-commands

import "@testing-library/cypress/add-commands";

import { getOrPanic } from "../../src/lib/validationErrorToError";
import { AUTH0_DOMAIN, decodeTestAccount, env } from "../support/util";

type TestAccountName = "UNVERIFIED" | "DEFAULT";

Cypress.Commands.add(
  "login",
  (testAccountName: TestAccountName = "DEFAULT") => {
    const testAccount = getOrPanic(
      decodeTestAccount(env(`TEST_ACCOUNT_${testAccountName}`))
    );

    cy.request({
      method: "POST",
      url: `https://${AUTH0_DOMAIN}/oauth/token`,
      body: {
        grant_type: "password",
        username: testAccount.username,
        password: testAccount.password,
        audience: `https://${AUTH0_DOMAIN}/userinfo`,
        scope: "openid profile email",
        client_id: env("AUTH0_CLIENT_ID"),
        client_secret: env("AUTH0_CLIENT_SECRET"),
      },
    }).then((res) => {
      const { access_token, expires_in, id_token } = res.body;
      const auth0State = "some-random-state";
      const callbackUrl = `/api/login-callback?access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State}`;
      const redirectTo = "/";

      cy.setCookie("zm|redirectTo", redirectTo)
        .setCookie("SameSite", "None")
        .setCookie("a0:state", auth0State)
        .visit(callbackUrl, {});
    });
  }
);

// see more example of adding custom commands to Cypress TS interface
// in https://github.com/cypress-io/add-cypress-custom-command-in-typescript
// add new command to the existing Cypress interface
declare global {
  namespace Cypress {
    interface Chainable {
      login(testAccountName: TestAccountName): Chainable<Response>;
    }
  }
}
