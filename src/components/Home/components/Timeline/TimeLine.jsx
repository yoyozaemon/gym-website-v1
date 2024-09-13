import React from "react";
import { motion } from "framer-motion";
import { timelineData } from "./Data/Data";

const Timeline = () => (
  <div className="p-4 lg:p-8">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">
      Our History
    </h3>

    {/* Timeline Container */}
    <div className="relative">
      {/* Vertical Line */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400 dark:bg-blue-500 h-full"></div>

      {timelineData.map((event, index) => (
        <motion.div
          key={index}
          className={`relative flex flex-col items-center mb-16 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Year Circle */}
          <div className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-blue-400 dark:bg-blue-500 text-white dark:text-gray-900 flex items-center justify-center text-lg lg:text-xl font-bold border-4 border-white dark:border-gray-900 mb-4 lg:mb-0">
            {event.year}
          </div>
          {/* Content */}
          <div className="flex-grow lg:w-1/2 flex items-center justify-center lg:justify-end lg:order-2 p-4">
            <motion.img
              src={event.image}
              alt={event.title}
              className="rounded-lg shadow-lg max-w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex-grow lg:w-1/2 p-4 lg:p-8 lg:order-1 text-center lg:text-left">
            <h4 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">
              {event.title}
            </h4>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {event.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Timeline;
