import {
  ButtonHTMLAttributes,
  HtmlHTMLAttributes,
  InputHTMLAttributes,
} from "react";
import { IconType } from "react-icons";
import AllColors from "../../types/styles/colors";

type Color =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "none"
  | AllColors;
type Size = "x-small" | "small" | "medium" | "large" | "x-large" | number;
type Corners = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | "rounded";
type Elevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10;
type ButtonVariant = "text" | "outlined" | "contained";
type DivVariant = "outlined" | "contained";
type InputVariant = "standard" | "outlined" | "filled";

export type BoxProps = {
  variant?: DivVariant;
  elevation?: Elevation;
  color?: Color;
  corners?: Corners;
  rounded?: boolean;
  loading?: boolean;
  loadingPosition?: "top" | "bottom";
};

export type ButtonProps = Omit<BoxProps, "variant"> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    startIcon?: IconType;
    endIcon?: IconType;
    size?: Size;
    variant?: ButtonVariant;
  };

export type TextFieldProps = Omit<BoxProps, "variant"> &
  InputHTMLAttributes<HTMLInputElement> & {
    type?: "text" | "number" | "password" | "email";
    icon?: IconType;
    title?: string;
    error?: boolean;
    errorMessage?: string;
    variant?: InputVariant;
  };

export type AvatarProps = Omit<BoxProps, "variant"> &
  HtmlHTMLAttributes<HTMLDivElement> & {
    src: string;
    alt: string;
    size?: Size;
    border?: number;
    badge?: Color;
    color?: Color;
  };
