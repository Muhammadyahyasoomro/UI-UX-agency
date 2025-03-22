import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Search, Layout, Palette, TestTube } from "lucide-react";

const processSteps = [
  { icon: <Search className="w-6 h-6 text-white" />, title: "Research", description: "We start by understanding your goals, target audience, and competitors." },
  { icon: <Layout className="w-6 h-6 text-white" />, title: "Wireframing", description: "We sketch out the structure of your design with wireframes and prototypes." },
  { icon: <Palette className="w-6 h-6 text-white" />, title: "UI Design", description: "Using modern trends, we create user-friendly interfaces with branding consistency." },
  { icon: <TestTube className="w-6 h-6 text-white" />, title: "Testing & Refinement", description: "We test, gather feedback, and refine for a polished experience." },
];

const WorkingProcess = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start({ x: "0%" });
    } else {
      controls.start({ x: "100%" });
    }
  }, [isInView, controls]);

  return (
    <div ref={sectionRef} className="py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Working Process</h2>

        {/* Scrollable Horizontal Container */}
        <div className=" overflow-hidden overflow-x-auto w-full">
          <motion.div
            className="flex gap-6 flex-nowrap min-w-max"
            initial={{ x: "100%" }}
            animate={controls}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="p-6 min-h-[250px] w-72 bg-gradient-to-b from-white/30 to-white/10 text-white rounded-lg shadow-lg flex flex-col"
              >
                <h3 className="text-lg font-bold text-white">Step {index + 1}</h3>
                <h4 className="text-xl font-semibold text-orange-400 flex items-center gap-2">
                  {step.title} {step.icon}
                </h4>
                <p className="text-sm mt-2 flex-grow">{step.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
