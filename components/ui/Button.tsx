import type { p } from "node_modules/@react-router/dev/dist/routes-CZR-bKRt";
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseClass = "btn";
  const sizeClass = `btn--${size}`;
  const variantClass = `btn--${variant}`;
  const fullWidthClass = fullWidth ? "btn-full" : "";

  const combinedClasses = [
    baseClass,
    sizeClass,
    variantClass,
    fullWidthClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
