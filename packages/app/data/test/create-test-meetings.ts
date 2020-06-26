/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

import { addHours, addWeeks, subWeeks } from "date-fns";
import { config } from "dotenv";
import { sequenceT } from "fp-ts/lib/Apply";
import { head, range } from "fp-ts/lib/Array";
import * as E from "fp-ts/lib/Either";
import { flow } from "fp-ts/lib/function";
import { pipe } from "fp-ts/lib/pipeable";
import * as TE from "fp-ts/lib/TaskEither";

import { failure } from "../../src/lib/failure";
import { randomElement } from "../../src/lib/randomElement";
import {
  nb_meeting_constraint,
  nb_meeting_update_column,
} from "../graphql-zeus";

config();

const ENV = "localhost";

import("../hasura")
  .then(({ hasura }) => {
    const { query, mutation } = hasura(ENV);
    const getUsers = TE.tryCatch(
      () =>
        query({
          cr_user: [
            {
              where: {
                email: { _like: "zagrajmy.net+test-admiral.%@gmail.com" },
              },
            },
            { uuid: true, username: true },
          ],
        }).then((res) => res.cr_user),
      failure("failed to fetch admirals")
    );

    const getTestGuildId = pipe(
      TE.tryCatch(
        () =>
          query({
            nb_guild: [
              {
                where: { name: { _eq: "Star Wars Admirals Play Battleship" } },
              },
              { id: true },
            ],
          }).then((res) => res.nb_guild),
        failure("failed to fetch id")
      ),
      TE.map(head),
      TE.chain(TE.fromOption(failure("test sphere not found"))),
      TE.map((guild) => guild.id)
    );

    // TODO: Add participants while creating meetings.
    const insertMeetings = (users: { uuid: string }[], testGuildId: number) =>
      mutation({
        insert_nb_meeting: [
          {
            objects: range(-50, 100).map((i) => {
              const date = subWeeks(new Date(), i);
              const startTime = addWeeks(date, 1);
              const endTime = addHours(startTime, 3);

              return {
                id: 50 + i,
                title: `Star Destroyer ${i}: Battleship Game`,
                description:
                  "Just a group of Star Wars admirals playing battleship.\nMeeting generated for tests.",
                guild_id: testGuildId,
                sphere_id: 2, // (zagrajmy.now.sh) TODO
                created_at: date.toISOString(),
                start_time: startTime.toISOString(),
                end_time: endTime.toISOString(),
                publication_time: date.toISOString(),
                organizer_id: randomElement(users).uuid,
              };
            }),
            on_conflict: {
              constraint: nb_meeting_constraint.nb_meeting_pkey,
              update_columns: Object.values(nb_meeting_update_column),
            },
          },
          {
            affected_rows: true,
            returning: { id: true },
          },
        ],
      });

    const all = sequenceT(TE.taskEither);

    return pipe(
      all(getUsers, getTestGuildId),
      TE.chain(([users, testGuildId]) => {
        return TE.tryCatch(
          () => insertMeetings(users, testGuildId),
          (err) => (err instanceof Error ? err : new Error(JSON.stringify(err)))
        );
      })
    )();
  })
  .then(
    flow(
      E.fold(console.error, (result) => {
        console.log(result.insert_nb_meeting);
      })
    )
  );
