import { absurd } from "fp-ts/lib/function";
import { GetServerSideProps, NextPageContext } from "next";
import {
  forwardRef,
  useMemo,
  useReducer,
  useRef,
  useState,
  Dispatch,
} from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Box, Flex, Heading, Text, Textarea } from "theme-ui";
import { assert } from "ts-essentials";

import { hasura } from "../../../data";
import { makeError } from "../../../src";
import { MeetingDetailsImage } from "../../../src/app/components/MeetingDetailsImage";
import { Page } from "../../../src/app/components/Page";
import { getAvatarUrl } from "../../../src/app/getAvatarUrl";
import { AsyncReturnType } from "../../../src/lib/utilityTypes";
import { Avatar } from "../../../src/ui/Avatar";
import { Button } from "../../../src/ui/Button";
import { Container } from "../../../src/ui/Container";
import { FormDatepicker } from "../../../src/ui/FormDatepicker";
import { Input, InputProps } from "../../../src/ui/Input";
import {
  MeetingParticipants,
  Participant,
} from "../../../src/ui/organisms/MeetingParticipants";
import { Dialog, DialogFooter, DialogTitle } from "../../../src/ui/Dialog";
// import { Link, LinkProps } from "../../../src/ui/Link";
// import { CheckSquare, Edit } from "../../../src/ui/icons";

function queryMeeting(ctx: {
  req?: NextPageContext["req"];
  query: NextPageContext["query"];
}) {
  return hasura
    .fromCookies(ctx.req)
    .query({
      nb_meeting_by_pk: [
        { id: Number(ctx.query.id) },
        {
          id: true,
          organizer: { username: true, email: true },
          participants: [
            {},
            { cr_user: { uuid: true, username: true, email: true } },
          ],
          name: true,
          description: true,
          image: true,
          start_time: true,
          end_time: true,
          publication_time: true,
          created_at: true,
        },
      ],
    })
    .then((x) => ({ meeting: x.nb_meeting_by_pk }));
}

// interface LinkToAuthorProps extends Omit<LinkProps, "href" | "as"> {
//   meeting: { organizer: { username: string } };
// }
// const LinkToAuthor = ({ children, meeting, ...rest }: LinkToAuthorProps) => (
//   <Link
//     href="/u/[username_slug]"
//     as={`/u/${meeting.organizer.username}`}
//     sx={{ display: "inline-flex" }}
//     {...rest}
//   >
//     {children}
//   </Link>
// );

interface HeadingInputProps extends Omit<InputProps, "ref"> {}
const HeadingInput = forwardRef<HTMLInputElement, HeadingInputProps>(
  function HeadingInput(props, ref) {
    return (
      <Input
        mt={1}
        mb={3}
        sx={{
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          minWidth: 0,
          fontSize: 7,
          letterSpacing: "-0.049375rem",
          border: "none",
          fontFamily: "inherit",
          fontWeight: "heading",
          lineHeight: "heading",
          marginTop: "4px",
          marginBottom: "16px",
          backgroundColor: "background",
          borderRadius: "rounded",
        }}
        name="title"
        ref={ref}
        {...props}
      />
    );
  }
);

// interface EditMeetingButtonProps {
//   isEditing: boolean;
//   onStartEdit: React.ReactEventHandler;
//   onFinishEdit: React.ReactEventHandler;
// }
// const EditMeetingButton = ({
//   isEditing,
//   onStartEdit,
//   onFinishEdit,
//   ...rest
// }: EditMeetingButtonProps) => {
//   const props = {
//     title: "Edit meeting",
//     ...rest,
//   };

//   return isEditing ? (
//     <Button type="button" onClick={onFinishEdit} {...props}>
//       Confirm
//       <CheckSquare
//         size={18}
//         sx={{
//           ml: 2,
//           verticalAlign: "text-bottom",
//         }}
//       />
//     </Button>
//   ) : (
//     <Button type="button" onClick={onStartEdit} {...props}>
//       Edit
//       <Edit size={18} sx={{ ml: 2, verticalAlign: "text-bottom" }} />
//     </Button>
//   );
// };

function useMeetingParticipants(meeting: Meeting | undefined) {
  return useMemo<Participant[] | undefined>(() => {
    return meeting?.participants.map((participant) => {
      const { cr_user } = participant;
      return {
        username: cr_user.username,
        uuid: cr_user.uuid,
        avatarUrl: getAvatarUrl(cr_user),
        profilePath: `/u/${cr_user.username}`,
      };
    });
  }, [meeting]);
}

/**
 * @param mutation an async side effect which can fail and be manually retried
 */
function useMutation<TResult, TArgs extends any[]>(
  mutation: (...args: TArgs) => Promise<TResult>
) {
  const [state, dispatch] = useReducer<
    useMutation.UseMutationReducer<TResult, TArgs>
  >(useMutation.reducer, {
    type: "standby",
  }) as [
    // this shouldn't be required
    useMutation.State<TResult, TArgs>,
    Dispatch<useMutation.Action<TResult, TArgs>>
  ];

  const stateRef = useRef(state);
  const mutationRef = useRef(mutation);
  stateRef.current = state;
  mutationRef.current = mutation;

  const functions = useMemo(() => {
    const run = (args: TArgs) => {
      return mutationRef
        .current(...args)
        .then((res) => {
          dispatch({ type: "success", payload: res });
          return res;
        })
        .catch((err: unknown) => {
          const error = makeError(err);
          dispatch({ type: "failure", payload: error });
          return error;
        });
    };

    const start = (...args: TArgs) => {
      const promise = run(args);
      dispatch({ type: "start", payload: { promise, args } });

      return promise;
    };

    const tryAgain = () => {
      const s = stateRef.current;
      assert(s.type === "failed");

      const promise = run(s.lastArgs);
      dispatch({ type: "try-again", payload: { promise } });

      return promise;
    };

    return {
      start,
      tryAgain,
    };
  }, []);

  return { state, ...functions };
}

namespace useMutation {
  export type Action<R, A> =
    | { type: "start"; payload: { promise: Promise<R | Error>; args: A } }
    | { type: "failure"; payload: Error }
    | { type: "success"; payload: R }
    | { type: "confirm-success" }
    | { type: "try-again"; payload: { promise: Promise<R | Error> } };
  export type State<R, A> =
    | { type: "standby" }
    | { type: "in-progress"; promise: Promise<R | Error>; lastArgs: A }
    | { type: "failed"; error: Error; lastArgs: A }
    | { type: "succeeded"; result: R; lastArgs: A };

  export type UseMutationReducer<R, A> = <R, A>(
    s: State<R, A>,
    a: Action<R, A>
  ) => State<R, A>;

  export const reducer = <R, A>(
    s: State<R, A>,
    a: Action<R, A>
  ): State<R, A> => {
    switch (a.type) {
      case "start":
        assert(s.type === "standby");
        return {
          type: "in-progress",
          promise: a.payload.promise,
          lastArgs: a.payload.args,
        };
      case "success":
        assert(s.type === "in-progress");
        return {
          type: "succeeded",
          result: a.payload,
          lastArgs: s.lastArgs,
        };
      case "failure":
        assert(s.type === "in-progress");
        return {
          type: "failed",
          error: a.payload,
          lastArgs: s.lastArgs,
        };
      case "confirm-success":
        assert(s.type === "succeeded");
        return {
          type: "standby",
        };
      case "try-again":
        assert(s.type === "failed");
        return {
          type: "in-progress",
          promise: a.payload.promise,
          lastArgs: s.lastArgs,
        };
      default:
        throw absurd(a);
    }
  };
}

interface QueryMeetingResult extends AsyncReturnType<typeof queryMeeting> {}
type Meeting = Exclude<QueryMeetingResult["meeting"], undefined>;
interface InitialProps {
  initialData?: QueryMeetingResult;
}

export function MeetingDetailsPage({ initialData }: InitialProps) {
  // const { query } = useRouter();
  // TODO: https://trello.com/c/4L5vkkSI/38-zapisywanie-si%C4%99-na-sesje
  // const { data } = useSWR([{ query }], queryMeeting, { initialData });
  const data = initialData;

  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const signUpForMeeting = useMutation(async () => {
    console.log("sign up for meeting!");
    return "ok";
  });

  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<Partial<Meeting>>({
    defaultValues: data?.meeting || {},
  });

  const onSubmit = form.handleSubmit((value) => {
    // eslint-disable-next-line no-console
    console.log("Meeting edited", { value, errors: form.errors });

    setIsEditing(false);
  });

  const meeting = useMemo(() => data?.meeting, [data]);
  const participants = useMeetingParticipants(meeting);

  if (!data) {
    return null; // TODO skeleton UI
  }

  if (!meeting) {
    // this should not happen here
    return "404: Couldn't find meeting.";
  }

  const { start_time, description, name } = form.watch();

  const status = signUpForMeeting.state.type;
  return (
    <Page>
      {meeting.image ? (
        <>
          <MeetingDetailsImage image={meeting.image} />
          <Box pt={4} />
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "calc(240px + 2em)",
            p: 2,
          }}
          bg="gray.3"
        >
          <Button type="button" variant="secondary">
            Add featured picture
          </Button>
        </Box>
      )}
      <Container
        variant="sheet"
        as={isEditing ? "form" : "article"}
        ref={formRef as any /* as React.Ref<HTMLFormElement> */}
        onSubmit={onSubmit}
        sx={{ mt: meeting.image ? -4 : 0, mb: 4, width: "containerThin" }}
      >
        <header>
          <Flex sx={{ alignItems: "center" }}>
            <Flex
              sx={{
                alignItems: "center",
                color: "gray.8",
                "@media (hover: hover)": {
                  "> button": {
                    opacity: 0.2,
                  },
                  ":hover > button": {
                    opacity: 1,
                  },
                },
              }}
            >
              {isEditing ? (
                <FormDatepicker
                  name="start_time"
                  input={<Input sx={{ bg: "gray.1", border: 0 }} />}
                  defaultValue={start_time || new Date()}
                />
              ) : (
                <Text as="span" sx={{ padding: 1, fontWeight: 500 }}>
                  {start_time && new Date(start_time).toLocaleString("pl-PL")}
                </Text>
              )}
            </Flex>
            <div role="group" sx={{ marginLeft: "auto" }}>
              {/* TODO: https://trello.com/c/4L5vkkSI/38-zapisywanie-si%C4%99-na-sesje */}
              {/* <EditMeetingButton
                isEditing={isEditing}
                onStartEdit={() => setIsEditing(true)}
                onFinishEdit={() => {
                  if (formRef.current) {
                    formRef.current.dispatchEvent(new Event("submit"));
                  }
                }}
              /> */}
            </div>
          </Flex>
          {isEditing ? (
            <HeadingInput ref={form.register({ minLength: 4 })} />
          ) : (
            <Heading mt={1} mb={3}>
              {name}
            </Heading>
          )}

          <Flex mb={3} sx={{ flexDirection: "row", alignItems: "center" }}>
            {/* <LinkToAuthor meeting={meeting}> */}
            <Avatar
              src={getAvatarUrl(meeting.organizer) || ""}
              bg="primaryDark"
              size={40}
            />
            {/* </LinkToAuthor> */}
            <div sx={{ m: 3 }}>
              <Text as="span">Hosted by </Text>
              {/* <LinkToAuthor variant="underlined" meeting={meeting}> */}
              {meeting.organizer.username}
              {/* </LinkToAuthor> */}
            </div>
          </Flex>
        </header>
        {/* 
        TODO: Show metadata only to organizer, admin and helpers.
              Maybe in a disclosure or <details> element?
        <Dl sx={{ mt: 2 }}>
          <dt>{t("published-at")}</dt>
          <dd>
            {meeting.publication_time
              ? new Date(meeting.publication_time).toLocaleString("pl-PL")
              : t("not-published")}
          </dd>
          <dt>{t("created-at")}</dt>
          <dd>
            {meeting.created_at &&
              new Date(meeting.created_at).toLocaleString("pl-PL")}
          </dd>
        </Dl> 
        */}
        <section sx={{ mt: 3 }}>
          {isEditing ? (
            <Textarea
              rows={5}
              sx={{ resize: "none" }}
              name="description"
              ref={form.register()}
            />
          ) : (
            <p sx={{ mt: 0, whiteSpace: "pre-line" }}>{description}</p>
          )}
        </section>
        {participants && (
          <MeetingParticipants
            participants={participants}
            limit={
              // TODO: Use the new backend when it's ready
              Math.random() > 0.5 ? Math.floor(Math.random() * 6) : undefined
            }
          />
        )}
        <Button
          sx={{ ml: "auto", mt: 2 }}
          disabled={status === "in-progress" || status === "succeeded"}
          onClick={signUpForMeeting.start}
        >
          {t("sign-up-for-meeting")}
        </Button>
        {status === "failed" && (
          <Dialog renderTitle={t("failed-to-sign-up-for-meeting")}>
            <DialogFooter variant="centered">
              {/* variant = centered | alignedRight */}
              <Button onClick={signUpForMeeting.tryAgain}></Button>
            </DialogFooter>
          </Dialog>
        )}
      </Container>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<InitialProps> = async (
  ctx
) => {
  return queryMeeting(ctx).then(({ meeting }) => ({
    props: {
      initialData: meeting && { meeting },
    },
  }));
};

export default MeetingDetailsPage;
