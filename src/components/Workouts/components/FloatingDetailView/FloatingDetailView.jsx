import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FloatingDetailView = ({ workout, onClose }) => {
  if (!workout) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg relative">
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 cursor-pointer"
          onClick={onClose}
        />
        <img
          src="/api/placeholder/300/200"
          alt={workout.title}
          className="w-full h-48 md:h-60 object-cover mb-4 rounded"
        />
        <h3 className="text-xl md:text-2xl font-bold mb-2">{workout.title}</h3>
        <p className="mb-2">
          Sets: {workout.sets}, Reps: {workout.reps}
        </p>
        <p className="mb-2 font-bold text-gray-600 dark:text-gray-400">
          Difficulty: {workout.difficulty}
        </p>
        <a
          href={workout.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Watch Tutorial
        </a>
        <p className="mt-4">{/* Additional details can be added here */}</p>
      </div>
    </div>
  );
};

export default FloatingDetailView;
