
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "narrow";
}

const containerSizes = {
  default: "max-w-7xl",
  wide: "max-w-[1440px]",
  narrow: "max-w-4xl",
};

export default function Container({
  children,
  className = "",
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-10 ${containerSizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
