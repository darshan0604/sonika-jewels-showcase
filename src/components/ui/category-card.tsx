import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CategoryCardProps {
  title: string;
  description?: string;
  image: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  highlight?: string;
}

const CategoryCard = ({ 
  title, 
  description, 
  image, 
  icon, 
  onClick, 
  className = "",
  highlight 
}: CategoryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-luxury transition-all cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        {icon && (
          <div className="text-brand-pink mb-3 group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-brand-pink transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-white/90 text-sm mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {description}
          </p>
        )}
        
        {highlight && (
          <span className="inline-block bg-brand-magenta/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
            {highlight}
          </span>
        )}
        
        {/* Hover indicator */}
        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
          <motion.div
            initial={false}
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l8 8-8 8M5 12h14" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;