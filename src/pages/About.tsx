import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import CardLuxury from '@/components/ui/card-luxury';
import { Button } from '@/components/ui/button';
import { Award, Users, Gem, Heart, Star, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Premium quality",
      description: "We source only the finest materials and employ skilled craftsmen to create jewellery that lasts generations."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal touch",
      description: "Every piece is crafted with love and attention to detail, making your special moments even more memorable."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trusted legacy",
      description: "Years of serving the Visnagar community with integrity, quality, and exceptional customer service."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer first",
      description: "Your satisfaction is our priority. We work closely with you to bring your vision to life."
    }
  ];

  const stats = [
    { number: "37", label: "Years of excellence", icon: <Clock className="w-6 h-6" /> },
    { number: "15000+", label: "Happy customers", icon: <Users className="w-6 h-6" /> },
    { number: "5", label: "Star Google rating", icon: <Star className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Our story
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            A legacy of craftsmanship, trust, and creating precious memories 
            for families across Gujarat
          </p>
          <Button asChild size="lg" className="btn-luxury">
            <Link to="/collections">Explore collections</Link>
          </Button>
        </div>
      </Hero>

      {/* Story Section */}
      <Section size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
              Crafting dreams since 1988
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Sonika Jewellers began as a dream to bring the finest jewellery to the heart of Visnagar. 
                Located at Maya Bazar, Golwad Corner, we've been serving our community with dedication 
                and passion for over three decades.
              </p>
              <p>
                Our journey started with a simple belief: every piece of jewellery should tell a story, 
                celebrate a moment, and become a treasured heirloom. From traditional wedding sets to 
                contemporary designs, we've been part of countless precious moments.
              </p>
              <p>
                What sets us apart is our commitment to quality, personalized service, and understanding 
                that jewellery is more than just an accessory—it's an expression of love, celebration, 
                and milestone moments in life.
              </p>
            </div>
          </div>
          <div className="relative">
            <CardLuxury variant="glass" className="overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-brand rounded-xl flex items-center justify-center border-4 border-brand-magenta">
                <div className="text-center text-white">
                  <Gem className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-medium">Store image</p>
                  <p className="text-sm opacity-80">Beautiful storefront & interior</p>
                </div>
              </div>
            </CardLuxury>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section variant="accent" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our values
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <CardLuxury key={index} variant="hover" className="text-center h-full">
              <div className="text-brand-magenta mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </CardLuxury>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section size="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
            Our achievement
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <CardLuxury key={index} variant="gradient" className="text-center">
              <div className="text-brand-magenta mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold font-display mb-2 text-gradient">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </CardLuxury>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="accent" size="lg">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to create your story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit our showroom and discover the perfect piece for your special moment
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:opacity-90">
              <a href="https://www.instagram.com/sonikajewellers_?igsh=NDRqNmFncGcxaWIy" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <a href="https://maps.app.goo.gl/5hKXpc6EGeGciZos7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location
              </a>
            </Button>
            <Button asChild size="lg" className="bg-brand-magenta hover:bg-brand-purple text-white">
              <Link to="/contact" className="flex items-center gap-2">
                Visit our store
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <a href="https://wa.me/919016610800" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-blue text-white">
              <a href="tel:9016610800" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call now
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
