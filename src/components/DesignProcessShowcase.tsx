"use client";
import React from "react";
import {
  Search,
  Layout,
  Palette,
  TestTube,
  Users,
  Zap,
  Figma,
  IterationCw,
} from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteMovingProcessCards } from "./InfiniteProcessingCards";
export function DesignProcessShowcase() {
  const designProcess = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "User Research",
      description:
        "Deep dive into user behaviors, needs & pain points through interviews and analytics.",
      bg: "bg-gradient-to-br from-indigo-900/80 to-purple-900/80",
    },
    {
      icon: <Search className="w-8 h-8 text-orange-500" />,
      title: "Competitive Analysis",
      description:
        "Evaluate market landscape to identify opportunities and differentiators.",
      bg: "bg-gradient-to-br from-cyan-900/80 to-blue-900/80",
    },
    {
      icon: <Layout className="w-8 h-8 text-orange-500" />,
      title: "Information Architecture",
      description:
        "Structure content logically for intuitive navigation and findability.",
      bg: "bg-gradient-to-br from-emerald-900/80 to-teal-900/80",
    },
    {
      icon: <Figma className="w-8 h-8 text-orange-500" />,
      title: "Wireframing",
      description:
        "Create low-fidelity blueprints to establish layout and functionality.",
      bg: "bg-gradient-to-br from-amber-900/80 to-yellow-900/80",
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      title: "UI Design",
      description:
        "Craft visually appealing interfaces with brand-aligned aesthetics.",
      bg: "bg-gradient-to-br from-rose-900/80 to-pink-900/80",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Prototyping",
      description: "Build interactive models to test flows and interactions.",
      bg: "bg-gradient-to-br from-violet-900/80 to-purple-900/80",
    },
    {
      icon: <TestTube className="w-8 h-8 text-orange-500" />,
      title: "Usability Testing",
      description:
        "Validate designs with real users to uncover improvement areas.",
      bg: "bg-gradient-to-br from-sky-900/80 to-cyan-900/80",
    },
    {
      icon: <IterationCw className="w-8 h-8 text-orange-500" />,
      title: "Iterative Refinement",
      description: "Continuously improve based on feedback and data insights.",
      bg: "bg-gradient-to-br from-lime-900/80 to-emerald-900/80",
    },
  ];

  return (
    <section id="design" className="relative  overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-orange-500">Design</span> Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A human-centered approach that transforms problems into elegant,
            functional solutions.
          </p>
        </motion.div>

        <div className="h-[16rem] relative">
          <InfiniteMovingProcessCards
            items={designProcess}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            cardComponent={(item) => (
              <div
                className={`${item.bg} p-6 rounded-2xl h-full w-[350px] border border-white/10 backdrop-blur-md shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-4 right-4 text-xs text-white/50">
                  UI/UX Process
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
