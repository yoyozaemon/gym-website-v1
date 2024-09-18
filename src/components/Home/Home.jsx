import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import homeVideo from "../../assets/homepage-video.mp4";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/info-section");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-contain"
        src={homeVideo}
        autoPlay
        muted
        loop
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-start h-full relative z-10 pl-8 pr-8" // Added pr-8 for mobile view
      >
        <div className="text-white mt-12 max-w-lg">
          {" "}
          {/* Added max-w-lg for better text alignment */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400"
          >
            Welcome to Yo Fitness Gym
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-6"
          >
            Your one-stop destination for fitness and health. Explore our
            workouts, diet plans, and body fat checker to achieve your fitness
            goals.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStartedClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-200"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
