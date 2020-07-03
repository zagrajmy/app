import {
  Message as BaseMessage,
  MessageProps as BaseMessageProps,
} from "theme-ui";

export interface MessageProps extends Omit<BaseMessageProps, "ref"> {}

// We only add the default variant here.
export const Message = (props: MessageProps) => (
  <BaseMessage variant="default" {...props} />
);
