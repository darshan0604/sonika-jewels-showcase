import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import CardLuxury from '@/components/ui/card-luxury';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Car, Quote, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Offers = () => {
  const grandPrize2024 = {
    name: "Priya Mehta Family",
    prize: "Tata Harrier (Grand Prize)",
    location: "Visnagar",
    story: "Never imagined that buying jewellery for my wedding would also win us our dream car! Sonika Jewellers has truly changed our lives.",
    image: "harrier-winner-2024"
  };

  const grandPrize2023 = {
    name: "Rajesh Patel Family",
    prize: "Gold jewellery set (Grand Prize)",
    location: "Visnagar",
    story: "Winning this beautiful jewellery set made our daughter's wedding even more special. Thank you Sonika Jewellers!",
    image: "winner-1-2023"
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-yellow-500 text-black text-lg px-6 py-2">
            <Trophy className="w-5 h-5 mr-2" />
            Suvarna Saubhagya Utsav
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Special offers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Celebrating our customers' joy and success through our special reward program
          </p>
        </div>
      </Hero>

      {/* 2024 Grand Prize Winner */}
      <Section variant="accent" size="xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500 text-black text-lg px-6 py-2">
            <Calendar className="w-5 h-5 mr-2" />
            2024 Grand prize winner
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Tata Harrier winner
          </h2>
        </div>

        {/* Grand Prize Winner Hero Card */}
        <CardLuxury variant="gradient" className="max-w-4xl mx-auto" padding="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Car className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Tata Harrier</h3>
                  <p className="text-white/90">Grand Prize 2024</p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-yellow-500 text-black">Grand Prize Winner</Badge>
              <h3 className="text-3xl font-display font-bold mb-4">{grandPrize2024.name}</h3>
              <p className="text-lg text-muted-foreground mb-6">{grandPrize2024.location}, Gujarat</p>
              
              <div className="bg-white/10 rounded-lg p-6">
                <Quote className="w-8 h-8 text-brand-magenta mb-3" />
                <p className="text-lg italic">
                  "{grandPrize2024.story}"
                </p>
              </div>
            </div>
          </div>
        </CardLuxury>
      </Section>

      {/* 2023 Grand Prize Winner */}
      <Section size="xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500 text-white text-lg px-6 py-2">
            <Calendar className="w-5 h-5 mr-2" />
            2023 Grand prize winner
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Celebrating 2023 winner
          </h2>
        </div>

        <CardLuxury variant="gradient" className="max-w-4xl mx-auto" padding="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-[4/3] bg-gradient-brand rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Trophy className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Gold Jewellery Set</h3>
                  <p className="text-white/90">Grand Prize 2023</p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-500 text-white">Grand Prize Winner</Badge>
              <h3 className="text-3xl font-display font-bold mb-4">{grandPrize2023.name}</h3>
              <p className="text-lg text-muted-foreground mb-6">{grandPrize2023.location}, Gujarat</p>
              
              <div className="bg-white/10 rounded-lg p-6">
                <Quote className="w-8 h-8 text-brand-magenta mb-3" />
                <p className="text-lg italic">
                  "{grandPrize2023.story}"
                </p>
              </div>
            </div>
          </div>
        </CardLuxury>
      </Section>

      {/* CTA Section */}
      <Section variant="accent" size="lg">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Be part of our next success story
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit Sonika Jewellers today and become part of our growing family of happy customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury">
              <Link to="/collections">Shop now</Link>
            </Button>
            <Button asChild size="lg" className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50">
              <Link to="/contact">Visit our store</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Offers;
