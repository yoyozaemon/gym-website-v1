import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/info-section"); // Navigate to the InfoSection route
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Welcome to FitnessPro Gym
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-4">
          Your one-stop destination for fitness and health. Explore our
          workouts, diet plans, and body fat checker to achieve your fitness
          goals.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStartedClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-200"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
