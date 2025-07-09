import React, { useState } from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { iconVarient } from "../utils/motion";

const Tech = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTooltipToggle = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-wrap justify-center gap-8 p-10 md:max-w-6xl mx-auto will-change-transform"
    >
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="relative group cursor-pointer"
          onClick={() => handleTooltipToggle(index)}
        >
          {/* Tooltip - Hover for Desktop, Click for Mobile */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 scale-75 opacity-0 group-hover:translate-y-[-40px] group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-blue-400 text-white text-xs px-3 py-1 rounded-md
              ${
                activeTooltip === index
                  ? "opacity-100 scale-100 translate-y-[-40px]"
                  : ""
              }`}
          >
            {tech.name}
            {/* Triangle effect */}
            <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-blue-400 transform -translate-x-1/2"></div>
          </div>

          {/* Tech Icon - Moves up and down at different speeds */}
          <motion.div
            variants={iconVarient(tech.speed || 0.05)}
            initial="initial"
            animate="animate"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 md:w-20 h-20 object-contain transition transform hover:scale-110"
            />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Tech;
