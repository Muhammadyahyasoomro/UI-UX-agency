import React, { useState } from "react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("about"); // Default active tab

  return (
    <nav className=" top-0 left-0 w-full px-10 py-4 flex justify-between items-center backdrop-blur-md">
      {/* Logo */}
      <div className="text-orange-500 text-2xl font-bold">Oneclick</div>

      {/* Navigation Links (Centered) */}
      <div className="flex gap-10 items-center justify-center flex-1">
        {["about", "projects", "services"].map((tab) => (
          <a
            key={tab}
            href={`#${tab}`}
            onClick={() => setActiveTab(tab)}
            className="relative text-white hover:text-gray-300 transition"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500"></span>
            )}
          </a>
        ))}
      </div>

      {/* Contact Button */}
      <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-400 transition">
        Contact
      </button>
    </nav>
  );
};

export default Navigation;
