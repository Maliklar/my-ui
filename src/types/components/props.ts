import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export type BoxProps = {
  variant?: "text" | "outlined" | "contained";
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10;
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "none";
  corners?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | "rounded";
  rounded?: boolean;
  loading?: boolean;
  loadingPosition?: "top" | "bottom";
};

export type ButtonProps = BoxProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    startIcon?: IconType;
    endIcon?: IconType;
    size?: "small" | "medium" | "Large";
  };
