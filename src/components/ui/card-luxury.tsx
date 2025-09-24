import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardLuxuryProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'hover';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const CardLuxury = ({ children, className, variant = 'default', padding = 'lg', id }: CardLuxuryProps) => {
  const baseClasses = "rounded-2xl transition-smooth border";

  const variantClasses = {
    default: "bg-card border-border shadow-soft",
    glass: "glassmorphism border-white/20 shadow-glass",
    gradient: "gradient-card border-brand-magenta/20 shadow-luxury",
    hover: "bg-card border-border shadow-soft hover:shadow-luxury hover:scale-105 hover:-translate-y-1 cursor-pointer"
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6", 
    lg: "p-8",
    xl: "p-12"
  };

  return (
    <div id={id} className={cn(baseClasses, variantClasses[variant], paddingClasses[padding], className)}>
      {children}
    </div>
  );
};

export default CardLuxury;