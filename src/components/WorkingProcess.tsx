import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "./ui/carousel";
import Heading from "./ui/Heading";

const processSteps = [
  {
    title: "Research", button: "Explore Research", src: "reasearch.png",
  },
  { title: "Wireframing", button: "Explore Wireframing", src: "wireframing.png", },
  { title: "UI Design", button: "Explore UI", src: "ui.jpg", },
  { title: "Testing & Refinement", button: "Explore Testing", src: "testing.png", },
];

const WorkingProcess = () => {
  // Convert processSteps to the format expected by the Carousel component

  return (
    <div id="process" className="py-20 text-white relative">
      <div className="container mx-auto px-4">
        <Heading text="Working Process" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden w-full h-full pb-16"
        >
          <Carousel slides={processSteps} />
        </motion.div>
      </div>
    </div>
  );
};

export default WorkingProcess;