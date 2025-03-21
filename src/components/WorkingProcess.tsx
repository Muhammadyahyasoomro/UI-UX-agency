import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Search, Layout, Palette, TestTube } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "Research",
    description:
      "We start by understanding your goals, target audience, and competitors. Through user research and analysis, we create user personas and plan the best experience.",
  },
  {
    icon: <Layout className="w-6 h-6 text-white" />,
    title: "Wireframing",
    description:
      "We sketch out the structure of your design with wireframes and build interactive prototypes. This helps visualize the user journey before finalizing the design.",
  },
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "UI Design & Branding",
    description:
      "Using the latest design trends, we create visually appealing, user-friendly interfaces. We ensure consistency with brand identity, colors, typography, and interactive elements.",
  },
  {
    icon: <TestTube className="w-6 h-6 text-white" />,
    title: "Testing & Refinement",
    description:
      "We test the design with real users, gather feedback, and refine it for the best experience. Our goal is to deliver a polished, intuitive, and engaging product.",
  },
];

const WorkingProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of section is visible
  });

  return (
    <div ref={ref} className="py-20 overflow-hidden text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Working Process</h2>
        
        {/* Cards in a row */}
        <motion.div
          className="flex space-x-6 justify-center items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }, // Delay between cards
            },
          }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-6 w-80 bg-gradient-to-b from-white/30 to-white/10 text-white rounded-lg shadow-lg"
              variants={{
                hidden: { opacity: 0, x: -50 }, // Start off-screen (left)
                visible: { opacity: 1, x: 0 }, // Move to normal position
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-lg font-bold text-white">Step {index + 1}</h3>
              <h4 className="text-xl font-semibold text-orange-400 flex items-center gap-2">
                {step.title} {step.icon}
              </h4>
              <p className="text-sm mt-2">{step.description}</p>
              {index !== processSteps.length - 1 && (
                <span className="absolute top-1/2 right-[-12px] text-2xl text-white">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkingProcess;
