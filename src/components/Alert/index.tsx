import clsx from "clsx";
import { HTMLAttributes, useEffect, useState } from "react";
import { BoxProps } from "../../types/components/props";
import styles from "./index.module.scss";
import { IconType } from "react-icons";

type Props = Omit<BoxProps, "variant"> &
  HTMLAttributes<HTMLDivElement> & {
    variant?: "outlined" | "filled" | "standard";
    appear?: "left" | "right" | "top" | "bottom";
    open?: boolean;
    icon?: IconType;
  };
export default function Alert({
  children,
  className,
  elevation = 1,
  color = "success",
  corners = 2,
  loading = false,
  loadingPosition = "top",
  appear = "bottom",
  variant = "standard",
  open = false,
  icon: Icon,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (!open)
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    else setIsOpen(open);
  }, [open]);

  if (isOpen)
    return (
      <div
        data-elevation={elevation}
        data-color={color}
        data-corners={corners}
        data-variant={variant}
        data-loading={loading}
        data-animation={appear}
        data-open={open}
        className={clsx(className, styles.container)}
        {...props}
      >
        {Icon && <Icon />}
        {children}
      </div>
    );
  return null;
}
