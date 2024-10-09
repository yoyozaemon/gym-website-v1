import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FilterModal = ({
  isOpen,
  closeFilterModal,
  selectedCategories,
  handleCategoryChange,
  selectedDifficulty,
  setSelectedDifficulty,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative overflow-y-auto">
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 cursor-pointer"
          onClick={closeFilterModal}
        />
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6">
          Filters
        </h3>

        {/* Filter by Category */}
        <div className="mb-4 md:mb-6">
          <span className="block text-base sm:text-lg font-semibold mb-2">
            Filter by Category
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              "back",
              "biceps",
              "shoulders",
              "legs",
              "chest",
              "triceps",
              "abs",
              "hiit",
              "cardio",
              "push",
              "pull",
            ].map((category) => (
              <label
                key={category}
                className={`flex items-center space-x-2 cursor-pointer p-2 rounded border ${
                  selectedCategories.includes(category)
                    ? "border-blue-500 bg-blue-100 dark:bg-blue-900"
                    : "border-gray-300 dark:border-gray-700"
                }`}
              >
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={handleCategoryChange}
                  className="form-checkbox text-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filter by Difficulty */}
        <div className="mb-4 md:mb-6">
          <span className="block text-base sm:text-lg font-semibold mb-2">
            Filter by Difficulty
          </span>
          <div className="relative">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-base sm:text-lg appearance-none"
            >
              <option value="">All Difficulty Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <button
          onClick={closeFilterModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
