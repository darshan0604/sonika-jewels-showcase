import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Offers', href: '/offers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-teal/90 backdrop-blur-md border-b border-white/20 shadow-glass">
      <div className="container mx-auto px-4">
        {/* Top contact bar - hidden on mobile */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-white/10">
          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Maya Bazar, Golwad Corner, Visnagar, Gujarat 384315</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9016610800" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium">
              <Phone className="w-4 h-4" />
              <span>9016610800</span>
            </a>
            <a href="tel:9428663300" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>9428663300</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shadow-luxury overflow-hidden">
              <span className="text-2xl font-bold text-white font-display">S</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-display font-bold text-white">Sonika Jewellers</h1>
              <p className="text-sm text-white/80">Premium jewellery since 1988</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient-brand rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="luxury" size="lg">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-white bg-white/10 rounded-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/5 rounded-lg'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20">
                <Button asChild variant="luxury" size="lg" className="w-full">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
