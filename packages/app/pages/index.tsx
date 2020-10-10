import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

// import { zagrajmyRestApi } from "../src/app/api-helpers/zagrajmyRestApi";
import { CommonHead } from "../src/app/components/CommonHead";
import { fetchSphereData } from "../src/app/components/IndexPage/fetchSphereData";
import type { HubHomeProps } from "../src/app/components/IndexPage/HubHome";
import type { IndexErrorPageProps } from "../src/app/components/IndexPage/IndexErrorPage";
import type { SphereHomeProps } from "../src/app/components/IndexPage/SphereHome";
import { Page } from "../src/app/components/Page";
import { detectSphere } from "../src/app/detectSphere";
import { Disjoint } from "../src/lib/utilityTypes";

const HubHome = dynamic(() =>
  import("../src/app/components/IndexPage/HubHome")
);

const SphereHome = dynamic(() =>
  import("../src/app/components/IndexPage/SphereHome")
);

const IndexErrorPage = dynamic(() =>
  import("../src/app/components/IndexPage/IndexErrorPage")
);

type IndexPageProps = Disjoint<
  [SphereHomeProps, HubHomeProps, IndexErrorPageProps]
>;

const IndexPage: NextPage<IndexPageProps> = (props) => {
  return (
    <Page>
      <CommonHead />
      {props.error ? (
        <IndexErrorPage {...props} />
      ) : props.ch_festivals !== undefined ? (
        <SphereHome {...props} />
      ) : (
        <HubHome {...props} />
      )}
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  ctx
) => {
  const sphere = detectSphere(ctx);

  if (sphere.isHub) {
    // TODO
    const props: HubHomeProps = {
      festivals: [],
      spheres: [],
    };

    return { props };
  }

  const sphereData = await fetchSphereData(sphere);

  if (sphereData) {
    // TODO Ask with url.
    return {
      props: sphereData,
    };
  }

  return {
    props: {
      error: "sphere-not-found",
    },
  };
};

export default IndexPage;
