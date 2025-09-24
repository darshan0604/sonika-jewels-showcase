import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import CardLuxury from '@/components/ui/card-luxury';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Clock, Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Store",
      details: ["Maya Bazar, Golwad Corner", "Visnagar, Gujarat 384315"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["9428663300", "9016610800"],
      action: "Call Now"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Store Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: Closed"],
      action: "Plan Visit"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@sonikajewellers.com", "sales@sonikajewellers.com"],
      action: "Send Email"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Ready to find your perfect piece? Visit our showroom or get in touch with our jewelry experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury">
              <a href="tel:9428663300">Call Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <a href="#contact-form">Send Message</a>
            </Button>
          </div>
        </div>
      </Hero>

      {/* Contact Information */}
      <Section size="lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you find the perfect jewelry for your special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <CardLuxury key={index} variant="hover" className="text-center h-full">
              <div className="text-brand-magenta mb-4 flex justify-center">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
              <div className="space-y-1 mb-4">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">
                {info.action}
              </Button>
            </CardLuxury>
          ))}
        </div>
      </Section>

      {/* Map and Contact Form */}
      <Section variant="accent" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <CardLuxury variant="glass">
            <div className="aspect-[4/3] bg-gradient-brand rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Store Location</h3>
                <p className="text-white/90">Interactive map will be embedded here</p>
                <p className="text-sm text-white/80 mt-2">Maya Bazar, Golwad Corner, Visnagar</p>
              </div>
            </div>
          </CardLuxury>

          {/* Contact Form */}
          <CardLuxury variant="default" id="contact-form">
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Send us a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What are you interested in?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements, preferred styles, budget range, or any questions you have..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-luxury">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardLuxury>
        </div>
      </Section>

      {/* Quick Actions */}
      <Section size="lg">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold mb-8">
            Prefer Direct Contact?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <a href="tel:9428663300" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: 9428663300
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:9016610800" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: 9016610800
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/919428663300" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;