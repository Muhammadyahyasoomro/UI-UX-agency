import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Nutritionic App",
    description: "Health and nutrition tracking platform",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Bike Store",
    description: "E-commerce for premium bikes",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Travel App",
    description: "Adventure planning platform",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=60",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  return (
    <section id="projects" ref={ref} className="relative h-[300vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} scrollProgress={scrollYProgress} cardIndex={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
