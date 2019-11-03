import fetch from "isomorphic-unfetch";

import { Id, Meeting } from "../../src/types";
import { meetingsApi } from "../../src/api";

type Query = { id: Id };

interface InitialProps {
  meeting?: Meeting;
}

function MeetingDetails({ meeting }: InitialProps) {
  if (!meeting) {
    return "404: Couldn't find meeting.";
  }

  return (
    <article>
      <h1>{meeting.title}</h1>
      <dl>
        <dt>Author</dt>
        <dd>{meeting.author.name}</dd>
        <dt>Date</dt>
        <dd>{meeting.date ? meeting.date.toLocaleString() : "No date"}</dd>
      </dl>
      <p>{meeting.description}</p>
    </article>
  );
}

MeetingDetails.getInitialProps = async ({
  res,
  query,
}: {
  res: Response;
  req: Request;
  query: Query;
}): Promise<InitialProps> => {
  // const res = await fetch("https://api.github.com/repos/zeit/next.js");
  // const json = await res.json();
  const meeting = await meetingsApi.get(query.id);
  return { meeting };
};

export default MeetingDetails;
