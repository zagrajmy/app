import React from "react";

import { Container } from "../../../ui";

export interface HubHomeProps {
  featuredSpheres: string[]; // TODO: Sphere[]
  recentFestivals: string[]; // TODO Festival[]
}

const Meeting = () => {
  //TODO display meeting to show it on the hub it should include:
  // name, date, information if u are not logged in
  //possibility to sign -up/register for mettingfif you are signed in
};

export function HubHome({ featuredSpheres: _1, recentFestivals: _2 }: HubHomeProps) {
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
