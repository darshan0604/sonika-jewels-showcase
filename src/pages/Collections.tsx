import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import CardLuxury from '@/components/ui/card-luxury';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ImageCarousel from '@/components/ui/image-carousel';
import { ArrowRight, Sparkles, Crown, Diamond, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All collections', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'bridal', name: 'Bridal jewellery', icon: <Crown className="w-4 h-4" /> },
    { id: 'kalkatti', name: 'Kalkatti jewellery', icon: <Diamond className="w-4 h-4" /> },
    { id: 'heritage', name: 'Heritage jewellery', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'kundan', name: 'Kundan jewellery', icon: <Crown className="w-4 h-4" /> },
    { id: 'jadtar', name: 'Jadtar jewellery', icon: <Diamond className="w-4 h-4" /> },
    { id: 'lightweight', name: 'Light weight jewellery', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'traditional', name: 'Traditional jewellery', icon: <Crown className="w-4 h-4" /> },
    { id: 'papercasting', name: 'Paper casting jewellery', icon: <Diamond className="w-4 h-4" /> },
    { id: 'rosegold', name: 'Rose gold jewellery', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'diamond', name: 'Diamond jewellery', icon: <Diamond className="w-4 h-4" /> },
    { id: 'silver', name: 'Silver jewellery', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const collections = [
    {
      id: 1,
      name: "Bridal jewellery",
      category: "bridal",
      price: "₹2,50,000 onwards",
      description: "Exquisite bridal sets featuring intricate designs and premium craftsmanship for your special day",
      features: ["22K Gold", "Kundan Work", "Traditional Design", "Custom Sizing"],
      popular: true,
      images: [
        { src: '', alt: 'Bridal set 1' },
        { src: '', alt: 'Bridal set 2' },
        { src: '', alt: 'Bridal set 3' }
      ]
    },
    {
      id: 2,
      name: "Kalkatti jewellery",
      category: "kalkatti",
      price: "₹1,50,000 onwards",
      description: "Traditional Kalkatti designs with exquisite craftsmanship and timeless appeal",
      features: ["Pure Gold", "Traditional Design", "Handcrafted", "BIS Hallmarked"],
      popular: true,
      images: [
        { src: '', alt: 'Kalkatti 1' },
        { src: '', alt: 'Kalkatti 2' }
      ]
    },
    {
      id: 3,
      name: "Heritage jewellery",
      category: "heritage",
      price: "₹1,80,000 onwards",
      description: "Classic heritage designs passed down through generations with timeless elegance",
      features: ["Antique Finish", "Heritage Design", "Premium Gold", "Unique Pieces"],
      images: [
        { src: '', alt: 'Heritage 1' },
        { src: '', alt: 'Heritage 2' }
      ]
    },
    {
      id: 4,
      name: "Kundan jewellery",
      category: "kundan",
      price: "₹2,00,000 onwards",
      description: "Royal Kundan jewellery with uncut gemstones and intricate gold work",
      features: ["Kundan Stones", "22K Gold", "Royal Design", "Handcrafted"],
      popular: true,
      images: [
        { src: '', alt: 'Kundan 1' },
        { src: '', alt: 'Kundan 2' }
      ]
    },
    {
      id: 5,
      name: "Jadtar jewellery",
      category: "jadtar",
      price: "₹1,75,000 onwards",
      description: "Exquisite Jadtar work featuring precious stones set in gold with meticulous detail",
      features: ["Jadtar Work", "Precious Stones", "Gold Setting", "Traditional"],
      images: [
        { src: '', alt: 'Jadtar 1' },
        { src: '', alt: 'Jadtar 2' }
      ]
    },
    {
      id: 6,
      name: "Light weight jewellery",
      category: "lightweight",
      price: "₹50,000 onwards",
      description: "Elegant and comfortable everyday wear jewellery with modern designs",
      features: ["Light Weight", "Daily Wear", "Modern Design", "Comfortable"],
      images: [
        { src: '', alt: 'Light weight 1' },
        { src: '', alt: 'Light weight 2' }
      ]
    },
    {
      id: 7,
      name: "Traditional jewellery",
      category: "traditional",
      price: "₹1,20,000 onwards",
      description: "Classic traditional designs celebrating Indian heritage and culture",
      features: ["Traditional Design", "Cultural Motifs", "Premium Quality", "Handcrafted"],
      images: [
        { src: '', alt: 'Traditional 1' },
        { src: '', alt: 'Traditional 2' }
      ]
    },
    {
      id: 8,
      name: "Paper casting jewellery",
      category: "papercasting",
      price: "₹80,000 onwards",
      description: "Intricate paper casting technique creating detailed and unique pieces",
      features: ["Paper Casting", "Intricate Detail", "Unique Design", "Lightweight"],
      images: [
        { src: '', alt: 'Paper casting 1' },
        { src: '', alt: 'Paper casting 2' }
      ]
    },
    {
      id: 9,
      name: "Rose gold jewellery",
      category: "rosegold",
      price: "₹60,000 onwards",
      description: "Trendy rose gold pieces with contemporary designs for modern fashion",
      features: ["Rose Gold", "Contemporary", "Trendy Design", "Premium Finish"],
      images: [
        { src: '', alt: 'Rose gold 1' },
        { src: '', alt: 'Rose gold 2' }
      ]
    },
    {
      id: 10,
      name: "Diamond jewellery",
      category: "diamond",
      price: "₹1,00,000 onwards",
      description: "Brilliant certified diamonds set in elegant gold and platinum designs",
      features: ["Certified Diamonds", "18K Gold", "Modern Design", "Lifetime Polish"],
      popular: true,
      images: [
        { src: '', alt: 'Diamond 1' },
        { src: '', alt: 'Diamond 2' }
      ]
    },
    {
      id: 11,
      name: "Silver jewellery",
      category: "silver",
      price: "₹5,000 onwards",
      description: "Premium silver jewellery with modern and traditional designs",
      features: ["925 Silver", "Rhodium Plated", "Contemporary", "Tarnish Resistant"],
      images: [
        { src: '', alt: 'Silver 1' },
        { src: '', alt: 'Silver 2' }
      ]
    }
  ];

  const filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(collection => collection.category === selectedCategory);

  const handleInquiry = (collectionName: string, features: string[]) => {
    const message = encodeURIComponent(
      `Hi Sonika Jewellers! 👋\n\nI'm interested in: *${collectionName}*\n\nFeatures: ${features.join(', ')}\n\nPlease share more details and pricing.`
    );
    window.open(`https://wa.me/919016610800?text=${message}`, '_blank');
  };

  const selectedCategoryName = categories.find(c => c.id === selectedCategory)?.name || 'All collections';

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Our collections
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover exquisite jewellery pieces crafted with passion and precision, 
            perfect for every occasion and celebration
          </p>
          <Button asChild size="lg" className="btn-luxury">
            <Link to="/contact">Schedule appointment</Link>
          </Button>
        </div>
      </Hero>

      {/* Category Filter */}
      <Section size="md">
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
                    className={`flex items-center gap-2 cursor-pointer hover:bg-gray-100 ${
                      selectedCategory === category.id ? 'bg-brand-magenta/10 text-brand-magenta' : 'text-gray-900'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id 
                    ? 'bg-brand-magenta text-white' 
                    : 'bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-brand-magenta'
                }`}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection) => (
            <CardLuxury key={collection.id} variant="hover" className="group">
              {/* Image Carousel */}
              <div className="relative mb-6">
                <ImageCarousel images={collection.images} className="rounded-xl" />
                
                {/* Popular badge */}
                {collection.popular && (
                  <Badge className="absolute top-4 right-4 bg-brand-pink text-white z-10">
                    Popular
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                  <p className="text-brand-magenta font-semibold text-lg">{collection.price}</p>
                </div>

                <p className="text-muted-foreground">{collection.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {collection.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {collection.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{collection.features.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* CTA - Inquiry via WhatsApp */}
                <Button 
                  onClick={() => handleInquiry(collection.name, collection.features)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Inquiry now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardLuxury>
          ))}
        </div>
      </Section>

      {/* Custom Design CTA */}
      <Section variant="accent" size="lg">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Create your custom design
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a unique vision? Our skilled craftsmen can bring your dream jewellery to life 
            with personalized designs and expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury">
              <Link to="/contact">Start custom design</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50">
              <Link to="/gallery">View past work</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Collections;
