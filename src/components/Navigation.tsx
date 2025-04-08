import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down and not at the top
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 sm:px-10 py-4 flex justify-between items-center backdrop-blur-md z-50 bg-[#111111] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="text-[#FF952A] text-2xl font-bold">Talha Hanif</div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-8">
        {["about", "projects", "services"].map((tab) => (
          <a
            key={tab}
            href={`#${tab}`}
            onClick={() => setActiveTab(tab)}
            className={`text-white text-base hover:text-gray-300 transition relative ${
              activeTab === tab ? "text-[#FF952A] font-bold" : ""
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF952A]"></span>
            )}
          </a>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="sm:hidden text-white z-[60]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#111111] flex flex-col items-center justify-center gap-8 transition-all duration-300 z-[50] w-full h-screen ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {["about", "projects", "services"].map((tab) => (
          <a
            key={tab}
            href={`#${tab}`}
            onClick={() => {
              setActiveTab(tab);
              setMenuOpen(false);
            }}
            className="text-white text-2xl sm:text-base hover:text-gray-300 transition relative"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF952A]"></span>
            )}
          </a>
        ))}
      </div>

      {/* Contact Button */}
      <button className="bg-[#FF952A] text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition hidden sm:block">
        Contact
      </button>
    </nav>
  );
};

export default Navigation;
