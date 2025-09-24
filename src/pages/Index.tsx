import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import CardLuxury from '@/components/ui/card-luxury';
import AnimatedSection from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gem, Star, Award, ArrowRight, Phone, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  const features = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Finest materials and expert craftsmanship in every piece we create"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Trusted Since Years",
      description: "Serving Visnagar with integrity and building lasting relationships"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Service",
      description: "Recognized for excellence in customer satisfaction and quality"
    }
  ];

  const collections = [
    {
      name: "Bridal Collections",
      description: "Exquisite wedding jewelry sets for your special day",
      highlight: "Starting ₹2,50,000"
    },
    {
      name: "Diamond Jewelry",
      description: "Brilliant diamonds in contemporary and classic settings",
      highlight: "Certified & Authentic"
    },
    {
      name: "Traditional Sets",
      description: "Timeless designs inspired by Indian heritage",
      highlight: "Handcrafted Beauty"
    },
    {
      name: "Custom Designs",
      description: "Personalized jewelry crafted to your vision",
      highlight: "Made Just for You"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-2" />
              Premium Jewelry Since Years
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sonika
            <span className="block bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent">
              Jewellers
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover exquisite jewelry collections crafted with passion and precision. 
            From timeless classics to contemporary designs, we create pieces that celebrate 
            your most precious moments.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild size="lg" variant="luxury">
              <Link to="/collections">Explore Collections</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/suvarna-saubhagya">Winner Stories</Link>
            </Button>
          </motion.div>
        </div>
      </Hero>

      {/* Features Section */}
      <Section size="xl">
        <AnimatedSection className="text-center mb-16" animation="fadeUp">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why Choose Sonika Jewellers?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that passion, quality, and trust can make
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeUp" 
              delay={index * 0.2}
              className="h-full"
            >
              <CardLuxury variant="hover" className="text-center h-full">
                <div className="text-brand-magenta mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardLuxury>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Collections Preview */}
      <Section variant="accent" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our Signature Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each collection tells a story, crafted to perfection for life's special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <CardLuxury key={index} variant="hover" className="text-center group">
              <div className="aspect-square bg-gradient-brand rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <Gem className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm opacity-80">Collection Preview</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{collection.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{collection.description}</p>
              <Badge variant="outline" className="mb-4">{collection.highlight}</Badge>
              <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-brand-magenta group-hover:text-white transition-colors">
                <Link to="/collections">View Collection</Link>
              </Button>
            </CardLuxury>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" animation="scale">
          <Button asChild size="lg" variant="luxury">
            <Link to="/collections" className="flex items-center gap-2">
              View All Collections
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </Section>

      {/* Suvarna Saubhagya Highlight */}
      <Section size="xl">
        <CardLuxury variant="gradient" className="max-w-4xl mx-auto text-center" padding="xl">
          <Badge className="mb-6 bg-yellow-500 text-black text-lg px-6 py-2">
            ✨ Special Program
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Suvarna Saubhagya Utsav Winners
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Celebrating our customers' success! From beautiful jewelry to life-changing prizes like 
            the Tata Harrier, discover the joy our winners have experienced.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="luxury">
              <Link to="/suvarna-saubhagya">View Winner Stories</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/collections">Join the Celebration</Link>
            </Button>
          </div>
        </CardLuxury>
      </Section>

      {/* Contact CTA */}
      <Section variant="accent" size="lg">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Visit Our Showroom
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-6 h-6 text-brand-magenta" />
              <div>
                <p className="font-medium">Maya Bazar, Golwad Corner</p>
                <p className="text-sm">Visnagar, Gujarat 384315</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-6 h-6 text-brand-magenta" />
              <div>
                <p className="font-medium">9428663300 / 9016610800</p>
                <p className="text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
          <AnimatedSection animation="fadeUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="luxury">
                <Link to="/contact">Get Directions</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="tel:9428663300">Call Now</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
