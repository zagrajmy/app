import { Heading as ThHeading, HeadingProps as ThHeadingProps } from "theme-ui";

interface HeadingProps extends ThHeadingProps {
  size?: 2 | 3 | 4 | 5 | 6 | 7 | 8;
}
export const Heading = ({ size, ...rest }: HeadingProps) => {
  return (
    <ThHeading
      sx={{
        ...(size && { "&&": { fontSize: size } }),
      }}
      {...rest}
    />
  );
};
