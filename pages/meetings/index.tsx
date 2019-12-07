import { Fragment } from "react";

import { Meeting } from "../../src/app/types";
import { MeetingCard, MeetingCardsList } from "../../src/app/components";
import { meetingsApi } from "../../src/app/api";

interface MeetingsPageProps {
  meetings: Meeting[];
}

const MeetingsPage = ({ meetings }: MeetingsPageProps) => (
  <Fragment>
    <MeetingCardsList>
      {meetings.map(m => (
        <li key={m.id}>
          <MeetingCard meeting={m} />
        </li>
      ))}
    </MeetingCardsList>
  </Fragment>
);

MeetingsPage.getInitialProps = async () => {
  const meetings = await meetingsApi.getAll();
  return { meetings };
};

export default MeetingsPage;
