import React from "react";
import { useNavigate } from "react-router-dom";

const InfoSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Workouts Section */}
        <div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => handleNavigate("/workouts")}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-center dark:text-white">
            Workouts
          </h3>
          <p className="text-sm sm:text-base mb-4 text-center dark:text-gray-300">
            Explore various workout plans to achieve your fitness goals.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            View Workouts
          </button>
        </div>

        {/* Diet Section */}
        <div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => handleNavigate("/diet")}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-center dark:text-white">
            Diet
          </h3>
          <p className="text-sm sm:text-base mb-4 text-center dark:text-gray-300">
            Find personalized diet plans to complement your workouts.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            View Diet Plans
          </button>
        </div>

        {/* Body Fat Checker Section */}
        <div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => handleNavigate("/bodyfat")}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-center dark:text-white">
            Body Fat Checker
          </h3>
          <p className="text-sm sm:text-base mb-4 text-center dark:text-gray-300">
            Monitor your body fat percentage with our checker tool.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            Check Body Fat
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
