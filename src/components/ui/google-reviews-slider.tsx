import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  name: string;
  rating: number;
  text: string;
  time: string;
}

const reviews: Review[] = [
  {
    name: "Rajesh Patel",
    rating: 5,
    text: "Excellent collection and very trustworthy. Best jewellery shop in Visnagar!",
    time: "2 months ago"
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Beautiful designs and great customer service. Highly recommended for bridal jewellery.",
    time: "1 month ago"
  },
  {
    name: "Amit Kumar",
    rating: 5,
    text: "Quality products at fair prices. The staff is very helpful and knowledgeable.",
    time: "3 weeks ago"
  },
  {
    name: "Sunita Joshi",
    rating: 5,
    text: "Purchased my wedding set from here. Amazing craftsmanship and designs!",
    time: "1 month ago"
  },
  {
    name: "Kiran Mehta",
    rating: 5,
    text: "Trusted jewellers for generations. Best gold and diamond collection in the area.",
    time: "2 weeks ago"
  },
  {
    name: "Deepak Shah",
    rating: 5,
    text: "Won Tata Harrier in Suvarna Saubhagya! Best experience ever. Thank you Sonika Jewellers!",
    time: "1 month ago"
  }
];

const GoogleReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-xl p-6 shadow-soft overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
          <div>
            <p className="font-semibold text-foreground">Google Reviews</p>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">(200+ reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white text-sm font-bold">
                  {reviews[currentIndex].name[0]}
                </div>
                <div>
                  <p className="font-medium text-sm">{reviews[currentIndex].name}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">{reviews[currentIndex].time}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm italic">"{reviews[currentIndex].text}"</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-brand-magenta' : 'bg-muted'
            }`}
            aria-label={`Go to review ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GoogleReviewsSlider;
