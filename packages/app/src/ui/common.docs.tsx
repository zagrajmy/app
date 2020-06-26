interface PlaceholderProps {
  width: string;
  height: string;
  style: React.CSSProperties;
}

export const Placeholder = ({ width, height, style }: PlaceholderProps) => (
  <div sx={{ width, height, bg: "gray.3" }} style={style} />
);
