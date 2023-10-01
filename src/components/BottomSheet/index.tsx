import clsx from "clsx";
import { HTMLAttributes, useEffect, useState } from "react";
import { BoxProps } from "../../types/components/props";
import styles from "./index.module.scss";

type Props = BoxProps;
export default function Card({ ...props }: Props) {
  return <div className={clsx(styles.overlay)} {...props}></div>;
}
