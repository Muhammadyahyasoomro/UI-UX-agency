import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="about" className="container mx-auto px-4 min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Talha Hanif</h1>
          <h2 className="text-6xl font-bold text-orange-500 mb-6">
            UI/UX Designer
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I design clean, user-friendly, and eye-catching experiences that
            make digital interactions effortless.
          </p>
          <button className="bg-gray-700 text-white px-8 py-3 rounded-2xl hover:bg-gray-600 transition-colors">
            Services
          </button>
        </motion.div>

        {/* Animated Image with Irregular Cut Effect */}
        <motion.div
          initial={{
            clipPath: "polygon(20% 0%, 100% 10%, 80% 100%, 0% 90%)",
            opacity: 0,
          }}
          animate={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="relative w-full max-h-[500px] rounded-2xl overflow-hidden"
        >
          <img
            src="hero.jpg"
            alt="Talha Hanif"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
