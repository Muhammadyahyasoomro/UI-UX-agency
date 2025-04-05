import React, { useState, useEffect } from "react";
import { Menu, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      setShowScrollTop(window.scrollY > 300);

      // Dynamic active tab based on scroll position
      const sections = ["about", "projects", "services", "process", "design", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full px-6 sm:px-10 py-4 flex justify-between items-center z-50 transition-all duration-300 ${scrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg py-3"
          : "bg-black/80 backdrop-blur-lg shadow-lg py-3"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="text-orange-500 text-2xl font-bold relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Talha Hanif
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </motion.div>

        {/* Desktop Navigation Menu */}
        <div className="hidden sm:flex gap-8">
          {"about projects services process design contact".split(" ").map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                scrollToSection(tab);
              }}
              className={`text-white text-base hover:text-orange-300 transition-all duration-300 relative ${activeTab === tab ? "text-orange-500 font-bold" : ""
                }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <motion.span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500"
                initial={{ scaleX: activeTab === tab ? 1 : 0 }}
                animate={{ scaleX: activeTab === tab ? 1 : 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-white z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Fullscreen Navigation Menu (Mobile) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center gap-12 z-[50] w-full h-screen"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              {"about projects services process design contact".split(" ").map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    scrollToSection(tab);
                    setMenuOpen(false);
                  }}
                  className={`text-white text-3xl hover:text-orange-400 transition-all duration-300 relative ${activeTab === tab ? "text-orange-500 font-bold" : ""
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <motion.span
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500"
                      layoutId="activeTabUnderline"
                    ></motion.span>
                  )}
                </motion.button>
              ))}

              <motion.div
                className="absolute bottom-10 left-0 right-0 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
              >
                <div className="text-gray-400 text-sm">Tap anywhere to close</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Button */}
        <motion.button
          className={`bg-orange-500 text-white px-6 py-2 rounded-lg hidden sm:block transition-all duration-300 ${scrolled ? "hover:bg-orange-600" : "hover:bg-orange-400"
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setActiveTab("contact");
            scrollToSection("contact");
          }}
        >
          Contact
        </motion.button>
      </motion.nav>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-6 right-6 p-3 rounded-full bg-orange-500/80 text-white shadow-lg z-40 hover:bg-orange-600"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;