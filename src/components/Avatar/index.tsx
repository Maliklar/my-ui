import clsx from "clsx";
import { AvatarProps, ButtonProps } from "../../types/components/props";
import styles from "./index.module.scss";
import { HTMLAttributes } from "react";

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
}: AvatarProps) {
  const [containerStyles, badgeStyles] = getStylesObject(size, badge);
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
      {badge ? (
        <div className={styles.badge} style={badgeStyles} data-color={badge} />
      ) : null}
    </div>
  );
}

function getStylesObject(size: number | string, badge?: string) {
  if (typeof size === "number") {
    return [
      {
        height: size,
        width: size,
        minHeight: size,
        minWidth: size,
        maxHeight: size,
        maxWidth: size,
      },
      {
        height: size / 5,
        width: size / 5,
        minHeight: size / 5,
        minWidth: size / 5,
        maxHeight: size / 5,
        maxWidth: size / 5,
        backgroundColor: badge,
      },
    ];
  }
  return [{}, { backgroundColor: badge }];
}
