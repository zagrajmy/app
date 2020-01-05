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
        bg="gray.2"
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
      <div sx={{ height: 240 }}>
        <Image
          alt=""
          bg="gray.2"
          width="100%"
          src={src}
          sx={{
            height: "100%",
            objectFit: "cover",
            zIndex: 2
          }}
        />
      </div>
    ),
    small: () => null
  });
