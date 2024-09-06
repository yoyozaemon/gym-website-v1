import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../logo.svg";

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <img src={logo} alt="Yo Fitness Logo" className="h-12 mr-4" />
          <Link to="/">
            <motion.h1
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Yo Fitness
            </motion.h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex lg:space-x-6 absolute lg:relative inset-0 lg:inset-auto top-16 lg:top-auto bg-white dark:bg-gray-800 lg:bg-transparent transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          }`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link
                to="/"
                className="text-lg hover:text-blue-600 dark:hover:text-blue-300 transition duration-300"
              >
                Home
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link
                to="/workouts"
                className="text-lg hover:text-blue-600 dark:hover:text-blue-300 transition duration-300"
              >
                Workouts
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link
                to="/diet"
                className="text-lg hover:text-blue-600 dark:hover:text-blue-300 transition duration-300"
              >
                Diet
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link
                to="/bodyfat"
                className="text-lg hover:text-blue-600 dark:hover:text-blue-300 transition duration-300"
              >
                Body Fat Checker
              </Link>
            </motion.li>
          </ul>
        </nav>

        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500" size={24} />
          ) : (
            <FaMoon className="text-blue-500" size={24} />
          )}
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
