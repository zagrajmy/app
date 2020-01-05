import { Image } from "@theme-ui/components";

import { Meeting } from "../types";
import { matchKind } from "../../lib/match";

export const MeetingDetailsImage = ({
  image
}: Required<Pick<Meeting, "image">>) =>
  matchKind(image, {
    background: ({ src }) => (
      <Image
        alt=""
        bg="whites.2"
        width="100%"
        height="100%"
        src={src}
        sx={{
          position: "absolute",
          objectFit: "cover",
          zIndex: 0
        }}
      />
    ),
    banner: ({ src }) => (
      <Image
        alt=""
        bg="whites.2"
        width="100%"
        height="200px"
        src={src}
        sx={{
          objectFit: "cover",
          zIndex: 2
        }}
      />
    ),
    small: () => null
  });
