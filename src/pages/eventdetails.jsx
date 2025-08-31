import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiCalendar, FiClock, FiMap } from 'react-icons/fi';
import { FaGlassCheers, FaChurch } from 'react-icons/fa';

const EventDetails = () => {
  const events = [
    {
      title: "Wedding Ceremony",
      time: "4:00 PM",
      date: "June 15, 2024",
      location: "Uluwatu Cliff Chapel",
      address: "Jl. Raya Uluwatu, Pecatu, Kuta Sel., Badung, Bali 80361, Indonesia",
      icon: <FaChurch className="text-white" />,
    },
    {
      title: "Reception",
      time: "6:00 PM",
      date: "June 15, 2024",
      location: "The Mulia Resort",
      address: "Jl. Raya Nusa Dua Selatan, Kawasan Sawangan, Nusa Dua, Bali 80363, Indonesia",
      icon: <FaGlassCheers className="text-white" />,
    },
  ];

  return (
    <section 
      id="events" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Event Details
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join us as we celebrate our love and begin our journey together as husband and wife.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-primary-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center text-2xl mb-6 shadow-lg">
                    {event.icon}
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8">
                        <FiClock className="text-primary-500 mt-1" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8">
                        <FiCalendar className="text-primary-500 mt-1" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">{event.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8">
                        <FiMapPin className="text-primary-500 mt-1" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{event.location}</p>
                        <p className="text-sm text-gray-500 mt-1">{event.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button 
                    className="mt-8 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-pink-500 text-white rounded-full text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Calendar
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="mt-20 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative inline-block">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-2 relative z-10">
              Getting There
            </h3>
            <div className="absolute bottom-1 left-0 w-full h-3 bg-pink-100 -z-0 opacity-70"></div>
          </div>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Find your way to our celebration with ease. We look forward to seeing you there!
          </p>
          
          <div className="max-w-5xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="h-80 md:h-[32rem] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31575.29918423153!2d115.1498469!3d-8.8169843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244bc39bb0a1b%3A0x3e00f6e7a6dd0e90!2sUluwatu%20Cliff%20Chapel!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Wedding Location"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent flex items-end justify-center pb-4">
                <a 
                  href="https://maps.google.com/maps?q=Uluwatu+Cliff+Chapel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-white text-gray-800 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200"
                >
                  <FiMap className="text-primary-500" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;