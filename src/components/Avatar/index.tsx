import clsx from "clsx";
import { ButtonProps } from "../../types/components/props";
import styles from "./index.module.scss";
import { HTMLAttributes } from "react";

type Props = {
  src: string;
  alt: string;
  size?: "x-small" | "small" | "medium" | "large" | "x-large" | number;
  border?: number;
  color?: string;
  badge?: boolean;
  elevation?: number;
} & HTMLAttributes<HTMLDivElement>;
export default function Avatar({
  src,
  alt,
  size = "medium",
  border,
  color,
  badge,
  className,
  elevation,
  style,
  ...props
}: Props) {
  const [containerStyles, badgeStyles] = getStylesObject(size);
  return (
    <div
      className={clsx(className, styles.container)}
      data-elevation={elevation}
      data-color={color}
      data-size={size}
      {...props}
      style={{
        ...containerStyles,
        ...style,
      }}
    >
      <img className={styles.img} src={src} alt={alt} />
      {badge && <div className={styles.badge} style={badgeStyles} />}
    </div>
  );
}

function getStylesObject(size: number | string) {
  if (typeof size === "number") {
    return [
      {
        height: size + "",
        width: size,
        minHeight: size,
        minWidth: size,
        maxHeight: size,
        maxWidth: size,
      },
      {
        height: size / 20,
        width: size / 20,
        minHeight: size / 20,
        minWidth: size / 20,
        maxHeight: size / 20,
        maxWidth: size / 20,
      },
    ];
  }
  return [{}, {}];
}
