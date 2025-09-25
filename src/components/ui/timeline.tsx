import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image?: string;
  highlight?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline = ({ items, className = "" }: TimelineProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-magenta via-brand-purple to-brand-teal"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col md:space-x-8`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-brand-magenta to-brand-purple border-4 border-background shadow-luxury z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            
            {/* Content */}
            <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
              <div className={`glassmorphism rounded-2xl p-6 ${item.highlight ? 'border-brand-magenta/30 shadow-luxury' : 'border-white/20 shadow-soft'}`}>
                <span className="text-sm font-medium text-brand-magenta">{item.year}</span>
                <h3 className={`text-xl font-display font-bold mb-2 ${item.highlight ? 'text-brand-magenta' : 'text-foreground'}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
                {item.image && (
                  <div className="mt-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;