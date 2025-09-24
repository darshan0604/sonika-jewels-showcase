import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import CardLuxury from '@/components/ui/card-luxury';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Car, Gift, Star, Quote, Calendar, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuvarnaSaubhagya = () => {
  const winnerStories2023 = [
    {
      name: "Rajesh Patel Family",
      prize: "Gold Jewelry Set",
      location: "Visnagar",
      story: "Winning this beautiful jewelry set made our daughter's wedding even more special.",
      image: "winner-1-2023"
    },
    {
      name: "Meera Shah",
      prize: "Diamond Necklace", 
      location: "Mehsana",
      story: "The diamond necklace was perfect for my 25th anniversary celebration.",
      image: "winner-2-2023"
    },
    {
      name: "Kiran & Family",
      prize: "Silver Collection",
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
      story: "Never imagined that buying jewelry for my wedding would also win us our dream car! Sonika Jewellers has truly changed our lives.",
      image: "harrier-winner-2024",
      isGrandPrize: true
    },
    {
      name: "Amit Sharma",
      prize: "Bridal Jewelry Set",
      location: "Unjha",
      story: "The bridal set we won was exactly what we needed for our son's wedding.",
      image: "winner-2-2024"
    },
    {
      name: "Sunita Joshi",
      prize: "Gold Bangles Set",
      location: "Visnagar",
      story: "These beautiful gold bangles will be treasured for generations.",
      image: "winner-3-2024"
    },
    {
      name: "Ravi Pandya Family",
      prize: "Custom Design Voucher",
      location: "Mehsana",
      story: "The custom design voucher allowed us to create unique pieces for our family.",
      image: "winner-4-2024"
    }
  ];

  const testimonials = [
    {
      name: "Priya Mehta",
      text: "Sonika Jewellers doesn't just sell jewelry, they create dreams. Winning the Tata Harrier was life-changing!",
      rating: 5
    },
    {
      name: "Rajesh Patel",
      text: "The quality of jewelry and the trust they've built in our community is unmatched. The Suvarna Saubhagya program is amazing!",
      rating: 5
    },
    {
      name: "Meera Shah",
      text: "From the moment we entered their store, we felt like family. The surprise of winning made our experience unforgettable.",
      rating: 5
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
            Winner Stories
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Suvarna Saubhagya Utsav
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Celebrating our customers' joy and success through our special reward program. 
            Your happiness is our greatest achievement.
          </p>
          <Button asChild size="lg" className="btn-luxury">
            <Link to="/collections">Join the Celebration</Link>
          </Button>
        </div>
      </Hero>

      {/* Program Overview */}
      <Section size="lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
            What is Suvarna Saubhagya Utsav?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Our special customer appreciation program where every purchase brings you closer to winning 
            amazing prizes. From beautiful jewelry pieces to grand prizes like cars, we celebrate 
            your trust in us with unforgettable rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardLuxury variant="hover" className="text-center">
            <Gift className="w-12 h-12 text-brand-magenta mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Amazing Prizes</h3>
            <p className="text-muted-foreground">From jewelry collections to cars, every prize is carefully selected to bring joy to our customers.</p>
          </CardLuxury>
          
          <CardLuxury variant="hover" className="text-center">
            <Users className="w-12 h-12 text-brand-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Community Celebration</h3>
            <p className="text-muted-foreground">Bringing families and communities together through shared moments of joy and celebration.</p>
          </CardLuxury>
          
          <CardLuxury variant="hover" className="text-center">
            <Heart className="w-12 h-12 text-brand-pink mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Customer Appreciation</h3>
            <p className="text-muted-foreground">Our way of saying thank you for trusting us with your most precious moments.</p>
          </CardLuxury>
        </div>
      </Section>

      {/* 2024 Winners - Grand Prize Section */}
      <Section variant="accent" size="xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500 text-black text-lg px-6 py-2">
            <Calendar className="w-5 h-5 mr-2" />
            2024 Grand Prize Winner
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Tata Harrier Winner
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
                  "Never imagined that buying jewelry for my wedding would also win us our dream car! 
                  Sonika Jewellers has truly changed our lives. The trust and quality they provide 
                  goes beyond just jewelry - they create lasting happiness."
                </p>
              </div>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/collections">Shop with Us</Link>
              </Button>
            </div>
          </div>
        </CardLuxury>

        {/* Other 2024 Winners */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold mb-8">Other 2024 Winners</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winnerStories2024.filter(winner => !winner.isGrandPrize).map((winner, index) => (
            <CardLuxury key={index} variant="hover">
              <div className="aspect-[4/3] bg-gradient-brand rounded-xl flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <Trophy className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Winner Photo</p>
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
            2023 Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Celebrating 2023 Winners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Looking back at the joy and happiness we shared with our 2023 Suvarna Saubhagya Utsav winners
          </p>
        </div>

        <div className="space-y-12">
          {winnerStories2023.map((winner, index) => (
            <CardLuxury key={index} variant="glass">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-[4/3] bg-gradient-brand rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Trophy className="w-16 h-16 mx-auto mb-3" />
                      <h4 className="text-lg font-bold">2023 Winner</h4>
                      <p className="text-white/90">{winner.name}</p>
                    </div>
                  </div>
                </div>
                
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">{winner.name}</h3>
                    <p className="text-brand-magenta font-semibold text-lg">{winner.prize}</p>
                    <p className="text-muted-foreground">{winner.location}</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <Quote className="w-6 h-6 text-brand-magenta mb-3" />
                    <p className="text-lg italic">"{winner.story}"</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Badge variant="secondary">2023 Winner</Badge>
                    <Badge variant="outline">Verified Customer</Badge>
                  </div>
                </div>
              </div>
            </CardLuxury>
          ))}
        </div>
      </Section>

      {/* Customer Testimonials */}
      <Section variant="accent" size="lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What Our Winners Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our Suvarna Saubhagya Utsav winners about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <CardLuxury key={index} variant="hover" className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-brand-magenta mx-auto mb-4" />
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">Verified Winner</p>
            </CardLuxury>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section size="lg">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Be Part of Our Next Success Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit Sonika Jewellers today and become part of our growing family of happy customers. 
            Your next purchase could be your winning moment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury">
              <Link to="/collections">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Visit Our Store</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default SuvarnaSaubhagya;
