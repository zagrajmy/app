import { Image } from "@chakra-ui/core";

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
        position="absolute"
        objectFit="cover"
        src={src}
        zIndex={0}
      />
    ),
    banner: ({ src }) => (
      <Image
        alt=""
        bg="whites.2"
        width="100%"
        height="200px"
        objectFit="cover"
        src={src}
        zIndex={2}
      />
    ),
    small: () => null
  });
