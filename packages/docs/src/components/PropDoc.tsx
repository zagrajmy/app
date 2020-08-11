// eslint-disable-next-line import/no-extraneous-dependencies
import components from "gatsby-theme-docz/src/components";

interface PropDocProps {
  /**
   * @example onClear: () => void
   */
  heading: string;
  description: string;
}
export function PropDoc({ heading, description }: PropDocProps) {
  const [name, annotation] = heading.split(":");

  return (
    <>
      <components.h4 sx={{ fontFamily: "monospace" }}>
        {name}:<span sx={{ color: "gray.6" }}>{annotation}</span>
      </components.h4>
      {description && <p>{description}</p>}
    </>
  );
}
