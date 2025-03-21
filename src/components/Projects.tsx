import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (projectsInView) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden"; // Stop scrolling
      controls.start("animate").then(() => {
        setIsAnimating(false);
        document.body.style.overflow = "auto"; // Resume scrolling after animation
      });
    }
  }, [projectsInView, controls]);

  return (
    <section ref={projectsRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center gap-2 text-primary"
          >
            View all Projects <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Project Cards Animation */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.5, ease: "easeOut" },
            },
          }}
          className="flex flex-col gap-8 items-center"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
