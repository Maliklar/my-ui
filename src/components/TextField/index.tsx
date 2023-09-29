import clsx from "clsx";
import { TextFieldProps } from "../../types/components/props";
import styles from "./index.module.scss";

type Props = TextFieldProps;
export default function TextField({
  children,
  className,
  elevation = 1,
  color = "none",
  corners = 2,
  icon: Icon,
  loading = false,
  loadingPosition = "top",
  error = false,
  errorMessage = "",
  ...props
}: Props) {
  return (
    <div
      role="textbox"
      className={clsx(className, styles.container)}
      data-elevation={elevation}
      data-color={color}
      data-corners={corners}
      data-loading={loading}
      data-loading-position={loadingPosition}
      {...props}
    >
      <label htmlFor="" />

      <div {...props} role="textbox">
        <input {...props} />
      </div>
      {error && errorMessage && <small role="alert"></small>}

      {children}
    </div>
  );
}
