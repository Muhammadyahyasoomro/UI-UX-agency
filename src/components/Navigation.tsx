import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav className="top-0 left-0 w-full px-6 sm:px-10 py-4 flex justify-between items-center backdrop-blur-md z-50 relative">
      {/* Logo */}
      <div className="text-orange-500 text-2xl font-bold">Oneclick</div>

      {/* Mobile Menu Toggle */}
      <button className="sm:hidden text-white z-[60]" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Fullscreen Navigation Menu (Mobile) */}
      <div
        className={`fixed inset-0 bg-[#111111] flex flex-col items-center justify-center gap-8 transition-all duration-300 z-[50] w-full h-screen ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {"about projects services".split(" ").map((tab) => (
          <a
            key={tab}
            href={`#${tab}`}
            onClick={() => {
              setActiveTab(tab);
              setMenuOpen(false); // Close menu on click
            }}
            className="text-white text-2xl sm:text-base hover:text-gray-300 transition relative"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500"></span>}
          </a>
        ))}
      </div>

      {/* Contact Button (Always visible on larger screens) */}
      <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-400 transition hidden sm:block">
        Contact
      </button>
    </nav>
  );
};

export default Navigation;
