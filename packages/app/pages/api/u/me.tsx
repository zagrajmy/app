import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";
import * as TE from "fp-ts/lib/TaskEither";
import * as t from "io-ts";
import { NextApiRequest, NextApiResponse } from "next";

import { hasura } from "../../../data";
import { asMutable, formatValidationErrors, makeError } from "../../../src";
import { auth, Claims, User } from "../../../src/app/auth";
import { SUPPORTED_LANGUAGES } from "../../../src/i18n";
import { ReqHandler } from "../../../src/lib/ReqHandler";

type SupportedLanguage = import("../../../src/i18n").SupportedLanguage;

export type GetMeResponseJson = { users: User[] };

/**
 * Returns users from Auth0 Management API with matching email
 * for the user in current session if his email is verified.
 */
const getLoggedInUserData: ReqHandler<[Claims], GetMeResponseJson> = (user) => {
  if (!user.email_verified) {
    return ReqHandler.left(401, "email not verified");
  }

  return TE.tryCatch(
    () =>
      auth.management.getUsersByEmail(user.email).then((users) => ({ users })),
    ReqHandler.Err(500)
  );
};

export type PatchMeResponseJson = {
  uuid?: string;
  locale?: string;
};

const PatchMeRequestBody = t.partial({
  locale: t.union(asMutable(SUPPORTED_LANGUAGES.map((l) => t.literal(l)))),
});

const patchLoggedInUser: ReqHandler<
  [NextApiRequest, Claims, SupportedLanguage],
  PatchMeResponseJson
> = (req, user, locale) => {
  return TE.tryCatch(
    () => {
      return hasura
        .fromCookies(req)
        .mutation({
          update_cr_user: [
            {
              where: { email: { _eq: user.email } },
              _set: { locale },
            },
            { returning: { uuid: true, locale: true } },
          ],
        })
        .then((res) => res.update_cr_user?.returning[0] || {});
    },
    (reason) => {
      console.error({ reason });
      return ReqHandler.Err(500, "failed to update user");
    }
  );
};

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await auth.getSession(req);

    if (!session) {
      return res.status(401).end();
    }

    switch (req.method) {
      case "GET":
        res.setHeader("Cache-Control", "no-store");
        return ReqHandler.respond(getLoggedInUserData(session.user), res);
      case "PATCH":
        return ReqHandler.respond(
          pipe(
            req.body,
            PatchMeRequestBody.decode,
            E.mapLeft<t.Errors, ReqHandler.Err>((validationErrors) => ({
              status: 400,
              error: makeError(formatValidationErrors(validationErrors)),
            })),
            TE.fromEither,
            TE.chain(({ locale }) => {
              if (locale) {
                return patchLoggedInUser(req, session.user, locale);
              }
              console.log("no update needed");
              return TE.right({ locale });
            })
          ),
          res
        );
      default:
        return ReqHandler.respond(
          ReqHandler.left(500, "method not handled"),
          res
        );
    }
  } catch (error) {
    console.error(error);
    // getSession can throw?
    return ReqHandler.respond(
      TE.left(ReqHandler.Err(error.status || 500)(error.message)),
      res
    );
  }
}
