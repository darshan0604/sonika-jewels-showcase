import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shadow-luxury">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">Sonika Jewellers</h3>
                <p className="text-white/80">Premium Collections</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Discover the finest collection of gold, diamond, and silver jewellery crafted with
              precision and passion. Your trusted partner for life's precious moments since 1988.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-brand-magenta" />
                <span>Maya Bazar, Golwad Corner, Visnagar, Gujarat 384315</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-brand-magenta" />
                <div className="flex gap-4">
                  <a href="tel:9428663300" className="hover:text-white transition-colors">9428663300</a>
                  <a href="tel:9016610800" className="hover:text-white transition-colors">9016610800</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-brand-magenta" />
                <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Collections', href: '/collections' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Collections</h4>
            <nav className="space-y-3">
              {[
                'Bridal Sets',
                'Diamond Rings',
                'Gold Necklaces',
                'Silver Jewelry',
                'Custom Designs',
                'Traditional Sets',
              ].map((collection) => (
                <Link
                  key={collection}
                  to="/collections"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  {collection}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Special Recognition */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-xl font-display font-semibold mb-3 text-gradient">
              Proud winners of Suvarna Saubhagya Utsav
            </h4>
            <p className="text-white/70 max-w-2xl mx-auto">
              Celebrating our customers' success stories and the joy we've brought to their special moments.
              <Link to="/offers" className="text-brand-pink hover:text-brand-magenta transition-colors ml-1">
                View success stories →
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Sonika Jewellers. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-brand-pink" fill="currentColor" /> for precious moments
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;