import React from "react";
import { motion } from "framer-motion";

const aboutUsImage = "https://via.placeholder.com/400";

const AboutUs = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col lg:flex-row mt-8"
  >
    {/* About Us Content */}
    <div className="lg:w-1/2 p-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        About Us
      </h3>
      <p className="text-base sm:text-lg md:text-xl mb-4">
        At FitnessPro Gym, our mission is to empower individuals to lead
        healthier lives. Our experienced trainers and state-of-the-art
        facilities are dedicated to helping you achieve your fitness goals. We
        offer personalized training programs, group classes, and nutritional
        guidance to support you on your journey.
      </p>
    </div>
    {/* About Us Image */}
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
  </motion.div>
);

export default AboutUs;
