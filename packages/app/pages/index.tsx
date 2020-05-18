import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { useTranslation } from "react-i18next";

import { Page } from "../src/app/components";
import { CommonHead } from "../src/app/components/CommonHead";
import { getUrl } from "../src/lib/getUrl";
import { Container } from "../src/ui";

interface SphereHomeProps {
  sphereId: string;
  festivalAgenda: unknown; // TODO

  spheres?: never;
}

function SphereHome({ sphereId, festivalAgenda }: SphereHomeProps) {
  return (
    <Container>
      {JSON.stringify({ sphereId, festivalAgenda }, null, 2)}
    </Container>
  );
}
interface HubHomeProps {
  spheres: string[]; // TODO: Sphere[]
  festivals: string[]; // TODO Festival[]

  sphereId?: never;
}

function HubHome({ spheres, festivals }: HubHomeProps) {
  return (
    <Container>
      {JSON.stringify({ spheres, festivals }, null, 2)}
      {spheres.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </Container>
  );
}

type IndexPageProps = SphereHomeProps | HubHomeProps;

const IndexPage: NextPage<IndexPageProps> = (props) => {
  if (props.sphereId !== undefined) {
    return (
      <Page>
        <CommonHead />
        <SphereHome {...props} />
      </Page>
    );
  }

  return (
    <Page>
      <CommonHead />
      <HubHome {...props} />
    </Page>
  );
};

function isHub(url: string, devSphereId: string) {
  return (
    ["https://zagrajmy.net", "https://zagrajmy.now.sh"].some((x) =>
      url.includes(x)
    ) || ["1", "2"].includes(devSphereId)
  );
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  ctx
) => {
  const devSphereId = String(ctx.query.__dev_sphere_id);
  const url = getUrl(ctx.req);

  if (isHub(url, devSphereId)) {
    return {
      props: {
        festivals: [],
        spheres: [],
      },
    };
  }

  if (devSphereId) {
    // We're in a Sphere. Fetch festival.
    // Ask with sphereId
    return {
      props: {
        sphereId: devSphereId,
        festivalAgenda: {},
      },
    };
  } else {
    // TODO Ask with url.
    return {
      props: {
        sphereId: `todo-sphere-id-for-${url}`,
        festivalAgenda: {},
      },
    };
  }
};

export default IndexPage;
