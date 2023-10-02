import clsx from "clsx";
import { HTMLAttributes, useEffect, useState } from "react";
import { BoxProps } from "../../types/components/props";
import styles from "./index.module.scss";

type Props = {
  size?: "small" | "medium" | "large" | "fullscreen";
  open?: boolean;
  onClose?: VoidFunction;
  unmountOnExit?: boolean;
} & BoxProps &
  HTMLAttributes<HTMLDialogElement>;
export default function Dialog({
  size = "small",
  color,
  className,
  onClose,
  elevation,
  open = true,
  corners,
  unmountOnExit = false,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    if (unmountOnExit) {
      if (open)
        setTimeout(() => {
          setIsOpen(true);
        }, 500);
      else
        setTimeout(() => {
          setIsOpen(false);
        }, 500);
    } else {
      setIsOpen(true);
    }
  }, [open, unmountOnExit]);

  if (isOpen)
    return (
      <div className={clsx(styles.overlay)} onClick={onClose} data-open={open}>
        <dialog
          open
          className={clsx(className, styles.container)}
          data-elevation={elevation}
          data-corners={corners}
          data-color={color}
          data-size={size}
          onClick={(e) => {
            e.stopPropagation();
            props.onClick && props.onClick(e);
          }}
          {...props}
        ></dialog>
      </div>
    );
  else return null;
}
