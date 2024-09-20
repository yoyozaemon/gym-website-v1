import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import logo from "../../logo.svg";

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about-us" },
    { text: "Classes", path: "/classes" },
    { text: "Workouts", path: "/workouts" },
    { text: "Diet", path: "/diet" },
    { text: "Body Fat Checker", path: "/bodyfat" },
  ];

  return (
    <>
      <header
        className={`bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50 h-20 transition-opacity duration-300 ${
          scrollY > 50
            ? "bg-opacity-70 dark:bg-opacity-70"
            : "bg-opacity-100 dark:bg-opacity-100"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img src={logo} alt="Yo Fitness Logo" className="h-10 mr-3" />
            <Link to="/">
              <motion.h1
                className="text-2xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Yo Fitness
              </motion.h1>
            </Link>
          </div>

          {/* Mobile Menu Button with animation */}
          <motion.button
            className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
            onClick={handleMenuToggle}
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex lg:space-x-8 items-center">
            <ul className="flex space-x-8 text-lg">
              {navLinks.map(({ text, path }) => (
                <motion.li key={text} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={path}
                    className={`font-medium hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 ${
                      location.pathname === path
                        ? "text-blue-500 dark:text-blue-400 font-bold"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
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
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? (
              <MdLightMode className="text-yellow-400" size={24} />
            ) : (
              <MdDarkMode className="text-blue-400" size={24} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="lg:hidden fixed inset-0 top-20 bg-white dark:bg-gray-900 z-40 shadow-lg"
                style={{ height: "calc(100vh - 80px)" }}
              >
                <ul className="flex flex-col items-center space-y-6 p-6 text-lg">
                  {navLinks.map(({ text, path }) => (
                    <motion.li key={text} whileHover={{ scale: 1.05 }}>
                      <Link
                        to={path}
                        className={`font-medium hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 ${
                          location.pathname === path
                            ? "text-blue-500 dark:text-blue-400 font-bold"
                            : "text-gray-800 dark:text-gray-200"
                        }`}
                        onClick={handleMenuToggle}
                      >
                        {text}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>

              {/* Background Overlay with fade-in effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-30"
                onClick={handleMenuToggle}
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Add padding to the content to prevent overlap */}
      <div className="pt-20">
        {/* Adjust this value based on header height */}
      </div>
    </>
  );
};

export default Header;
