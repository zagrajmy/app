const field = {
  appearance: "none",
  fontSize: "inherit",
  lineHeight: "inherit",
  color: "inherit",
  border: "1px solid",
  borderRadius: "rounded",
  borderColor: "gray.3",
  bg: "gray.1",
};

export const forms = {
  textarea: field,
  input: field,
  select: {
    ...field,
    ":disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
    },
  },
  label: {
    fontWeight: "bold",
    color: "muted",
  },
};
