import { Fragment } from "react";

import { Meeting } from "../../src/types";
import { MeetingCard } from "../../src/components";

interface MeetingsPageProps {
  meetings: Meeting[];
}

const MeetingsPage = ({ meetings }: MeetingsPageProps) => (
  <Fragment>{meetings.map(m => JSON.stringify(m))}</Fragment>
);

MeetingsPage.getInitialProps = async () => {
  return { meetings: [] };
};

export default MeetingsPage;
