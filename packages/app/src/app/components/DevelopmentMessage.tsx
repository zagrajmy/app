import { Message } from "../../ui";

export interface DevelopmentMessageProps {
  children: React.ReactNode;
}
export function DevelopmentMessage({ children }: DevelopmentMessageProps) {
  if (process.env.NODE_ENV !== "development") {
    throw new Error("DevelopmentMessage should not be rendered in production");
  }

  return (
    <Message>
      {children}
      <small>This message won't land in the production build.</small>
    </Message>
  );
}

export default DevelopmentMessage;
