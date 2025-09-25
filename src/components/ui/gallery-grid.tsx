import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories?: string[];
}

const GalleryGrid = ({ images, categories = [] }: GalleryGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === 'all'
                ? 'bg-brand-magenta text-white shadow-luxury'
                : 'bg-secondary text-secondary-foreground hover:bg-brand-magenta/10'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-brand-magenta text-white shadow-luxury'
                  : 'bg-secondary text-secondary-foreground hover:bg-brand-magenta/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={`${image.src}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="break-inside-avoid mb-4"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full rounded-lg shadow-soft hover:shadow-luxury transition-shadow cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setLightboxImage(image.src)}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-brand-pink z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default GalleryGrid;