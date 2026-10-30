
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-accent text-white hover:bg-orange-700 shadow-sm",

  secondary:
    "bg-brand-primary text-white hover:bg-black",

  outline:
    "border border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary hover:text-white",

  ghost:
    "bg-transparent text-brand-primary hover:bg-brand-secondary",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-button font-semibold
        transition-all duration-200
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-brand-accent
        disabled:pointer-events-none
        disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
