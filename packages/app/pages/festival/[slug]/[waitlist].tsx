import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

import { hasura } from "../../../data";
import { CommonHead } from "../../../src/app/components/CommonHead";
import { Page } from "../../../src/app/components/Page";
import { detectSphere } from "../../../src/app/detectSphere";
import { useSettings } from "../../../src/app/store/useSettings";
import { AsyncReturnType } from "../../../src/lib";
import { head } from "../../../src/lib/head";
import { Code, Container } from "../../../src/ui";
import { ProgrammeProposalForm } from "../../../src/ui/organisms/ProgrammeProposalForm";

// should always match filepath
type Params = {
  slug: string;
  waitlist: string;
};

function fetchFestival(ctx: GetServerSidePropsContext<Params>) {
  const sphere = detectSphere(ctx);

  return hasura
    .fromCookies(ctx.req)
    .query({
      ch_festival: [
        {
          where: {
            slug: { _eq: ctx.params!.slug },
            nb_sphere: { django_site: { domain: { _eq: sphere.domain } } },
          },
        },
        { settings: [{}, true] },
      ],
    })
    .then((res) => head(res.ch_festival));
}

type Festival = Exclude<AsyncReturnType<typeof fetchFestival>, undefined>;

interface Props {
  festival: Festival | null;
  params: Params;
}

const ProgrammeProposalPage: NextPage<Props> = ({ festival, params }) => {
  // eslint-disable-next-line no-console
  const handleSubmit = console.log;

  const settings = useSettings(festival);

  if (!festival) {
    // TODO
    return (
      <Page>
        <CommonHead />
        <Container>Ouch. We couldn't find a festival here.</Container>
      </Page>
    );
  }

  const formSettings = settings.forms.find(
    // Revise this after we parse settings.
    // Right now, somebody can pass a number or a string.
    // eslint-disable-next-line eqeqeq
    (x) => x.waitlist == params.waitlist
  );

  if (!formSettings) {
    return (
      <Page>
        <CommonHead />
        <Container py={4} px={2} sx={{ maxWidth: "containerThin" }}>
          <p>Ouch. We couldn't find the form here.</p>

          {/* todo: show this also to sphere admins */}
          {process.env.NODE_ENV === "development" && (
            <p>
              Check <Code>"forms"</Code> property in festival and sphere
              settings. There should be one with <Code>"waitlist"</Code> equal
              to <Code sx={{ fontWeight: "bold" }}>{params.waitlist}</Code>.
            </p>
          )}
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <CommonHead />
      <Container py={[0, 4]}>
        <ProgrammeProposalForm
          onSubmit={handleSubmit}
          settings={formSettings}
        />
      </Container>
    </Page>
  );
};

export default ProgrammeProposalPage;

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  ctx
) => {
  const festival = (await fetchFestival(ctx)) || null;

  return {
    props: {
      festival,
      params: ctx.params!,
    },
  };
};
