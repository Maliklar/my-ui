import clsx from "clsx";
import { HTMLAttributes } from "react";
import { BoxProps } from "../../types/components/props";
import styles from "./index.module.scss";

type Props = BoxProps & HTMLAttributes<HTMLDivElement>;
export default function Alert({
  children,
  className,
  elevation = 1,
  color = "warning",

  corners = 2,
  loading = false,
  loadingPosition = "top",
  variant = "contained",
  ...props
}: Props) {
  return (
    <div
      data-elevation={elevation}
      data-color={color}
      data-corners={corners}
      data-variant={variant}
      data-loading={loading}
      className={clsx(className, styles.container)}
      {...props}
    >
      asdf
    </div>
  );
}
