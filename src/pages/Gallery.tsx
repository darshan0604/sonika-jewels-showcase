import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ImageCarousel from '@/components/ui/image-carousel';
import { X, ChevronLeft, ChevronRight, Share2, MessageCircle, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All work' },
    { id: 'bridal', name: 'Bridal sets' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bangles', name: 'Bangles' },
    { id: 'rings', name: 'Rings' },
    { id: 'traditional', name: 'Traditional' },
  ];

  // Sample gallery items with placeholder data
  const galleryItems = [
    { 
      id: 1, 
      category: 'bridal', 
      title: 'Royal bridal set', 
      description: 'Exquisite 22K gold bridal set with intricate kundan work', 
      featured: true,
      images: [
        { src: '', alt: 'Bridal set view 1' },
        { src: '', alt: 'Bridal set view 2' },
        { src: '', alt: 'Bridal set view 3' }
      ]
    },
    { 
      id: 2, 
      category: 'necklaces', 
      title: 'Heritage necklace', 
      description: 'Traditional gold necklace with temple motifs', 
      featured: true,
      images: [
        { src: '', alt: 'Necklace view 1' },
        { src: '', alt: 'Necklace view 2' }
      ]
    },
    { 
      id: 3, 
      category: 'earrings', 
      title: 'Chandbali earrings', 
      description: 'Elegant chandbali earrings with pearl drops', 
      featured: false,
      images: [
        { src: '', alt: 'Earrings view 1' },
        { src: '', alt: 'Earrings view 2' }
      ]
    },
    { 
      id: 4, 
      category: 'bangles', 
      title: 'Designer bangles set', 
      description: 'Set of 6 matching designer gold bangles', 
      featured: false,
      images: [
        { src: '', alt: 'Bangles view 1' },
        { src: '', alt: 'Bangles view 2' }
      ]
    },
    { 
      id: 5, 
      category: 'bridal', 
      title: 'Polki jewellery set', 
      description: 'Complete polki set for wedding ceremonies', 
      featured: true,
      images: [
        { src: '', alt: 'Polki set view 1' },
        { src: '', alt: 'Polki set view 2' }
      ]
    },
    { 
      id: 6, 
      category: 'rings', 
      title: 'Diamond engagement ring', 
      description: 'Classic solitaire ring with certified diamond', 
      featured: false,
      images: [
        { src: '', alt: 'Ring view 1' },
        { src: '', alt: 'Ring view 2' }
      ]
    },
    { 
      id: 7, 
      category: 'necklaces', 
      title: 'Layered chain set', 
      description: 'Modern layered chain necklace set', 
      featured: false,
      images: [
        { src: '', alt: 'Chain set view 1' },
        { src: '', alt: 'Chain set view 2' }
      ]
    },
    { 
      id: 8, 
      category: 'earrings', 
      title: 'Jhumka collection', 
      description: 'Traditional jhumkas with meenakari work', 
      featured: false,
      images: [
        { src: '', alt: 'Jhumka view 1' },
        { src: '', alt: 'Jhumka view 2' }
      ]
    },
    { 
      id: 9, 
      category: 'traditional', 
      title: 'Temple jewellery', 
      description: 'Sacred designs inspired by temple architecture', 
      featured: true,
      images: [
        { src: '', alt: 'Temple jewellery view 1' },
        { src: '', alt: 'Temple jewellery view 2' }
      ]
    },
    { 
      id: 10, 
      category: 'bangles', 
      title: 'Antique bangles', 
      description: 'Antique finish bangles with stone setting', 
      featured: false,
      images: [
        { src: '', alt: 'Antique bangles view 1' },
        { src: '', alt: 'Antique bangles view 2' }
      ]
    },
    { 
      id: 11, 
      category: 'traditional', 
      title: 'Kundan set', 
      description: 'Royal kundan jewellery with uncut stones', 
      featured: false,
      images: [
        { src: '', alt: 'Kundan set view 1' },
        { src: '', alt: 'Kundan set view 2' }
      ]
    },
    { 
      id: 12, 
      category: 'rings', 
      title: 'Couple rings', 
      description: 'Matching wedding bands with engraving', 
      featured: false,
      images: [
        { src: '', alt: 'Couple rings view 1' },
        { src: '', alt: 'Couple rings view 2' }
      ]
    },
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

  const handleInquiry = (title: string) => {
    const message = encodeURIComponent(
      `Hi Sonika Jewellers! 👋\n\nI'm interested in: *${title}*\n\nPlease share more details and pricing.`
    );
    window.open(`https://wa.me/919016610800?text=${message}`, '_blank');
  };

  const selectedCategoryName = categories.find(c => c.id === selectedCategory)?.name || 'All work';

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Our gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Explore our finest creations and witness the artistry that goes into 
            every piece of jewellery we craft
          </p>
          <Button asChild size="lg" className="btn-luxury">
            <a href="#gallery">View collection</a>
          </Button>
        </div>
      </Hero>

      {/* Gallery Section */}
      <Section id="gallery" size="lg">
        {/* Category Filter */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-8">Browse by category</h2>
          
          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full max-w-xs bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50">
                  {selectedCategoryName}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`cursor-pointer hover:bg-gray-100 ${
                      selectedCategory === category.id ? 'bg-brand-magenta/10 text-brand-magenta' : 'text-gray-900'
                    }`}
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id 
                    ? 'bg-brand-magenta text-white' 
                    : 'bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-brand-magenta'
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid Layout like Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image Carousel */}
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <ImageCarousel images={item.images} className="h-full" />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
                  <p className="text-white font-semibold text-center text-sm md:text-base">{item.title}</p>
                  <p className="text-white/80 text-xs text-center mt-1 hidden md:block">{item.description}</p>
                </div>

                {/* Featured badge */}
                {item.featured && (
                  <Badge className="absolute top-2 right-2 bg-brand-pink text-white text-xs z-10">
                    Featured
                  </Badge>
                )}
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
              className="absolute top-4 right-4 z-10 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              onClick={() => navigateImage('prev')}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={() => navigateImage('next')}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image */}
            <div className="relative max-h-[80vh] aspect-square bg-gradient-brand rounded-xl overflow-hidden">
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
              <Button 
                onClick={() => handleInquiry(filteredItems[selectedImage]?.title || '')}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Inquiry
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
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
            Inspired by our work?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit our showroom to see these beautiful pieces in person and discover 
            how we can create something special just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury">
              <a href="/contact">Visit our store</a>
            </Button>
            <Button asChild size="lg" className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50">
              <a href="/collections">View collections</a>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Gallery;
