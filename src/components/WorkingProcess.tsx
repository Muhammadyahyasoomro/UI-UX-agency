import { motion } from "framer-motion";
import { Carousel } from "./Carousel";
import Heading from "./Heading";

const processSteps = [
  {
    title: "Research", button: "Explore Research", src: "/carousel/research.jpg",
  },
  { title: "Wireframing", button: "Explore Wireframing", src: "/carousel/WireFraming.png", },
  { title: "UI Design", button: "Explore UI", src: "/carousel/UIDesign.png", },
  { title: "Testing & Refinement", button: "Explore Testing", src: "/carousel/testing.png", },
];

const WorkingProcess = () => {
  // Convert processSteps to the format expected by the Carousel component

  return (
    <div id="process" className="py-20 text-white relative">
      <div className="container mx-auto px-4">
        <Heading text="Design Process" />

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
