import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../logo.svg";

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50 h-16">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full">
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
            className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex lg:space-x-6 items-center">
            <ul className="flex space-x-6">
              {[
                { text: "Home", path: "/" },
                { text: "Workouts", path: "/workouts" },
                { text: "Diet", path: "/diet" },
                { text: "Body Fat Checker", path: "/bodyfat" },
              ].map(({ text, path }) => (
                <motion.li key={text} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={path}
                    className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <nav
              className="lg:hidden fixed inset-0 top-16 bg-white dark:bg-gray-800 transition-transform duration-300 transform translate-x-0 z-40"
              style={{ height: "calc(100vh - 64px)" }}
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <button
                    className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-full"
                    onClick={handleMenuToggle}
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col items-center space-y-6 p-4">
                  {[
                    { text: "Home", path: "/" },
                    { text: "Workouts", path: "/workouts" },
                    { text: "Diet", path: "/diet" },
                    { text: "Body Fat Checker", path: "/bodyfat" },
                  ].map(({ text, path }) => (
                    <motion.li key={text} whileHover={{ scale: 1.05 }}>
                      <Link
                        to={path}
                        className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300"
                        onClick={handleMenuToggle}
                      >
                        {text}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Background Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-30"
              onClick={handleMenuToggle}
            ></div>
          </>
        )}
      </header>

      {/* Add padding to the content to prevent overlap */}
      <div className="pt-16">
        {" "}
        {/* Adjust this value based on header height */}{" "}
      </div>
    </>
  );
};

export default Header;
