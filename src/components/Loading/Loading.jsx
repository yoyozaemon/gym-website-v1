// import React from "react";
// import { motion } from "framer-motion";

// // // SVG for Batman
// // const BatmanSVG = () => (
// //   <svg
// //     width="200"
// //     height="400"
// //     viewBox="0 0 200 400"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     {/* Batman's Head */}
// //     <circle cx="100" cy="80" r="30" fill="black" />
// //     <rect x="85" y="110" width="30" height="50" fill="black" />
// //     <rect x="75" y="160" width="50" height="120" fill="black" />
// //     {/* Batman's Arms */}
// //     <rect x="30" y="160" width="20" height="60" fill="black" />
// //     <rect x="150" y="160" width="20" height="60" fill="black" />
// //     {/* Barbell */}
// //     <rect x="20" y="220" width="160" height="10" fill="gray" />
// //     <circle cx="20" cy="225" r="15" fill="gray" />
// //     <circle cx="180" cy="225" r="15" fill="gray" />
// //   </svg>
// // );

// // SVG for Weight Plate
// const WeightPlateSVG = ({ isRotating }) => (
//   <svg
//     width="40"
//     height="40"
//     viewBox="0 0 40 40"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle cx="20" cy="20" r="18" stroke="gray" strokeWidth="4" />
//     <circle cx="20" cy="20" r="8" fill="gray" />
//     <text x="20" y="25" fontSize="12" textAnchor="middle" fill="gray">
//       20kg
//     </text>
//   </svg>
// );

// const Loading = () => (
//   <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="relative flex items-center"
//     >
//       {/* Animated Weight Plates */}
//       <motion.div
//         animate={{ rotate: [0, 360] }}
//         transition={{
//           duration: 1,
//           ease: "linear",
//           repeat: Infinity,
//         }}
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//       >
//         <WeightPlateSVG isRotating />
//       </motion.div>

//       {/* Animated Batman */}
//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{
//           duration: 1,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatDelay: 0.5,
//         }}
//         className="relative"
//       >
//         {/* <BatmanSVG /> */}
//       </motion.div>
//     </motion.div>
//   </div>
// );

// export default Loading;

import React from "react";
import { motion } from "framer-motion";

const GoldWeightPlateSVG = () => (
  <svg
    width="150"
    height="150"
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Plate */}
    <circle
      cx="75"
      cy="75"
      r="70"
      stroke="#d4af37"
      strokeWidth="8"
      fill="#ffd700"
    />

    {/* Inner Plate */}
    <circle
      cx="75"
      cy="75"
      r="50"
      stroke="#b8860b"
      strokeWidth="8"
      fill="#f5deb3"
    />

    {/* Center Hole */}
    <circle cx="75" cy="75" r="12" fill="#b8860b" />

    {/* Curved Path for Weight Label */}
    <defs>
      <path id="curve" d="M 75,20 A 55,55 0 0 1 75,130 A 55,55 0 0 1 75,20" />
    </defs>

    {/* Weight Label Curved Along the Top */}
    <text
      fontSize="24"
      textAnchor="middle"
      fill="#b8860b"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
    >
      <textPath href="#curve" startOffset="50%" textAnchor="middle">
        20kg
      </textPath>
    </text>
  </svg>
);

const Loading = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      }}
      className="flex items-center"
    >
      <GoldWeightPlateSVG />
    </motion.div>
  </div>
);

export default Loading;
