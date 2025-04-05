import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface MilestoneProps {
  number: number;
  label: string;
}
const Milestone: React.FC<MilestoneProps> = ({ number, label }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[#2C2C2C] to-[#1F1F1F] px-6 py-8 shadow-lg w-32 h-32 "
    >
      <div className="mb-3 text-sm text-center text-white font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
        {label}
      </div>
      <motion.div
        className="text-4xl font-bold text-[#FF952A] mb-1"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {inView && (
          <CountUp
            start={0}
            end={number}
            duration={2.5}
            delay={0.3}
            easingFn={(t, b, c, d) => {
              t /= d;
              return -c * t * (t - 2) + b;
            }}
          />
        )}
        +
      </motion.div>
    </div>
  );
};

const Milestones = () => {
  return (
    
    <div className="py-20 relative">
     
      <motion.h2
        className="text-3xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        From Vision to Victory - Our Milestones
      </motion.h2>

     
      <div className="flex justify-center items-center gap-8 flex-wrap">
        <Milestone number={12} label="Projects" />
        <Milestone number={7} label="Clients" />
        <Milestone number={2} label="Years" />
      </div>
    </div>
  );
};

export default Milestones;
