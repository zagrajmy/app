import { fold, map } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";
import * as t from "io-ts";
import { NextApiRequest, NextApiResponse } from "next";
import { UnreachableCaseError } from "ts-essentials";

import * as g from "../../../data/graphql-zeus";
import { Db, hasura } from "../../../data/hasura";
import { formatValidationErrors, PromiseType } from "../../../src";
import { auth } from "../../../src/app/auth";

const MeetingInput = t.intersection([
  t.type({
    name: t.string,
    sphere_id: t.number,
  }),
  t.partial({
    guild_id: t.number,
    description: t.string,
    start_time: t.string,
    end_time: t.string,
  }),
]);

const InsertMeetingBody = t.exact(
  t.type({
    meeting: MeetingInput,
    command: t.union([t.literal("save-draft"), t.literal("publish")]),
  })
);

export type InsertMeetingBody = t.TypeOf<typeof InsertMeetingBody>;

const addPublicationTime = ({ command, meeting }: InsertMeetingBody) => {
  let publicationTime: string | undefined;
  switch (command) {
    case "publish":
      publicationTime = new Date().toISOString();
      break;
    case "save-draft":
      break;
    default:
      throw new UnreachableCaseError(command);
  }

  return {
    command,
    meeting: {
      ...meeting,
      publication_time: publicationTime,
    },
  };
};

const runMutation = (
  mutation: Db["mutation"],
  meeting: InsertMeetingBody["meeting"] & { publication_time?: string },
  organizer_id: string
) => {
  return mutation({
    insert_nb_meeting_one: [
      {
        object: {
          ...meeting,
          organizer_id,
        },
        on_conflict: {
          constraint: g.nb_meeting_constraint.nb_meeting_pkey,
          update_columns: Object.values(g.nb_meeting_update_column),
        },
      },
      { id: true },
    ],
  });
};

export default auth.requireAuthentication(async function insertMeeting(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, mutation } = hasura.fromCookies(req);

  return pipe(
    InsertMeetingBody.decode(JSON.parse(req.body)),
    map(addPublicationTime),
    fold(
      (errors) =>
        res.status(400).send({ errors: formatValidationErrors(errors) }),
      ({ command: _, meeting }) => {
        return auth
          .getSession(req)
          .then((session) =>
            query({
              cr_user: [
                { where: { auth0_id: { _eq: session!.user.sub } } },
                { uuid: true },
              ],
            }).then((x) => x.cr_user[0]?.uuid as string | undefined)
          )
          .then((organizer_id) => {
            if (!organizer_id) {
              res.status(404).send({ message: "user not found" });
            } else {
              runMutation(mutation, meeting, organizer_id).then((data) =>
                res.status(200).send(data)
              );
            }
          })
          .catch((reason) => res.status(500).send(reason));
      }
    )
  );
});

export type InsertMeetingResultJson = PromiseType<
  ReturnType<typeof runMutation>
>;
