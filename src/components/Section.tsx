import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

export default function Section({ id, children, className = "", ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-pad scroll-mt-24 ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
