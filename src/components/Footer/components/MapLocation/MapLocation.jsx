import React from "react";

const MapLocation = () => (
  <div className="w-full md:w-1/2 mt-6 md:mt-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.03348397431893!2d77.61918117167842!3d12.937532987030984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1445804e2459%3A0x5c638ee767d87617!2sAlmond%20Touch!5e0!3m2!1sen!2sus!4v1725705275803!5m2!1sen!2sus"
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
