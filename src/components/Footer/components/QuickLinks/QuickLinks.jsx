import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => (
  <div className="w-full md:w-1/3 mt-6 md:mt-0">
    <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
    <div className="flex flex-col space-y-2">
      <Link
        to="/"
        className="text-gray-300 hover:text-white transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        to="/workouts"
        className="text-gray-300 hover:text-white transition-colors duration-200"
      >
        Workouts
      </Link>
      <Link
        to="/diet"
        className="text-gray-300 hover:text-white transition-colors duration-200"
      >
        Diet
      </Link>
      <Link
        to="/bodyfat"
        className="text-gray-300 hover:text-white transition-colors duration-200"
      >
        Body Fat Checker
      </Link>
    </div>
  </div>
);

export default QuickLinks;
