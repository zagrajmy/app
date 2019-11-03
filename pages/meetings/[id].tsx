import fetch from "isomorphic-unfetch";

interface InitialProps {
  query: {
    id: number;
  };
}

function Page({ stars, query }: { stars: number; query: any }) {
  return (
    <div>
      Next stars: {stars} {JSON.stringify(query)}
    </div>
  );
}

Page.getInitialProps = async ({
  query,
}: {
  req: Request;
  query: InitialProps["query"];
}): Promise<InitialProps> => {
  // const res = await fetch("https://api.github.com/repos/zeit/next.js");
  // const json = await res.json();
  return { query };
};

export default Page;
