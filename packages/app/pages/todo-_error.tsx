import { NextPage, NextPageContext } from "next";

interface ErrorProps {
  err: NextPageContext["err"];
}

const Error: NextPage<ErrorProps> = ({ err }) => {
  return (
    <article>
      <h1>Oops, something went wrong!</h1>
      {err && <pre>{JSON.stringify(err, null, 2)}</pre>}
    </article>
  );
};

Error.getInitialProps = ({ res, err }) => {
  return { res, err };
};

export default Error;
