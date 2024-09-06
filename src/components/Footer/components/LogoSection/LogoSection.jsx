import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../../../logo.svg";

const LogoSection = () => (
  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
    <img src={logo} alt="FitnessPro Gym Logo" className="h-12" />
    <div className="text-center md:text-left">
      <p className="text-xl font-semibold">Yo Fitness Gym</p>
      <p className="mt-2">123 Fitness Ave, Gym City, ST 12345</p>
      <p className="mt-1">Phone: (123) 456-7890</p>
      <div className="mt-4 flex justify-center md:justify-start space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  </div>
);

export default LogoSection;
