import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiCalendar, FiMapPin, FiCoffee } from 'react-icons/fi';
import { useState } from 'react';
import { FaHeart, FaCalendarAlt, FaGlassCheers } from 'react-icons/fa';

const OurStory = () => {
  const timelineItems = [
    {
      date: "June 2018",
      title: "First Meeting",
      description: "We met at a mutual friend's birthday party and instantly connected over our love for travel and good food.",
      icon: <FaHeart className="text-xl" />,
      color: 'from-pink-500 to-rose-500',
    },
    {
      date: "December 2019",
      title: "First Date",
      description: "Our first official date at a cozy little Italian restaurant. The tiramisu was amazing, but the company was even better.",
      icon: <FaCalendarAlt className="text-xl" />,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      date: "March 2023",
      title: "The Proposal",
      description: "On a beautiful sunset beach in Bali, Xai got down on one knee and asked the most important question of our lives.",
      icon: <FaGlassCheers className="text-xl" />,
      color: 'from-amber-500 to-pink-500',
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section 
      id="story" 
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')]"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-medium text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Our Love Story
          </h2>
          <p className="text-lg text-gray-600">
            Every love story is beautiful, but ours is my favorite. Here's a glimpse of our journey together.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Animated timeline line */}
            <motion.div 
              className="hidden md:block absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-amber-200 transform -translate-x-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            ></motion.div>

            {/* Timeline items */}
            <div className="space-y-16 md:space-y-32">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative group cursor-pointer`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
                      <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-lg overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500"></div>
                        <div className="pl-5">
                          <div className="flex items-center mb-3">
                            <span className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                              {item.date}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot and icon */}
                  <div className="hidden md:flex flex-col items-center w-32 flex-shrink-0 px-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white z-10 shadow-lg ${
                        activeIndex === index 
                          ? 'scale-110 ring-4 ring-opacity-30 transform transition-all duration-300' 
                          : ''
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${item.color.split(' ')[0].replace('from-', '#')}, ${item.color.split(' ')[1].replace('to-', '#')})`,
                        boxShadow: activeIndex === index ? `0 10px 25px -5px ${item.color.split(' ')[0].replace('from-', '')}80` : 'none'
                      }}
                    >
                      {React.cloneElement(item.icon, {
                        ...item.icon.props,
                        className: `text-2xl transition-transform duration-300 ${
                          activeIndex === index ? 'scale-110' : ''
                        } ${item.icon.props.className || ''}`
                      })}
                    </motion.div>
                    {index < timelineItems.length - 1 && (
                      <motion.div 
                        className={`h-16 w-0.5 bg-gradient-to-b ${item.color} mt-4`}
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      />
                    )}
                  </div>
                  
                  <div className="md:w-5/12 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile timeline */}
          <div className="md:hidden mt-12 space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10"
              >
                <div 
                  className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${item.color} rounded-full`}
                ></div>
                <div 
                  className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center text-white -ml-3`}
                  style={{
                    background: `linear-gradient(135deg, ${item.color.split(' ')[0].replace('from-', '#')}, ${item.color.split(' ')[1].replace('to-', '#')})`,
                  }}
                >
                  {item.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <span className="inline-block text-sm font-medium text-pink-600 mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;