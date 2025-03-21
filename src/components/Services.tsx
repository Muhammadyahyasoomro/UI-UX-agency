import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design Services",
    items: [
      "Website UI/UX Design",
      "Mobile App UI/UX Design",
      "Web App UI/UX Design",
      "Dashboard & Admin Panel Design",
      "Landing Page Design",
    ],
  },
  {
    title: "UX Research & Strategy",
    items: [
      "User Research & Analysis",
      "Competitor Analysis",
      "Wireframing & Prototyping",
      "Usability Testing",
      "UX Audits & Improvements",
    ],
  },
  {
    title: "Branding & Visual Design",
    items: [
      "Logo & Brand Identity Design",
      "Design Systems & Style Guides",
      "Icon & Illustration Design",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-orange-400 mb-10"
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className={`p-6  backdrop-blur-md rounded-xl shadow-lg 
      border-r-2 border-transparent relative`}
    >
      {/* Gradient Divider */}
      {index !== services.length - 1 && (
        <div className="absolute right-0 top-6 bottom-3 w-[2px] bg-gradient-to-b from-gray-800 via-gray-200 to-gray-800 opacity-40"></div>
      )}
      
      <h3 className="text-xl font-semibold text-orange-400 mb-4">
        {service.title}
      </h3>
      <ul className="text-gray-300 text-left space-y-2">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-center">
            <span className="mr-2 text-orange-400">_</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;
