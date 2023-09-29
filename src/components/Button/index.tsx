import clsx from "clsx";
import { ButtonProps } from "../../types/components/props";
import styles from "./index.module.scss";

type Props = ButtonProps;
export default function Button({
  children,
  className,
  elevation = 1,
  color = "none",
  startIcon: StartIcon,
  endIcon: EndIcon,
  size = "medium",
  corners = 2,
  loading = false,
  loadingPosition = "top",
  ...props
}: Props) {
  return (
    <button
      className={clsx(className, styles.container)}
      data-elevation={elevation}
      data-color={color}
      data-size={size}
      data-corners={corners}
      data-loading={loading}
      data-loading-position={loadingPosition}
      {...props}
    >
      {StartIcon && <StartIcon />}
      {children}
      {EndIcon && <EndIcon />}
    </button>
  );
}
