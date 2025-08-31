import React from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiDollarSign, FiCreditCard, FiGift } from 'react-icons/fi';

const Sponsorship = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here if needed
    alert('Copied to clipboard!');
  };

  const paymentMethods = [
    {
      id: 'gcash',
      name: 'GCash',
      number: '0917 123 4567',
      account: 'Juan Dela Cruz',
      icon: <FiCreditCard className="w-5 h-5" />
    },
    {
      id: 'bpi',
      name: 'BPI',
      number: '1234 5678 9012',
      account: 'Juan Dela Cruz',
      icon: <FiDollarSign className="w-5 h-5" />
    },
    {
      id: 'paypal',
      name: 'PayPal',
      email: 'juan@example.com',
      icon: <FiGift className="w-5 h-5" />
    }
  ];

  return (
    <section 
      id="sponsor"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Support Our Journey
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your generous support means the world to us as we start this new chapter together. 
            Every contribution helps make our dreams come true.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* QR Code Card */}
          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-4 bg-white rounded-xl">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://example.com/donate" 
                alt="Scan to Donate" 
                className="w-full h-auto rounded-lg mx-auto"
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Scan the QR code to make a donation
            </p>
          </motion.div>

          {/* Payment Methods */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Alternative Payment Methods
            </h3>
            
            {paymentMethods.map((method) => (
              <motion.div 
                key={method.id}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-pink-50 rounded-lg text-pink-500">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{method.name}</h4>
                      <p className="text-sm text-gray-600">
                        {method.number || method.email}
                        {method.account && ` • ${method.account}`}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(method.number || method.email)}
                    className="p-2 text-gray-400 hover:text-pink-500 transition-colors"
                    aria-label={`Copy ${method.name} details`}
                  >
                    <FiCopy className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}

            <div className="pt-4 text-sm text-gray-500">
              <p>Thank you for your generous support! ❤️</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
