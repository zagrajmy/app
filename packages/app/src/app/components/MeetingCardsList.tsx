import React, { ComponentProps } from "react";

type MeetingCardsListProps = ComponentProps<"ul">;
export const MeetingCardsList: React.FC<MeetingCardsListProps> = (props) => {
  return (
    <ul
      sx={{
        listStyle: "none",
        margin: 0,
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        li: {
          maxWidth: "100%",
          my: 3,
        },
      }}
      {...props}
    />
  );
};
