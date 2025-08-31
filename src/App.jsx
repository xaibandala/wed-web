import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHeart, FiCalendar, FiMapPin, FiCamera, FiGift, FiMail, FiChevronDown } from 'react-icons/fi';
import OurStory from './pages/ourstory';
import EventDetails from './pages/eventdetails';
import Gallery from './pages/gallery';
import RSVP from './pages/rsvp';
import Sponsorship from "./pages/sponsorship";
import Footer from './components/footer';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'story', 'events', 'gallery', 'rsvp'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-playfair font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            Kevin & Irah
          </motion.div>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex items-center space-x-2"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            {['home', 'story', 'events', 'gallery', 'rsvp'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 group mx-0.5 ${
                  activeSection === item 
                    ? 'text-white bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/30' 
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                }`}
              >
                <span className="relative z-10">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                {activeSection === item && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg -z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/80 hover:bg-gray-100/80 transition-colors duration-200 shadow-sm border border-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-5 h-5 text-gray-700" />
              ) : (
                <FiMenu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
            >
              <div className="px-5 py-3 space-y-2">
                {['home', 'story', 'events', 'gallery', 'rsvp'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full text-left px-5 py-3 rounded-lg transition-all duration-200 flex items-center ${
                      activeSection === item
                        ? 'bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50/80'
                    }`}
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-pink-100 text-pink-600">
                      {item.charAt(0).toUpperCase()}
                    </span>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    {activeSection === item && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-pink-500"></span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            alt="Romantic background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/60 to-gray-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <motion.p 
              className="text-pink-400 text-lg font-medium mb-4 tracking-wider"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We're Getting Married
            </motion.p>
            
            <h1 
              className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight"
            >
              <span className="inline-block">Kevin</span>{' '}
              <span className="text-pink-400">&</span>{' '}
              <span className="inline-block">Irah</span>
            </h1>
            
            <div className="w-20 h-0.5 bg-white/30 mx-auto my-8"></div>
            
            <p 
              className="text-xl text-gray-200 mb-10 font-light tracking-wide"
            >
              June 15, 2024 • Davao, Philippines
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                onClick={() => scrollToSection('rsvp')}
                whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-pink-500 hover:bg-pink-600 text-white rounded-md text-base font-medium transition-all duration-300"
              >
                RSVP Now
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('events')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/20"
              >
                Event Details
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-0 right-0 text-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={() => scrollToSection('gallery')}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-1 group"
          >
            <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">Scroll to explore</span>
            <FiChevronDown className="text-white/70 group-hover:text-white transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <OurStory />

      {/* Event Details Section */}
      <EventDetails />

      {/* Photo Gallery Section */}
      <Gallery />

      {/* RSVP Section */}
      <RSVP />

      {/* Sponsorship Section */}
      <Sponsorship />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;