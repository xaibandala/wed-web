import React, { useState, useRef } from 'react';
import { FiMail, FiUser, FiUsers, FiMessageSquare, FiSend, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const RSVP = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const serviceId = 'service_0898vp9';
      const templateId = 'template_xkm2obw';
      const publicKey = 'L1UioKMCgUV1axAwP';

      const formEl = form.current;
      const name = formEl.name.value.trim();
      const email = formEl.email.value.trim();
      const guestsRaw = String(formEl.guests.value || '').trim();
      const message = (formEl.message.value || '').trim();

      // Basic validation
      if (!name || !email || !guestsRaw) {
        throw new Error('Please fill out all required fields.');
      }

      // Ensure guests is a valid number
      const guests = parseInt(guestsRaw, 10);
      if (isNaN(guests) || guests < 1) {
        throw new Error('Please enter a valid number of guests (1 or more)');
      }

      // Prepare form data with proper values
      formEl.guests.value = String(guests); // Ensure guests is a proper string
      
      // Add hidden fields for template variables
      const addHiddenField = (name, value) => {
        let input = formEl.querySelector(`input[name="${name}"]`);
        if (!input) {
          input = document.createElement('input');
          input.type = 'hidden';
          input.name = name;
          formEl.appendChild(input);
        }
        input.value = value;
      };
      
      addHiddenField('guest_label', guests === 1 ? '1 guest' : `${guests} guests`);
      addHiddenField('year', String(new Date().getFullYear()));

      // Log form data for debugging
      const formData = new FormData(formEl);
      console.log('Form data:', Object.fromEntries(formData.entries()));

      // Send the form using sendForm
      const result = await emailjs.sendForm(serviceId, templateId, formEl, publicKey);

      console.log('Email sent successfully!', result);
      setIsSuccess(true);
      formEl.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('Email sending failed:', err);
      setError(
        err?.text || err?.message || 'Failed to send RSVP. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <div className="absolute inset-0 opacity-10 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="max-w-3xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-4 mb-6 rounded-full bg-white/10 backdrop-blur-sm"
          >
            <FiMail className="text-3xl text-white" />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200"
          >
            We Hope You Can Join Us
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto"
          >
            Kindly respond by May 1st, 2024
          </motion.p>

          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-md mx-auto bg-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 text-center"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
              <p className="text-green-100">
                Your RSVP has been received. We look forward to celebrating with you!
              </p>
            </motion.div>
          ) : (
            <motion.form
              ref={form}
              onSubmit={handleSubmit}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6 text-left max-w-md mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
            >
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-pink-100/90 mb-1">
                  <FiUser className="inline mr-2 -mt-0.5" />
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 pl-10 py-3 rounded-xl border-0 bg-white/5 text-white placeholder-pink-100/40 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-pink-100/90 mb-1">
                  <FiMail className="inline mr-2 -mt-0.5" />
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 pl-10 py-3 rounded-xl border-0 bg-white/5 text-white placeholder-pink-100/40 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="guests" className="block text-sm font-medium text-pink-100/90 mb-1">
                  <FiUsers className="inline mr-2 -mt-0.5" />
                  Number of Guests *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    max="20"
                    required
                    className="w-full px-4 pl-10 py-3 rounded-xl border-0 bg-white/5 text-white placeholder-pink-100/40 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200"
                    placeholder="Enter number of guests"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-pink-100/90 mb-1">
                  <FiMessageSquare className="inline mr-2 -mt-0.5" />
                  Message (Optional)
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 pl-10 py-3 rounded-xl border-0 bg-white/5 text-white placeholder-pink-100/40 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 resize-none"
                    placeholder="Any dietary restrictions or special requests?"
                  ></textarea>
                </div>
              </div>

              {error && <div className="text-red-400 text-sm text-center -mt-4">{error}</div>}

              <motion.div className="pt-2" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'shadow-lg hover:shadow-xl hover:shadow-pink-500/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Send RSVP</span>
                    </>
                  )}
                </button>
              </motion.div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
