import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { Button } from './button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 glassmorphism rounded-2xl border-brand-magenta/30"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="relative">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="peer w-full border-b-2 border-border bg-transparent pt-4 pb-1.5 text-foreground placeholder-transparent focus:border-brand-magenta focus:outline-none transition-colors"
          placeholder="Full Name"
          required
        />
        <label
          htmlFor="name"
          className="absolute left-0 -top-3.5 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-magenta"
        >
          Full Name *
        </label>
      </div>

      {/* Email Field */}
      <div className="relative">
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="peer w-full border-b-2 border-border bg-transparent pt-4 pb-1.5 text-foreground placeholder-transparent focus:border-brand-magenta focus:outline-none transition-colors"
          placeholder="Email Address"
          required
        />
        <label
          htmlFor="email"
          className="absolute left-0 -top-3.5 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-magenta"
        >
          Email Address *
        </label>
      </div>

      {/* Phone Field */}
      <div className="relative">
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="peer w-full border-b-2 border-border bg-transparent pt-4 pb-1.5 text-foreground placeholder-transparent focus:border-brand-magenta focus:outline-none transition-colors"
          placeholder="Phone Number"
        />
        <label
          htmlFor="phone"
          className="absolute left-0 -top-3.5 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-magenta"
        >
          Phone Number
        </label>
      </div>

      {/* Message Field */}
      <div className="relative">
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="peer w-full border-b-2 border-border bg-transparent pt-4 pb-1.5 text-foreground placeholder-transparent focus:border-brand-magenta focus:outline-none resize-none transition-colors"
          placeholder="Your Message"
          required
        />
        <label
          htmlFor="message"
          className="absolute left-0 -top-3.5 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-magenta"
        >
          Your Message *
        </label>
      </div>

      {/* Submit Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          type="submit"
          variant="luxury"
          size="lg"
          className="w-full"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Message
        </Button>
      </motion.div>
    </form>
  );
};

export default ContactForm;