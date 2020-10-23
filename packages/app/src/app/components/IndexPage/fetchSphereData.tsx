import { order_by } from "../../../../data/graphql-zeus";
import { hasura } from "../../../../data/hasura";
import { head } from "../../../lib/head";

export function fetchSphereData(sphere: { domain: string }) {
  return hasura
    .query({
      nb_sphere: [
        { where: { django_site: { domain: { _eq: sphere.domain } } } },
        {
          festivals: [
            {
              order_by: [{ start_time: order_by.desc_nulls_last }],
              where: { start_proposal: { _lte: "now" } },
              limit: 1,
            },
            {
              name: true,
              start_time: true, // for display only
              start_publication: true, // we show the agenda after this time
              start_proposal: true, // show forms after this
              end_proposal: true,
              end_time: true, // stop showing forms after this
              settings: [{}, true],
              slug: true,
              wait_lists: [{}, { id: true, name: true }],
              rooms: [
                {},
                {
                  name: true,
                  agenda_items: [
                    {
                      order_by: [{ meeting: { start_time: order_by.asc } }],
                      where: {
                        meeting_confirmed: { _eq: true },
                        meeting: { publication_time: { _lte: "now" } },
                      },
                    },
                    {
                      meeting: {
                        id: true,
                        slug: true,
                        name: true,
                        description: true,
                        start_time: true,
                        end_time: true,
                        organizer: {
                          username: true,
                        },
                        proposal: {
                          speaker_name: true,
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
    .then((res) => head(res.nb_sphere));
}
