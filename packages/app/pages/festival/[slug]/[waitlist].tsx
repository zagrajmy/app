import { ThemeProvider } from "@theme-ui/core";
import { absurd } from "fp-ts/lib/function";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { Reducer, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";

import { hasura } from "../../../data";
import { zagrajmyRestApi } from "../../../src/app/api-helpers/zagrajmyRestApi";
import { CommonHead } from "../../../src/app/components/CommonHead";
import { Page } from "../../../src/app/components/Page";
import { detectSphere } from "../../../src/app/detectSphere";
import { useSettings } from "../../../src/app/store/useSettings";
import { AsyncReturnType } from "../../../src/lib";
import { head } from "../../../src/lib/head";
import type { HttpError } from "../../../src/lib/HttpError";
import {
  Code,
  Container,
  Heading,
  Link,
  mdx,
  Spacer,
  Stack,
} from "../../../src/ui";
import {
  ProgrammeProposalForm,
  ProgrammeProposalFormResult,
} from "../../../src/ui/organisms/ProgrammeProposalForm";

// should always match filepath
type Params = {
  slug: string;
  waitlist: string;
};

function fetchFestival(ctx: GetServerSidePropsContext<Params>) {
  const sphere = detectSphere(ctx);

  return hasura
    .query({
      ch_festival: [
        {
          where: {
            slug: { _eq: ctx.params!.slug },
            nb_sphere: { django_site: { domain: { _eq: sphere.domain } } },
          },
        },
        {
          name: true,
          settings: [{}, true],
        },
      ],
    })
    .then((res) => head(res.ch_festival));
}

type FieldErrors = Record<string, string[]>;

type State =
  | {
      type: "submitting";
      formValue: ProgrammeProposalFormResult;
    }
  | {
      type: "standby";
    }
  | {
      type: "succeeded";
    }
  | {
      type: "error";
      errors: FieldErrors;
    };
type Action =
  | {
      type: "submit";
      payload: ProgrammeProposalFormResult;
    }
  | {
      type: "fail";
      payload: FieldErrors;
    }
  | {
      type: "success";
    }
  | {
      type: "restart";
    };
const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "submit":
      return {
        type: "submitting",
        formValue: action.payload,
      };
    case "fail":
      return {
        type: "error",
        errors: action.payload,
      };
    case "success":
      return {
        type: "succeeded",
      };
    case "restart":
      return {
        type: "standby",
      };
    default:
      throw absurd(action);
  }
};

interface SuccessMessageProps {
  children?: React.ReactNode;
}
function SuccessMessage({ children }: SuccessMessageProps) {
  const { t } = useTranslation();

  return (
    <Container
      variant="sheet"
      sx={{
        width: "containerThin",

        py: [3, 5],
        px: [2, 5],
      }}
    >
      <Heading as="h1">{t("program-submitted-heading")}</Heading>
      {mdx(t("program-submitted-message"))}
      <Spacer height={3} />
      <Stack gap={1}>
        <div>
          <Link variant="underlined" href="/">
            {t("program-submitted-go-back")}
          </Link>
        </div>
        {t("program-submitted-actions")
          ? mdx(t("program-submitted-actions"))
          : null}
        {children}
      </Stack>
    </Container>
  );
}

type Festival = Exclude<AsyncReturnType<typeof fetchFestival>, undefined>;

interface Props {
  festival: Festival | null;
  params: Params;
}

const initialState: State = { type: "standby" };

const ProgrammeProposalPage: NextPage<Props> = ({ festival, params }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );
  useEffect(() => {
    if (state.type === "submitting") {
      zagrajmyRestApi(`chronology/proposals/`, {
        json: state.formValue,
      })
        .then((_res) => {
          dispatch({
            type: "success",
          });
        })
        .catch((err) => {
          const { response } = err as HttpError;
          if (response) {
            response.json().then((json) => {
              // todo: validate that this json is of type FieldErrors
              if (typeof json === "object") {
                dispatch({
                  type: "fail",
                  payload: json,
                });
              }
            });
          } else {
            throw err;
          }
        });
    }
  }, [state]);

  const settings = useSettings(festival);

  if (!festival) {
    // TODO
    return (
      <ThemeProvider theme={settings.theme}>
        <Page>
          <CommonHead />
          <Container>Ouch. We couldn't find a festival here.</Container>
        </Page>
      </ThemeProvider>
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
      <ThemeProvider theme={settings.theme}>
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
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={settings.theme}>
      <Page>
        <CommonHead titlePrefix={formSettings.title} />
        <Container py={[0, 4]}>
          {state.type === "succeeded" ? (
            <SuccessMessage />
          ) : (
            <ProgrammeProposalForm
              onSubmit={(value) => dispatch({ type: "submit", payload: value })}
              settings={formSettings}
              isSubmitting={state.type === "submitting"}
              errors={state.type === "error" ? state.errors : undefined}
            />
          )}
        </Container>
      </Page>
    </ThemeProvider>
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
