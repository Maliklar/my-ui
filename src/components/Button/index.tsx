import { HTMLAttributes } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { IconType } from "react-icons";

type Props = {
  variant?: "text" | "outlined" | "contained";
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10;
  color?: "primary" | "secondary" | "error" | "warning" | "none";
  startIcon?: IconType;
  endIcon?: IconType;
  size?: "small" | "medium" | "Large";
  corners?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | "rounded";
  rounded?: boolean;
} & HTMLAttributes<HTMLButtonElement>;
export default function Button({
  children,
  className,
  elevation = 2,
  color = "none",
  startIcon: StartIcon,
  endIcon: EndIcon,
  size = "medium",
  corners = 2,

  ...props
}: Props) {
  return (
    <button
      className={clsx(className, styles.container)}
      data-elevation={elevation}
      data-color={color}
      data-size={size}
      data-corners={corners}
      {...props}
    >
      {StartIcon && <StartIcon />}
      {children}
      {EndIcon && <EndIcon />}
    </button>
  );
}
