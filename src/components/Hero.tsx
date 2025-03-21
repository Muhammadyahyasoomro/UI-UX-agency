import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Talha Hanif
          </h1>
          <h2 className="text-4xl font-bold text-primary mb-6">
            UI/UX Designer
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I design clean, user-friendly, and eye-catching experiences that make digital interactions effortless.
          </p>
          <button className="bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-600 transition-colors">
            Services
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=60"
              alt="Featured Project"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;