import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const sentence = [
    "I",
    "design",
    "clean,",
    "user-friendly,",
    "and",
    "eye-catching",
    "experiences",
    "that",
    "make",
    "digital",
    "interactions",
    "effortless.",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { filter: "blur(5px)", opacity: 0 },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="about"
      className="container mx-auto px-4 min-h-[80vh] flex items-center justify-center mt-[70px]"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Talha Hanif
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#FF952A] mb-6">
            UI/UX Designer
          </h2>

          {/* Animated blur text */}
          <motion.p
            className="text-gray-400 text-lg mb-8 max-w-lg flex flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sentence.map((word, index) => (
              <motion.span key={index} className="mr-1" variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.p>

          <button onClick={()=>{
            window.open("#services", "_self")
          }} className="bg-gray-700 text-white px-8 py-3 rounded-2xl hover:bg-gray-600 transition-colors">
            Services
          </button>
        </motion.div>

        {/* Hero Image Section */}
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
          className="relative w-full max-w-[450px] md:max-w-[500px] mx-auto md:mx-0 flex justify-center"
        >
          <div className="relative w-[320px] h-[420px] flex justify-center items-end shadow-lg">
            {/* Orange Rounded Background */}
            <div className="left-[31%] bottom-[2%] bg-[#FF952A] rounded-t-[150px] w-[280px] h-[320px] absolute bottom-0 left-0 z-[-1]"></div>

            {/* Hero Image */}
            <img
              src="hero.png"
              alt="Talha Hanif"
              className="h-[440px] w-auto object-contain absolute bottom-0 left-[50%] transform -translate-x-[15%]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
