import React from "react";
import { motion } from "framer-motion";
import { timelineData } from "./Data/Data";

const Timeline = () => (
  <div className="p-6 lg:p-12 bg-gray-100 dark:bg-gray-900">
    <h3 className="text-2xl md:text-4xl font-bold mb-12 text-blue-500 text-center">
      Our History
    </h3>

    {/* Timeline Container */}
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>

      {/* Timeline Items */}
      {timelineData.map((event, index) => (
        <motion.div
          key={index}
          className={`relative flex items-center ${
            index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
          } mb-12 lg:mb-16`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.4,
            type: "spring",
            stiffness: 80,
          }}
        >
          {/* Timeline Content */}
          <div
            className={`flex items-center ${
              index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
            } lg:ml-16 lg:mr-16`}
          >
            {/* Content Card */}
            <motion.div
              className={`relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 w-full max-w-md transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "lg:ml-6" : "lg:mr-6"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <motion.img
                src={event.image}
                alt={event.title}
                className="rounded-lg mb-4 max-w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              />

              {/* Text Content */}
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {event.title}
              </h4>
              <p className="text-base text-gray-600 dark:text-gray-300">
                {event.description}
              </p>
            </motion.div>

            {/* Year Circle */}
            <motion.div
              className={`absolute w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-blue-500 dark:bg-blue-600 text-white font-bold text-lg border-4 border-white flex items-center justify-center ${
                index % 2 === 0
                  ? "left-[-1.5rem] lg:left-[-2rem]"
                  : "right-[-1.5rem] lg:right-[-2rem]"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              {event.year}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Timeline;
