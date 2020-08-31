/**
 * @see https://react-spectrum.adobe.com/react-aria/useDialog.html
 * @see https://spectrum.adobe.com/page/dialog/
 */

import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";
import {
  OverlayContainer,
  OverlayProps,
  useModal,
  useOverlay,
  usePreventScroll,
} from "@react-aria/overlays";
import { useRef } from "react";
import {
  Box,
  BoxProps,
  Heading,
  HeadingProps,
  ThemeUICSSObject,
} from "theme-ui";

const overlayStyle: ThemeUICSSObject = {
  position: "fixed",
  zIndex: 100,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export interface DialogProps
  extends Pick<OverlayProps, "isOpen" | "onClose">,
    BoxProps {
  isModal?: boolean;
  isDismissable?: boolean;
  renderTitle: (titleProps: {
    id?: string;
    className?: string;
  }) => React.ReactNode;
}
const dialogStyle = {
  background: "white",
  color: "black",
  padding: 30,
};
export const Dialog = ({
  isModal,
  isDismissable = !isModal,
  children,
  isOpen,
  onClose,
  renderTitle,
  ...rest
}: DialogProps) => {
  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = useRef<HTMLDivElement>(null);
  const { overlayProps } = useOverlay(
    {
      isDismissable,
      isOpen,
      onClose,
      shouldCloseOnBlur: false,
    },
    ref
  );

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  const { dialogProps, titleProps } = useDialog({}, ref);
  return (
    <OverlayContainer>
      <Box sx={overlayStyle} {...rest}>
        <FocusScope contain restoreFocus autoFocus>
          <div
            {...overlayProps}
            {...dialogProps}
            {...modalProps}
            ref={ref}
            sx={dialogStyle}
          >
            {renderTitle(titleProps)}
            {children}
          </div>
        </FocusScope>
      </Box>
    </OverlayContainer>
  );
};

export interface DialogTitleProps extends HeadingProps {}
export const DialogTitle = (props: DialogTitleProps) => {
  return <Heading as="h3" {...props} />;
};

export interface DialogFooterProps extends BoxProps {}
export const DialogFooter = (props: DialogFooterProps) => {
  return <Box as="footer" {...props} />;
};
