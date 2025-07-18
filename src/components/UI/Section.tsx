import React from "react";

type SectionProps = {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className, children })  => {
  return (
    <section id={id} className={className}>
    {children}
  </section>
);
}

export default Section