import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchTerm, setSearchTerm, openFilterModal }) => (
  <div className="relative mb-4">
    <input
      type="text"
      placeholder="Search workouts..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 pr-12 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
    />
    <FontAwesomeIcon
      icon={faFilter}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 cursor-pointer text-lg md:text-xl"
      onClick={openFilterModal}
    />
  </div>
);

export default SearchBar;
