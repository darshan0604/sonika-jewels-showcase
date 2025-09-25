import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location?: string;
  testimonial: string;
  rating?: number;
  avatar?: string;
  prize?: string;
  year?: string;
  className?: string;
}

const TestimonialCard = ({ 
  name, 
  location, 
  testimonial, 
  rating = 5, 
  avatar, 
  prize, 
  year,
  className = "" 
}: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`glassmorphism rounded-2xl p-6 border-white/20 shadow-soft hover:shadow-luxury transition-all ${className}`}
    >
      {/* Quote Icon */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-magenta to-brand-purple flex items-center justify-center">
          <Quote className="w-6 h-6 text-white" />
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Testimonial */}
      <blockquote className="text-foreground mb-6 font-medium italic">
        "{testimonial}"
      </blockquote>
      
      {/* User Info */}
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-brand-magenta/20"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{name}</h4>
          {location && (
            <p className="text-sm text-muted-foreground">{location}</p>
          )}
          {prize && year && (
            <p className="text-sm text-brand-magenta font-medium">
              {prize} Winner {year}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;