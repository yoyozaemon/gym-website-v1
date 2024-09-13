import React from "react";
import { motion } from "framer-motion";
import TimeLine from "../Timeline/TimeLine";

const aboutUsImage = "https://via.placeholder.com/400";

const AboutUs = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col mt-8 space-y-16 lg:space-y-24"
  >
    <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="lg:w-1/2 p-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          About Us
        </h3>
        <p className="text-base sm:text-lg md:text-xl mb-4">
          At <strong>Yo Fitness Gym</strong>, we are passionate about helping
          individuals achieve their personal fitness goals. We offer a diverse
          range of programs tailored to meet the needs of people of all fitness
          levels. Whether you are just starting your fitness journey or looking
          to take your training to the next level, our gym offers
          state-of-the-art equipment, personalized training programs, and group
          classes led by professional trainers.
        </p>
      </div>
      <div className="lg:w-1/2 p-4 flex justify-center items-center">
        <motion.img
          src={aboutUsImage}
          alt="About Us"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
    <TimeLine />
  </motion.div>
);

export default AboutUs;
