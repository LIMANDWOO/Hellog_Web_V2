import { Portal } from "../Portal";
import {
  DialogBackground,
  DialogButtonsContainr,
  DialogContainer,
  DialogContentText,
  DialogTitleText,
} from "./style";
import {
  DialogButtonsProps,
  DialogContentsProps,
  DialogProps,
  DialogTitleProps,
} from "./types";

const Dialog = ({
  children,
  isOpen,
  onClose,
  width,
  customStyle,
}: DialogProps) => {
  return (
    <>
      {isOpen && (
        <Portal selector="#dialog">
          <DialogBackground onClick={() => onClose()} />
          <DialogContainer style={{ ...customStyle }} width={width ?? 425}>
            {children}
          </DialogContainer>
        </Portal>
      )}
    </>
  );
};

const DialogTitle = ({ children }: DialogTitleProps) => {
  return <DialogTitleText>{children}</DialogTitleText>;
};

const DialogContents = ({ children }: DialogContentsProps) => {
  return <DialogContentText>{children}</DialogContentText>;
};

const DialogButtons = ({ children }: DialogButtonsProps) => {
  return <DialogButtonsContainr>{children}</DialogButtonsContainr>;
};

export default Object.assign(Dialog, {
  Title: DialogTitle,
  Contents: DialogContents,
  Buttons: DialogButtons,
});
