import React, { useState } from "react";
import PDFGenerator from "./components/PDFGenerator";

const Diet = () => {
  const [selectedPlan, setSelectedPlan] = useState("none");

  const handleSelection = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 dark:bg-gray-900">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Diet Plans
      </h2>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
        Select a diet plan to view details and download 📄
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-6">
        <button
          onClick={() => handleSelection("weight_loss")}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform ${
            selectedPlan === "weight_loss" ? "scale-105" : ""
          } dark:bg-blue-800 dark:hover:bg-blue-700`}
        >
          Weight Loss
        </button>
        <button
          onClick={() => handleSelection("weight_gain")}
          className={`bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform ${
            selectedPlan === "weight_gain" ? "scale-105" : ""
          } dark:bg-red-800 dark:hover:bg-red-700`}
        >
          Weight Gain
        </button>
        <button
          onClick={() => handleSelection("non_veg_weight_loss")}
          className={`bg-yellow-900 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform ${
            selectedPlan === "non_veg_weight_loss" ? "scale-105" : ""
          } dark:bg-yellow-800 dark:hover:bg-yellow-700`}
        >
          Non-Veg Weight Loss
        </button>
        <button
          onClick={() => handleSelection("non_veg_weight_gain")}
          className={`bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform ${
            selectedPlan === "non_veg_weight_gain" ? "scale-105" : ""
          } dark:bg-purple-800 dark:hover:bg-purple-700`}
        >
          Non-Veg Weight Gain
        </button>
      </div>

      {selectedPlan === "weight_loss" && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Weight Loss Plan
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            Our weight loss plan is designed to help you shed those extra pounds
            in a healthy and sustainable way. It includes a balanced diet,
            exercise recommendations, and tips for staying motivated.
          </p>
          <PDFGenerator plan={selectedPlan} />
        </div>
      )}

      {selectedPlan === "weight_gain" && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Weight Gain Plan
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            Our weight gain plan is crafted to help you build muscle and
            increase your weight in a healthy manner. It includes a nutritious
            diet, exercise routines, and guidance to achieve your weight gain
            goals effectively.
          </p>
          <PDFGenerator plan={selectedPlan} />
        </div>
      )}

      {selectedPlan === "non_veg_weight_loss" && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Non-Vegetarian Weight Loss Plan
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            Our non-vegetarian weight loss plan includes lean protein sources to
            help you lose weight while staying satisfied.
          </p>
          <PDFGenerator plan={selectedPlan} />
        </div>
      )}

      {selectedPlan === "non_veg_weight_gain" && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Non-Vegetarian Weight Gain Plan
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            Our non-vegetarian weight gain plan is designed to provide the
            necessary calories and protein for healthy weight gain.
          </p>
          <PDFGenerator plan={selectedPlan} />
        </div>
      )}
    </div>
  );
};

export default Diet;
