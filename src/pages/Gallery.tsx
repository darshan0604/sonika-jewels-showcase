import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ZoomIn, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'bridal', name: 'Bridal Sets' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bangles', name: 'Bangles' },
    { id: 'custom', name: 'Custom Designs' },
  ];

  // Sample gallery items with placeholder data
  const galleryItems = [
    { id: 1, category: 'bridal', title: 'Royal Bridal Set', description: 'Exquisite 22K gold bridal set with intricate kundan work', featured: true },
    { id: 2, category: 'rings', title: 'Diamond Solitaire Ring', description: 'Classic solitaire ring with 1.5 carat diamond', featured: false },
    { id: 3, category: 'necklaces', title: 'Heritage Necklace', description: 'Traditional gold necklace with temple motifs', featured: true },
    { id: 4, category: 'earrings', title: 'Chandbali Earrings', description: 'Elegant chandbali earrings with pearl drops', featured: false },
    { id: 5, category: 'bangles', title: 'Designer Bangles Set', description: 'Set of 6 matching designer gold bangles', featured: false },
    { id: 6, category: 'custom', title: 'Custom Pendant', description: 'Personalized pendant with birthstone', featured: false },
    { id: 7, category: 'bridal', title: 'Polki Jewelry Set', description: 'Complete polki set for wedding ceremonies', featured: true },
    { id: 8, category: 'rings', title: 'Couple Rings', description: 'Matching wedding bands with engraving', featured: false },
    { id: 9, category: 'necklaces', title: 'Layered Chain Set', description: 'Modern layered chain necklace set', featured: false },
    { id: 10, category: 'earrings', title: 'Jhumka Collection', description: 'Traditional jhumkas with meenakari work', featured: false },
    { id: 11, category: 'bangles', title: 'Antique Bangles', description: 'Antique finish bangles with stone setting', featured: false },
    { id: 12, category: 'custom', title: 'Name Pendant', description: 'Custom name pendant in gold', featured: false },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const totalImages = filteredItems.length;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
    } else {
      setSelectedImage(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Explore our finest creations and witness the artistry that goes into 
            every piece of jewelry we craft
          </p>
          <Button asChild size="lg" className="btn-luxury">
            <a href="#gallery">View Collection</a>
          </Button>
        </div>
      </Hero>

      {/* Gallery Section */}
      <Section id="gallery" size="lg">
        {/* Category Filter */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid relative group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[3/4] bg-gradient-brand rounded-xl overflow-hidden shadow-soft">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💎</span>
                    </div>
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <ZoomIn className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>

                {/* Featured badge */}
                {item.featured && (
                  <Badge className="absolute top-3 right-3 bg-brand-pink text-white">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Info */}
              <div className="mt-4 px-2">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 border-white/30 text-white hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              onClick={() => navigateImage('prev')}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 border-white/30 text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={() => navigateImage('next')}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 border-white/30 text-white hover:bg-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image */}
            <div className="relative max-h-[80vh] aspect-[3/4] bg-gradient-brand rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{filteredItems[selectedImage]?.title}</h3>
                  <p className="text-white/90">{filteredItems[selectedImage]?.description}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <Section variant="accent" size="lg">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit our showroom to see these beautiful pieces in person and discover 
            how we can create something special just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury">
              <a href="/contact">Visit Our Store</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/collections">View Collections</a>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Gallery;