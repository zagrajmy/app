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
      {meeting.image ? (
        <img src={meeting.image} className="image" />
      ) : (
        <button className="image add-image">Add picture</button>
      )}
      <dl>
        <dt>Author</dt>
        <dd>{meeting.author.name}</dd>
        <dt>Date</dt>
        <dd>{meeting.date ? meeting.date.toLocaleString() : "No date"}</dd>
        <dt>Publish Date</dt>
        <dd>{meeting.published_at}</dd>
        <dt>Creation Date</dt>
        <dd>{meeting.created_at}</dd>
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
