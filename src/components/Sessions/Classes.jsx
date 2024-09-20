import React, { useState, useEffect } from "react";
import classesData from "./Data/Data";

const Classes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(classesData);
      } catch (err) {
        setError("Failed to load classes");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold">
        Loading classes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center text-lg font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
        Gym Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((classItem, index) => (
          <div
            key={classItem.id}
            className={`flex flex-col p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
          >
            <img
              src={classItem.image}
              alt={`${classItem.title} image`}
              className="w-full h-48 rounded-lg object-cover mb-4"
            />
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {classItem.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {classItem.description}
              </p>
              <p className="text-gray-500 dark:text-gray-400 italic">
                {classItem.schedule}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
