import React from "react";
import LogoSection from "./components/LogoSection/LogoSection";
import MapLocation from "./components/MapLocation/MapLocation";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import ContactUs from "./components/ContactUs/ContactUs";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0">
      {/* Left Section: Logo and Quick Links */}
      <div className="flex flex-col md:flex-row w-full md:w-2/3 space-y-6 md:space-y-0 md:space-x-6">
        <LogoSection />
        <QuickLinks />
      </div>

      {/* Right Section: Map */}
      <div className="w-full md:w-1/3">
        <MapLocation />
      </div>
    </div>
    {/* Contact Us Button */}
    <div className="flex justify-center mt-6">
      <ContactUs />
    </div>
  </footer>
);

export default Footer;
