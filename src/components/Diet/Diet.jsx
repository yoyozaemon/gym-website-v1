// import React from "react";

// // const Diet = () => (
// //   <div className="container mx-auto p-4">
// //     <h2 className="text-2xl font-bold mb-4">Diet Plans</h2>
// //     <p className="mb-4">
// //       Download our comprehensive diet chart for optimal nutrition.
// //     </p>
// //     <button
// //       onClick={() =>
// //         alert("Diet chart download functionality would be implemented here.")
// //       }
// //       className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
// //     >
// //       Download Diet Chart
// //     </button>
// //   </div>
// // );

// // const Diet = () => {
// //   return (
// //     <p className="text-lg text-gray-500 text-center font-semibold">
// //       Coming Soon!
// //     </p>
// //   );
// // };
// export default Diet;

// Diet.js
import React, { useState } from "react";
import PDFGenerator from "./components/PDFGenerator";

const Diet = () => {
  const [selectedPlan, setSelectedPlan] = useState("none");

  const handleSelection = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Diet Plans</h2>
      <p className="mb-4">Select a diet plan to download 📄</p>
      <div className="mb-4">
        <button
          onClick={() => handleSelection("weight_loss")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Weight Loss
        </button>
        <button
          onClick={() => handleSelection("weight_gain")}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Weight Gain
        </button>
      </div>
      {selectedPlan !== "none" && <PDFGenerator plan={selectedPlan} />}
    </div>
  );
};

export default Diet;
