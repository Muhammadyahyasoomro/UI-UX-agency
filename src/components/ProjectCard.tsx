import React from "react";
import { motion, useTransform } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
  scrollProgress: any;
  cardIndex: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, scrollProgress, cardIndex }) => {
  // Control opacity and Y position for stacking effect
  const opacity = useTransform(scrollProgress, [cardIndex * 0.2, (cardIndex + 1) * 0.2], [1, 1]); // Always 1
  const y = useTransform(scrollProgress, [cardIndex * 0.2, (cardIndex + 1) * 0.2], [290, 0]); // Moves into position
  
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute top-0  transform -translate-x-1/2 w-[75vw] bg-dark-secondary rounded-2xl overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
