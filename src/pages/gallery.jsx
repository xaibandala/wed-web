import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Sample image data with captions
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Our First Date",
    date: "June 2018"
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Summer Vacation",
    date: "August 2019"
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Anniversary Dinner",
    date: "June 2020"
  },
  {
    src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Weekend Getaway",
    date: "March 2021"
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Beach Vacation",
    date: "July 2021"
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Engagement Day",
    date: "December 2021"
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section 
      id="gallery" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A glimpse of our journey together
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {galleryImages.map((item, index) => {
              const delay = index * 0.1;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay,
                    type: 'spring',
                    stiffness: 100
                  }}
                  className="break-inside-avoid mb-6 group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-playfair font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.caption}
                      </h3>
                      <p className="text-gray-200 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        {item.date}
                      </p>
                      <div className="mt-3 flex items-center text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                        <FiCamera className="mr-2" />
                        <span>Click to view</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={28} />
            </button>

            <div className="relative max-w-4xl w-full">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].caption}
                className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-playfair font-semibold">
                  {galleryImages[selectedImage].caption}
                </h3>
                <p className="text-gray-300">{galleryImages[selectedImage].date}</p>
              </div>
            </div>

            {selectedImage > 0 && (
              <button 
                className="absolute left-4 md:left-8 p-2 text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(prev => (prev || 1) - 1);
                }}
              >
                <FiChevronLeft size={40} />
              </button>
            )}

            {selectedImage < galleryImages.length - 1 && (
              <button 
                className="absolute right-4 md:right-8 p-2 text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(prev => (prev === null ? 0 : prev + 1));
                }}
              >
                <FiChevronRight size={40} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;