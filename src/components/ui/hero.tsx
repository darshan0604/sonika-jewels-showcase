import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  children: ReactNode;
  className?: string;
  variant?: 'gradient' | 'image' | 'minimal';
  backgroundImage?: string;
}

const Hero = ({ children, className, variant = 'gradient', backgroundImage }: HeroProps) => {
  const baseClasses = "relative min-h-screen flex items-center justify-center overflow-hidden";
  
  const variantClasses = {
    gradient: "bg-gradient-to-br from-brand-magenta via-brand-violet to-brand-teal",
    image: "bg-cover bg-center bg-no-repeat",
    minimal: "bg-background"
  };

  const overlayClasses = {
    gradient: "",
    image: "absolute inset-0 bg-black/40",
    minimal: ""
  };

  return (
    <section 
      className={cn(baseClasses, variantClasses[variant], className)}
      style={variant === 'image' && backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {variant === 'image' && <div className={overlayClasses[variant]} />}
      
      {/* Animated background elements for gradient variant */}
      {variant === 'gradient' && (
        <>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          </div>
        </>
      )}
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default Hero;