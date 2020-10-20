import { useRouter } from "next/router";

import { Button, Code, DEV_SPHERE_DOMAIN_PARAM_NAME, Input } from "../../../ui";
import { DevelopmentMessage } from "../DevelopmentMessage";

export function DeveloperSphereNotFoundMessage() {
  const { push } = useRouter();

  return (
    <DevelopmentMessage>
      Add <Code>{DEV_SPHERE_DOMAIN_PARAM_NAME}</Code> query parameter to the
      URL.
      <br />
      <form
        sx={{
          display: "flex",
          gap: 1,
          px: 2,
          py: 3,
          alignItems: "center",
        }}
        onSubmit={(event) => {
          event.preventDefault();
          const { value } = event.currentTarget.domain as HTMLInputElement;

          push({ search: `${DEV_SPHERE_DOMAIN_PARAM_NAME}=${value}` });
        }}
      >
        <Input name="domain" autoComplete={DEV_SPHERE_DOMAIN_PARAM_NAME} />
        <Button>Go</Button>
      </form>
    </DevelopmentMessage>
  );
}

export default DeveloperSphereNotFoundMessage;
