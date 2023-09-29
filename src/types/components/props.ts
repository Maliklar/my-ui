import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export type BoxProps = {
  variant?: "outlined" | "contained";
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10;
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "none";
  corners?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | "rounded";
  rounded?: boolean;
  loading?: boolean;
  loadingPosition?: "top" | "bottom";
};

export type ButtonProps = Omit<BoxProps, "variant"> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    startIcon?: IconType;
    endIcon?: IconType;
    size?: "small" | "medium" | "Large";
    variant?: "text" | "outlined" | "contained";
  };

export type TextFieldProps = Omit<BoxProps, "variant"> &
  InputHTMLAttributes<HTMLInputElement> & {
    type?: "text" | "number" | "password" | "email";
    icon?: IconType;
    title?: string;
    error?: boolean;
    errorMessage?: string;
    variant?: "standard" | "outlined" | "filled";
  };
