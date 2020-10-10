import { useRouter } from "next/router";

import {
  Button,
  Code,
  DEV_SPHERE_DOMAIN_PARAM_NAME,
  Input,
  Message,
} from "../../../ui";

/* eslint-disable import/no-default-export */
export function DeveloperSphereNotFoundMessage() {
  const { push } = useRouter();

  return (
    <Message>
      Add <Code>{DEV_SPHERE_DOMAIN_PARAM_NAME}</Code> query parameter to the
      URL.
      <br />
      <small>This message won't land in the production build.</small>
      <form
        sx={{ display: "flex", gap: 1, px: 2, py: 3, alignItems: "center" }}
        onSubmit={(event) => {
          event.preventDefault();
          const { value } = event.currentTarget.domain as HTMLInputElement;

          push({ search: `${DEV_SPHERE_DOMAIN_PARAM_NAME}=${value}` });
        }}
      >
        <Input name="domain" autoComplete={DEV_SPHERE_DOMAIN_PARAM_NAME} />
        <Button>Go</Button>
      </form>
    </Message>
  );
}

export default DeveloperSphereNotFoundMessage;
