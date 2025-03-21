import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I get started with your UI/UX services?",
    answer:
      "Simply contact us with your project details, and we'll discuss your goals, timeline, and budget to get started.",
  },
  {
    question: "What tools do you use for UI/UX design?",
    answer: "We use tools like Figma, Adobe XD, Sketch, and more.",
  },
  {
    question: "How long does it take to complete a UI/UX project?",
    answer: "The timeline varies depending on the project scope, but typically it takes 4-8 weeks.",
  },
  {
    question: "Why is UI/UX design important for my business?",
    answer: "Good UI/UX design enhances user experience, increases engagement, and improves conversion rates.",
  },
  {
    question: "Can you redesign my existing website/app?",
    answer: "Yes, we can analyze your current design and enhance it for better user experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-8 underline decoration-primary">
        Here’s some of FAQs
      </h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full text-left py-4 text-lg font-semibold flex justify-between items-center text-orange-500 font-bold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 pb-4"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
