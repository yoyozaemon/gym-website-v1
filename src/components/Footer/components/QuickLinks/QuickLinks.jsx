import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full md:w-1/3 mt-6 md:mt-0 px-4 md:px-0">
      <h2 className="text-lg font-semibold mb-4 text-white text-center md:text-left">
        Quick Links
      </h2>
      <div className="flex flex-col space-y-3">
        <Link
          to="/"
          onClick={scrollToTop}
          className="text-gray-300 hover:text-white transition-colors duration-200 text-center md:text-left"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          onClick={scrollToTop}
          className="text-gray-300 hover:text-white transition-colors duration-200 text-center md:text-left"
        >
          About Us
        </Link>
        <Link
          to="/workouts"
          onClick={scrollToTop}
          className="text-gray-300 hover:text-white transition-colors duration-200 text-center md:text-left"
        >
          Workouts
        </Link>
        <Link
          to="/diet"
          onClick={scrollToTop}
          className="text-gray-300 hover:text-white transition-colors duration-200 text-center md:text-left"
        >
          Diet
        </Link>
        <Link
          to="/bodyfat"
          onClick={scrollToTop}
          className="text-gray-300 hover:text-white transition-colors duration-200 text-center md:text-left"
        >
          Body Fat Checker
        </Link>
        <Link
          to="/team"
          onClick={scrollToTop}
          className="text-gray-300 hover:text-white transition-colors duration-200 text-center md:text-left"
        >
          Team
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
