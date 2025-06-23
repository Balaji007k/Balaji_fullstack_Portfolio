
import { ReactNode } from "react";
import { ResponsiveContainer } from "./ResponsiveContainer";

interface ResponsiveSectionProps {
  children: ReactNode;
  className?: string;
  containerClass?: string;
  fullHeight?: boolean;
  id?: string;
}

export const ResponsiveSection = ({
  children,
  className = "",
  containerClass = "",
  fullHeight = false,
  id
}: ResponsiveSectionProps) => {
  return (
    <section 
      id={id}
      className={`
        w-full 
        ${fullHeight ? "min-h-screen" : "py-12 sm:py-16 lg:py-20"} 
        relative 
        overflow-hidden
        ${className}
      `}
    >
      <ResponsiveContainer className={containerClass}>
        {children}
      </ResponsiveContainer>
    </section>
  );
};
