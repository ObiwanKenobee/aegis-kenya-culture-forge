
import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, subtitle, children, className = '' }: SectionProps) => {
  return (
    <section className={`mb-10 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      <div className="grid gap-4 md:gap-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
