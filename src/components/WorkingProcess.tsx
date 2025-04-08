import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Layout, Palette, TestTube, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scroll.css";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "Research",
    description: "We start by understanding your goals, target audience, and competitors.",
  },
  {
    icon: <Layout className="w-6 h-6 text-white" />,
    title: "Wireframing",
    description: "We sketch out the structure of your design with wireframes and prototypes.",
  },
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "UI Design",
    description: "Using modern trends, we create user-friendly interfaces with branding consistency.",
  },
  {
    icon: <TestTube className="w-6 h-6 text-white" />,
    title: "Testing & Refinement",
    description: "We test, gather feedback, and refine for a polished experience.",
  },
];

const WorkingProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollWrapperRef.current;
    if (!container || !scrollContent) return;

    const sections = gsap.utils.toArray(scrollContent.children);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollContent.scrollWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden text-white">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Working Process</h2>

        <div
          ref={scrollWrapperRef}
          className="flex flex-nowrap px-2"
        >
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center min-w-[50vw]">
              {/* Step Card */}
              <div className="p-4 w-full max-w-sm bg-gradient-to-b from-gray-600 to-[#1111]/80 text-white rounded-lg shadow-lg flex flex-col backdrop-blur-md">
                <h3 className="text-lg font-bold">Step {index + 1}</h3>
                <h4 className="text-xl font-semibold text-[#FF952A] flex items-center gap-2">
                  {step.title} {step.icon}
                </h4>
                <p className="text-sm mt-2">{step.description}</p>
              </div>

              {/* Arrow */}
              {index !== processSteps.length - 1 && (
                <ChevronRight className="w-6 h-6 text-[#FF952A] mx-2 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
