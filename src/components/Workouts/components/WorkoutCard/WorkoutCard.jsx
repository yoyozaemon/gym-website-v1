import React from "react";

const WorkoutCard = ({
  title,
  sets,
  reps,
  youtubeLink,
  difficulty,
  image,
  onClick,
}) => (
  <div
    className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-lg cursor-pointer transition-transform transform hover:scale-105"
    onClick={onClick}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover mb-4 rounded-md"
    />
    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="mb-2 text-gray-700 dark:text-gray-300">
      Sets: {sets}, Reps: {reps}
    </p>
    <p className="mb-2 font-bold text-gray-600 dark:text-gray-400">
      Difficulty: {difficulty}
    </p>
    <a
      href={youtubeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300"
    >
      Watch Tutorial
    </a>
  </div>
);

export default WorkoutCard;
