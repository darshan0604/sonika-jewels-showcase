import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import CardLuxury from '@/components/ui/card-luxury';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, ArrowRight, Sparkles, Crown, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Collections', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'bridal', name: 'Bridal Sets', icon: <Crown className="w-4 h-4" /> },
    { id: 'diamond', name: 'Diamond Jewelry', icon: <Diamond className="w-4 h-4" /> },
    { id: 'gold', name: 'Gold Collections', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'silver', name: 'Silver Pieces', icon: <Heart className="w-4 h-4" /> },
    { id: 'traditional', name: 'Traditional Sets', icon: <Crown className="w-4 h-4" /> },
  ];

  const collections = [
    {
      id: 1,
      name: "Royal Bridal Collection",
      category: "bridal",
      price: "₹2,50,000 - ₹15,00,000",
      description: "Exquisite bridal sets featuring intricate designs and premium craftsmanship",
      features: ["22K Gold", "Kundan Work", "Traditional Design", "Custom Sizing"],
      popular: true
    },
    {
      id: 2,
      name: "Diamond Elegance",
      category: "diamond",
      price: "₹1,50,000 - ₹8,00,000",
      description: "Stunning diamond jewelry perfect for special occasions and celebrations",
      features: ["Certified Diamonds", "18K Gold Setting", "Modern Design", "Lifetime Polish"],
      popular: true
    },
    {
      id: 3,
      name: "Heritage Gold Collection",
      category: "gold",
      price: "₹80,000 - ₹5,00,000",
      description: "Timeless gold jewelry inspired by traditional craftsmanship",
      features: ["22K Gold", "Antique Finish", "Handcrafted", "BIS Hallmarked"]
    },
    {
      id: 4,
      name: "Contemporary Silver",
      category: "silver",
      price: "₹15,000 - ₹1,50,000",
      description: "Modern silver jewelry perfect for everyday elegance",
      features: ["925 Silver", "Rhodium Plated", "Contemporary Style", "Tarnish Resistant"]
    },
    {
      id: 5,
      name: "Temple Jewelry Collection",
      category: "traditional",
      price: "₹1,20,000 - ₹6,00,000",
      description: "Sacred designs inspired by temple architecture and traditional motifs",
      features: ["Temple Design", "Antique Gold", "Gemstone Setting", "Religious Motifs"]
    },
    {
      id: 6,
      name: "Designer Wedding Sets",
      category: "bridal",
      price: "₹3,00,000 - ₹20,00,000",
      description: "Exclusive designer wedding jewelry for the discerning bride",
      features: ["Exclusive Design", "Premium Stones", "Custom Made", "Designer Collection"]
    }
  ];

  const filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(collection => collection.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Our Collections
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover exquisite jewelry pieces crafted with passion and precision, 
            perfect for every occasion and celebration
          </p>
          <Button asChild size="lg" className="btn-luxury">
            <Link to="/contact">Schedule Appointment</Link>
          </Button>
        </div>
      </Hero>

      {/* Category Filter */}
      <Section size="md">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
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
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-brand rounded-xl mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Diamond className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm opacity-80">Collection Image</p>
                  </div>
                </div>
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Heart className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>

                {/* Popular badge */}
                {collection.popular && (
                  <Badge className="absolute top-4 right-4 bg-brand-pink text-white">
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

                {/* CTA */}
                <Button asChild className="w-full group-hover:bg-brand-magenta group-hover:text-white transition-colors">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
            Create Your Custom Design
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a unique vision? Our skilled craftsmen can bring your dream jewelry to life 
            with personalized designs and expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury">
              <Link to="/contact">Start Custom Design</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View Past Work</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Collections;