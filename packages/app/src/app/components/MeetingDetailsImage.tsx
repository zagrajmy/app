import { Image } from "theme-ui";

export const MeetingDetailsImage = ({ src }: { src: string }) => (
  <div sx={{ height: 240, overflowY: "visible" }}>
    <Image
      alt=""
      bg="gray.2"
      src={src}
      sx={{
        width: "100%",
        height: `calc(240px + 2em)`,
        objectFit: "cover",
        zIndex: 2,
      }}
    />
  </div>
);
