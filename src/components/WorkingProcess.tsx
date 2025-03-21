import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, Layout, Palette, TestTube } from 'lucide-react';
import ProcessStep from './ProcessStep';

const processSteps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Research",
    description: "We start by understanding your goals, target audience, and competitors. Through user research and analysis, we create user personas and plan the best experience."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Wireframing",
    description: "We sketch out the structure of your design with wireframes and build interactive prototypes. This helps visualize the user journey before finalizing the design."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI Design & Branding",
    description: "Using the latest design trends, we create visually appealing, user-friendly interfaces. We ensure consistency with brand identity, colors, typography, and interactive elements."
  },
  {
    icon: <TestTube className="w-6 h-6" />,
    title: "Testing & Refinement",
    description: "We test the design with real users, gather feedback, and refine it for the best experience. Our goal is to deliver a polished, intuitive, and engaging product."
  }
];

const WorkingProcess = () => {
  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={processRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Working Process</h2>
        <div className="flex space-x-6">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              index={index}
              inView={processInView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;