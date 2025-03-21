import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  inView: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
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

export default ProcessStep;