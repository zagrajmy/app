import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { useTranslation } from "react-i18next";

import { Page } from "../src/app/components";
import { CommonHead } from "../src/app/components/CommonHead";
import { getUrl } from "../src/lib/getUrl";
import { Container } from "../src/ui";
import { hasura } from "../data";

interface SphereNotFoundProps {
  error: "sphere-not-found";
}

interface SphereHomeProps {
  sphereId: string;
  festivalAgenda: unknown; // TODO

  error?: never;
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

  error?: never;
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

type IndexPageProps = SphereHomeProps | HubHomeProps | SphereNotFoundProps;

const IndexPage: NextPage<IndexPageProps> = (props) => {
  return (
    <Page>
      <CommonHead />
      {props.error ? (
        props.error
      ) : props.sphereId !== undefined ? (
        <SphereHome {...props} />
      ) : (
        <HubHome {...props} />
      )}
    </Page>
  );
};

const DEV_SPHERES = [
  { id: 1, domain: "zagrajmy.net" },
  { id: 2, domain: "zagrajmy.now.sh" },
];

function isHub(url: string, devSphereId: string) {
  return (
    DEV_SPHERES.find(
      (sphere) =>
        url.includes(`https://${sphere.domain}`) ||
        Number(devSphereId) === sphere.id
    ) !== undefined
  );
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  ctx
) => {
  const devSphereId = ctx.query.__dev_sphere_id;
  const url = getUrl(ctx.req);

  if (isHub(url, String(devSphereId))) {
    const props: HubHomeProps = {
      festivals: [],
      spheres: [],
    };

    return {
      props,
    };
  }

  if (devSphereId) {
    // TODO: We're in a Sphere. Fetch festival.
    // TODO: Ask with sphereId
    const props: SphereHomeProps = {
      sphereId: String(devSphereId),
      festivalAgenda: [],
    };

    return {
      props,
    };
  }

  const domain = ctx.query.__dev_sphere_domain
    ? String(ctx.query.__dev_sphere_domain)
    : new URL(url).hostname;

  hasura.fromCookies(ctx.req).query({ 
     
  })

  if (domain) {
    // TODO Ask with url.
    return {
      props: {
        sphereId: `todo-sphere-id-for-${domain}`,
        festivalAgenda: [],
      },
    };
  }

  return {
    props: {
      error: "sphere-not-found",
    },
  };
};

export default IndexPage;
