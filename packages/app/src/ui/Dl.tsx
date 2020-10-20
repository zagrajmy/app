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

      dt: { fontWeight: "bold", color: "gray.8" },
      dd: { marginLeft: 0, whiteSpace: "pre" },
      "dt, dd": { flex: "0 0 50%" },
    }}
    {...props}
  />
);

const show = (x: unknown) =>
  typeof x === "object" ? JSON.stringify(x, null, 2) : String(x);

/**
 * Raw and easy presentation UI for any object
 */
Dl.FromObject = (props: { value: object }) => {
  return (
    <Dl>
      {Object.entries(props.value).flatMap(([k, v]) => [
        <dt key={`${k}-k`}>{k}:</dt>,
        <dd key={`${k}-v`}>{show(v)}</dd>,
      ])}
    </Dl>
  );
};
