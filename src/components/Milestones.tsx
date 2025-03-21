import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MilestoneProps {
  number: string;
  label: string;
}

const Milestone: React.FC<MilestoneProps> = ({ number, label }) => (
  <div className="text-center px-8">
    <motion.div 
      className="text-4xl font-bold text-primary mb-2"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {number}
    </motion.div>
    <div className="text-gray-400">{label}</div>
  </div>
);

const Milestones = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      
      <div 
        ref={ref}
        className="flex justify-center items-center gap-8 flex-wrap"
      >
        <Milestone number="12+" label="Projects" />
        <Milestone number="7+" label="Clients" />
        <Milestone number="2+" label="Years" />
      </div>
    </div>
  );
};

export default Milestones;