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
        src={src}
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          objectFit: "cover",
          zIndex: 0
        }}
      />
    ),
    banner: ({ src }) => (
      <div sx={{ height: 240, overflowY: "visible" }}>
        <Image
          alt=""
          bg="gray.2"
          src={src}
          sx={{
            width: "100%",
            height: `calc(240px + 2em)`,
            objectFit: "cover",
            zIndex: 2
          }}
        />
      </div>
    ),
    small: () => null
  });
