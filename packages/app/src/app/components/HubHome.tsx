import React from "react";

import { HubHomeProps } from "../../../pages/index";
import { Container } from "../../ui";

export function HubHome({ spheres: _1, festivals: _2 }: HubHomeProps) {
  return (
    <Container
      mt={4}
      mb={[0, 5]}
      variant="sheet"
      sx={{ width: "containerThin", py: [3, 4], px: [2, 4] }}
    >
      <strong>
        Cześć!{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </strong>
      <br />
      <p>
        Budujemy tutaj aplikację do organizacji konwentów i umawiania się na
        sesje RPG.
      </p>
      <p>
        Jeśli chcesz wiedzieć więcej, śmiało pisz na{" "}
        <a
          href="mailto:zagrajmy.net@gmail.com"
          sx={{ variant: "links.underlined" }}
        >
          zagrajmy.net@gmail.com
        </a>
        .
      </p>
    </Container>
  );
}

// eslint-disable-next-line import/no-default-export
export default HubHome;
