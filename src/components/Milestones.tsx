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
    <div ref={ref} className="text-center px-8">
      <motion.div
        className="text-4xl font-bold text-primary mb-2"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {inView && (
          <CountUp
            start={0}
            end={number}
            duration={2.5} // Slow finishing speed
            delay={0.3} // Small delay for effect
            easingFn={(t, b, c, d) => {
              // Custom easing function for slowing effect
              t /= d;
              return -c * t * (t - 2) + b;
            }}
          />
        )}
        +
      </motion.div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

const Milestones = () => {
  return (
    <div className="py-20">
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
