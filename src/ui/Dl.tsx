import { ComponentProps } from "react";

export const Dl = (props: ComponentProps<"dl">) => (
  <dl
    sx={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "500px",
      maxWidth: "100%",
      my: 2,
      p: 2,
      borderRadius: "rounded",
      bg: "gray.2",

      "dt, dd": { flex: "0 0 50%" },
      dd: { marginLeft: 0 }
    }}
    {...props}
  />
);
