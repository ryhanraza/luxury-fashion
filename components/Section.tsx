import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
          )}
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>
        {children}
      </div>
    </section>
  );
}
