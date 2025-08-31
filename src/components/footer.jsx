import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16" 
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="100"
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
            Kevin & Irah
          </h3>
          <p className="text-pink-200/80 mb-10 text-lg font-light tracking-wide">
            June 15, 2024 • Davao, Philippines
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-sm text-gray-400 font-light tracking-wide">
            &copy; {new Date().getFullYear()} Kevin & Irah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;