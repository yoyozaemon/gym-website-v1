import React from "react";

const MapLocation = () => (
  <div className="w-full md:w-1/2 mt-6 md:mt-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.723601083563!2d-122.41941528468145!3d37.77492977975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e5b5e587f%3A0x64f94d7d0f0d72b6!2s123%20Fitness%20Ave%2C%20San%20Francisco%2C%20CA%2094143!5e0!3m2!1sen!2sus!4v1635456441120!5m2!1sen!2sus"
      width="100%"
      height="300"
      style={{ border: 0, borderRadius: "8px" }}
      allowFullScreen
      loading="lazy"
      title="Google Maps Location of Yo Fitness Gym"
    ></iframe>
  </div>
);

export default MapLocation;
