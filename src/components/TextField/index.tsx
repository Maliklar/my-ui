import clsx from "clsx";
import { useState } from "react";
import { FaExclamationCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { TextFieldProps } from "../../types/components/props";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styles from "./index.module.scss";
export default function TextField({
  children,
  className,
  elevation = 0,
  color = "primary",
  corners = 2,
  icon: Icon,
  loading = false,
  loadingPosition = "top",
  error = false,
  errorMessage = "",
  title,
  variant = "standard",
  type = "text",
  ...props
}: TextFieldProps) {
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);

  function inputFocusHandler() {
    setFocused(true);
  }
  function inputBlurHandler() {
    setFocused(false);
  }
  return (
    <div className={clsx(styles.container)}>
      <label htmlFor={props.id} className={styles.label}>
        {title}
      </label>

      <div
        role="textbox"
        tabIndex={0}
        data-focus={focused}
        data-elevation={elevation}
        data-color={color}
        data-corners={corners}
        data-loading={loading}
        data-variant={variant}
        data-loading-position={loadingPosition}
        className={clsx(className, styles.inputContainer)}
        {...props}
      >
        {Icon && <Icon />}
        <input
          className={clsx(styles.input)}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
          type={visible ? "text" : type}
          {...props}
        />
        {type === "password" &&
          (visible ? (
            <FaEye
              className={styles.hideButton}
              onClick={() => setVisible((i) => !i)}
            />
          ) : (
            <FaEyeSlash
              className={styles.hideButton}
              onClick={() => setVisible((i) => !i)}
            />
          ))}
        {error && <FaExclamationCircle />}
      </div>
      {error && errorMessage && (
        <small role="alert" className={clsx(styles.error)}>
          {errorMessage}
        </small>
      )}

      {children}
    </div>
  );
}
