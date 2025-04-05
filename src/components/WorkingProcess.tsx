import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, Layout, Palette, TestTube, ChevronRight } from "lucide-react";
import "./scroll.css"
const processSteps = [
  { icon: <Search className="w-6 h-6 text-white" />, title: "Research", description: "We start by understanding your goals, target audience, and competitors." },
  { icon: <Layout className="w-6 h-6 text-white" />, title: "Wireframing", description: "We sketch out the structure of your design with wireframes and prototypes." },
  { icon: <Palette className="w-6 h-6 text-white" />, title: "UI Design", description: "Using modern trends, we create user-friendly interfaces with branding consistency." },
  { icon: <TestTube className="w-6 h-6 text-white" />, title: "Testing & Refinement", description: "We test, gather feedback, and refine for a polished experience." },
];

const WorkingProcess = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const [allowVerticalScroll, setAllowVerticalScroll] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Check if the component is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) observer.observe(componentRef.current);

    return () => {
      if (componentRef.current) observer.unobserve(componentRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const handleScroll = (event: WheelEvent | TouchEvent) => {
      const container = scrollContainerRef.current;
      if (!container || allowVerticalScroll) return;

      event.preventDefault();

      // Convert vertical scrolling to horizontal scrolling
      if ("deltaY" in event) {
        container.scrollLeft += (event as WheelEvent).deltaY;
      } else if ("touches" in event) {
        const touch = event.touches[0];
        container.scrollLeft += touch.clientY;
      }

      // Enable vertical scrolling after horizontal scrolling completes
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
        setAllowVerticalScroll(true);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [isInView, allowVerticalScroll]);

  return (
    <div ref={componentRef} className={`py-20 text-white relative ${allowVerticalScroll ? "overflow-auto" : "h-screen overflow-hidden"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Working Process</h2>

        {/* Scrollable Horizontal Container */}
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-6 flex-nowrap overflow-x-auto scrollbar-hide w-full snap-x snap-mandatory"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step Card */}
              <div className="p-6 min-h-[200px] w-72 bg-opacity-100 bg-gradient-to-b from-gray-600 to-[#1111]/80 text-white rounded-lg shadow-lg flex flex-col backdrop-blur-md snap-center">
                <h3 className="text-lg font-bold text-white">Step {index + 1}</h3>
                <h4 className="text-xl font-semibold text-[#FF952A] flex items-center gap-2">
                  {step.title} {step.icon}
                </h4>
                <p className="text-sm mt-2 flex-grow">{step.description}</p>
              </div>

              {/* Arrow (except for the last step) */}
              {index !== processSteps.length - 1 && (
                <ChevronRight className="w-8 h-8 text-[#FF952A] mx-2 hidden md:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkingProcess;
