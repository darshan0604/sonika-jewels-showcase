import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const Section = ({ children, className, variant = 'default', size = 'lg', id }: SectionProps) => {
  const variantClasses = {
    default: "bg-background",
    accent: "gradient-card",
    muted: "bg-muted/30"
  };

  const sizeClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
    xl: "py-28"
  };

  return (
    <section id={id} className={cn(variantClasses[variant], sizeClasses[size], className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;