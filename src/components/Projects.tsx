import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Nutritionic App",
    description: "Health and nutrition tracking platform",
    image: "/1.png",
  },
  {
    title: "Bike Store",
    description: "E-commerce for premium bikes",
    image: "./2.jpg",
  },
  {
    title: "Travel App",
    description: "Adventure planning platform",
    image: "./3.png",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  return (
    <>
      <section id="projects" ref={ref} className="relative h-[300vh]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} scrollProgress={scrollYProgress} cardIndex={index} />
           
          ))}
           <div className="mt-auto flex justify-center items-center ">
        <a
          href="https://www.behance.net/talhahanif"
          className="relative px-6 py-3 text-lg font-medium border border-white rounded-2xl overflow-hidden group"
        >
          <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-black">
            View all Projects →
          </span>
          <span className="absolute inset-0 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
         
        </div>
         
      
      </section>
   
    
    </>
  );
};

export default Projects;
