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
    <section id="services" className="py-20 text-white bg-[#1111]">
      <div className="container mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-orange-400 mb-12"
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group p-8 backdrop-blur-lg bg-gradient-to-br from-gray-800/60 to-gray-700/40
                         rounded-xl shadow-xl border border-gray-700 hover:border-orange-400 transition duration-300"
            >
              {/* Gradient Divider (Except Last One) */}
              {index !== services.length - 1 && (
                <div className="absolute right-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-30"></div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-semibold text-orange-400 mb-5">
                {service.title}
              </h3>

              {/* Service List */}
              <ul className="text-gray-300 text-left space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-orange-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-orange-400/10 opacity-0 group-hover:opacity-10 transition duration-300 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
