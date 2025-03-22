import React, { useRef } from "react";
import { motion } from "framer-motion";
import { DivideIcon as LucideIcon, ArrowRight, ArrowDown } from "lucide-react";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-none w-[300px] bg-dark-secondary p-6 rounded-2xl"
    >
      <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};

const ProcessStepsContainer: React.FC<{ steps: ProcessStepProps[] }> = ({ steps }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-x-auto overflow-y-auto flex gap-6 py-4 px-4 md:hidden"
      style={{ scrollSnapType: "both mandatory", whiteSpace: "nowrap" }}
      onScroll={(e) => {
        const target = e.target as HTMLElement;
        if (target.scrollLeft + target.clientWidth >= target.scrollWidth) {
          target.style.overflowX = "auto";
          target.style.overflowY = "auto";
        }
      }}
    >
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <ProcessStep {...step} index={index} />
          {index < steps.length - 1 && <ArrowRight className="text-gray-400 mx-2" />}
        </div>
      ))}
      <ArrowDown className="text-gray-400 mx-auto mt-4" />
    </div>
  );
};

export default ProcessStepsContainer;
