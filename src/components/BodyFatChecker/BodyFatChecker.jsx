// import React, { useState } from "react";
import React from "react";
// const BodyFatChecker = () => {
//   const [result, setResult] = useState(null);

//   const calculateBodyFat = (e) => {
//     e.preventDefault();
//     // Implement body fat calculation logic here
//     setResult(Math.random() * 30); // Dummy calculation
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Body Fat Checker</h2>
//       <form onSubmit={calculateBodyFat} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label htmlFor="gender" className="block mb-2">
//             Gender:
//           </label>
//           <select id="gender" className="w-full p-2 border rounded">
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         {["age", "weight", "height", "neck", "waist", "hip"].map((field) => (
//           <div key={field} className="mb-4">
//             <label htmlFor={field} className="block mb-2">
//               {field.charAt(0).toUpperCase() + field.slice(1)}:
//             </label>
//             <input
//               type="number"
//               id={field}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//         ))}
//         <button
//           type="submit"
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Calculate
//         </button>
//       </form>
//       {result && (
//         <div className="mt-4">
//           <p>Your estimated body fat percentage is: {result.toFixed(2)}%</p>
//           <button
//             onClick={() =>
//               alert("Download functionality would be implemented here.")
//             }
//             className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Download Result
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

const BodyFatChecker = () => {
  return (
    <p className="text-lg text-gray-500 text-center font-semibold">
      Coming Soon!
    </p>
  );
};
export default BodyFatChecker;
