import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import CardLuxury from '@/components/ui/card-luxury';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Car, Gift, Star, Quote, Calendar, Users, Heart, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Offers = () => {
  const winnerStories2023 = [
    {
      name: "Rajesh Patel Family",
      prize: "Gold jewellery set",
      location: "Visnagar",
      story: "Winning this beautiful jewellery set made our daughter's wedding even more special.",
      image: "winner-1-2023"
    },
    {
      name: "Meera Shah",
      prize: "Diamond necklace", 
      location: "Mehsana",
      story: "The diamond necklace was perfect for my 25th anniversary celebration.",
      image: "winner-2-2023"
    },
    {
      name: "Kiran & Family",
      prize: "Silver collection",
      location: "Visnagar",
      story: "We were thrilled to win this exquisite silver collection during Diwali.",
      image: "winner-3-2023"
    }
  ];

  const winnerStories2024 = [
    {
      name: "Priya Mehta Family",
      prize: "Tata Harrier (Grand Prize)",
      location: "Visnagar",
      story: "Never imagined that buying jewellery for my wedding would also win us our dream car! Sonika Jewellers has truly changed our lives.",
      image: "harrier-winner-2024",
      isGrandPrize: true
    },
    {
      name: "Amit Sharma",
      prize: "Bridal jewellery set",
      location: "Unjha",
      story: "The bridal set we won was exactly what we needed for our son's wedding.",
      image: "winner-2-2024"
    },
    {
      name: "Sunita Joshi",
      prize: "Gold bangles set",
      location: "Visnagar",
      story: "These beautiful gold bangles will be treasured for generations.",
      image: "winner-3-2024"
    }
  ];

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

      {/* 2024 Winners - Grand Prize Section */}
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
        <CardLuxury variant="gradient" className="max-w-4xl mx-auto mb-16" padding="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <Car className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Tata Harrier</h3>
                  <p className="text-white/90">Grand Prize 2024</p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-yellow-500 text-black">Grand Prize Winner</Badge>
              <h3 className="text-3xl font-display font-bold mb-4">Priya Mehta Family</h3>
              <p className="text-lg text-muted-foreground mb-6">Visnagar, Gujarat</p>
              
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <Quote className="w-8 h-8 text-brand-magenta mb-3" />
                <p className="text-lg italic">
                  "Never imagined that buying jewellery for my wedding would also win us our dream car! 
                  Sonika Jewellers has truly changed our lives."
                </p>
              </div>
            </div>
          </div>
        </CardLuxury>

        {/* Other 2024 Winners */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold mb-8">Other 2024 winners</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winnerStories2024.filter(winner => !winner.isGrandPrize).map((winner, index) => (
            <CardLuxury key={index} variant="hover">
              <div className="aspect-[4/3] bg-gradient-brand rounded-xl flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <Trophy className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Winner photo</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-lg">{winner.name}</h4>
                  <p className="text-brand-magenta font-medium">{winner.prize}</p>
                  <p className="text-sm text-muted-foreground">{winner.location}</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <Quote className="w-5 h-5 text-brand-magenta mb-2" />
                  <p className="text-sm italic">"{winner.story}"</p>
                </div>
              </div>
            </CardLuxury>
          ))}
        </div>
      </Section>

      {/* 2023 Success Stories */}
      <Section size="xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500 text-white text-lg px-6 py-2">
            <Calendar className="w-5 h-5 mr-2" />
            2023 Success stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Celebrating 2023 winners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winnerStories2023.map((winner, index) => (
            <CardLuxury key={index} variant="hover">
              <div className="aspect-[4/3] bg-gradient-brand rounded-xl flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <Trophy className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">2023 Winner</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-lg">{winner.name}</h4>
                  <p className="text-brand-magenta font-medium">{winner.prize}</p>
                  <p className="text-sm text-muted-foreground">{winner.location}</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <Quote className="w-5 h-5 text-brand-magenta mb-2" />
                  <p className="text-sm italic">"{winner.story}"</p>
                </div>
              </div>
            </CardLuxury>
          ))}
        </div>
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
            <Button asChild variant="outline" size="lg">
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
