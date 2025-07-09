import React from "react";
import { motion } from "framer-motion";
import { sectionCard } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      className="perspective-2500"
      variants={sectionCard(index * 0.3)} // Pass a delay based on the index
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="w-[160px] h-[180px] sm:w-[200px] sm:h-[250px]
        md:w-[200px] md:h-[220px] relative
        rounded-2xl flex justify-center items-center
        group hover:transform hover:translate-y-[-5%] 
        hover:rotate-x-[25deg] hover:translate-z-0
        transition-all duration-500"
      >
        {/* Wrapper for the main content with shadow on hover */}
        <div
          className="absolute inset-0 bg-tertiary rounded-2xl 
          transition-all duration-500 z-10
          group-hover:shadow-[2px_35px_32px_-8px_rgba(0,0,0,0.75)]"
        >
          {/* Gradient overlay that appears on hover - top */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 
            transition-all duration-500 rounded-t-2xl
            bg-gradient-to-t from-transparent via-[rgba(12,13,19,0.5)] to-[rgba(12,13,19,1)]"
          ></div>

          {/* Gradient overlay that appears on hover - bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-0 
            group-hover:h-[60px] opacity-100 transition-all duration-500 rounded-b-2xl
            bg-gradient-to-b from-transparent via-[rgba(12,13,19,0.5)] to-[rgba(12,13,19,1)]"
          ></div>
        </div>

        {/* Content that moves up on hover */}
        <div
          className="flex flex-col items-center justify-center p-5 sm:p-6 md:p-10 
          transition-transform duration-500 z-20 
          group-hover:translate-z-[100px] group-hover:translate-y-[-20px]"
        >
          {/* Image with grow and yellow glow effect on hover */}
          <div className="relative transition-all duration-500">
            <img
              src={icon}
              alt=""
              className="h-12 w-12 sm:h-14 sm:w-14 transition-all duration-500
                group-hover:h-[120px] group-hover:w-[170px] 
                group-hover:filter group-hover:drop-shadow-yellow"
            />
          </div>
          <h3 className="text-center text-[14px] sm:text-[16px] mt-3">
            {title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
