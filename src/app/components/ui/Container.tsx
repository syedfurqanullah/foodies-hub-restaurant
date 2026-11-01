
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "narrow";
}

const containerSizes = {
  default: "max-w-7xl",
  wide: "max-w-[1680px]",
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
      className={`mx-auto w-full px-4 sm:px-6 lg:px-10 2xl:px-12 ${containerSizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
