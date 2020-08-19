import { Image } from "theme-ui";

const { NEXT_PUBLIC_ZAGRAJMY_REST_API_URL } = process.env;

const filesUrlPrefix = `${NEXT_PUBLIC_ZAGRAJMY_REST_API_URL}/mediafiles/`;

export const MeetingDetailsImage = ({ image }: { image: string }) => (
  <div sx={{ height: 240, overflowY: "visible" }}>
    <Image
      alt=""
      bg="gray.2"
      src={`${filesUrlPrefix}/${image}`}
      sx={{
        width: "100%",
        height: `calc(240px + 2em)`,
        objectFit: "cover",
        zIndex: 2,
      }}
    />
  </div>
);
