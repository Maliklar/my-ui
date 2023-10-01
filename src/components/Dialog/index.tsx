import clsx from "clsx";
import { HTMLAttributes, useEffect } from "react";
import { BoxProps } from "../../types/components/props";
import styles from "./index.module.scss";

type Props = {
  size?: "small" | "medium" | "large" | "fullscreen";
  open?: boolean;
  onClose?: VoidFunction;
} & BoxProps &
  HTMLAttributes<HTMLDialogElement>;
export default function Dialog({
  size = "medium",
  color,
  className,
  onClose,
  elevation,
  open = true,
  corners,
  ...props
}: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

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
}
