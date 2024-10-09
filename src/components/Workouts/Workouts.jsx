import React, { useEffect, useState } from "react";
import { workoutsData } from "./Data/workoutsData";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterModal from "./components/FilterModal/FilterModal";
import FloatingDetailView from "./components/FloatingDetailView/FloatingDetailView";
import WorkoutCard from "./components/WorkoutCard/WorkoutCard";
import ToastNotification from "./components/ToastNotification/ToastNotification";
import Pagination from "./components/Pagination/Pagination"; 

const Workouts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [toastInfo, setToastInfo] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  const [showMoreBeginner, setShowMoreBeginner] = useState(false);
  const [showMoreIntermediate, setShowMoreIntermediate] = useState(false);
  const [showMoreAdvanced, setShowMoreAdvanced] = useState(false);
  
  const [showPagination, setShowPagination] = useState(false); 
  const [itemsPerPage, setItemsPerPage] = useState(4); 
  const [currentPage, setCurrentPage] = useState(0);

  const workoutsDataFiltered = workoutsData.filter((workout) => {
    const matchesSearchTerm = workout.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      workout.categories.some((category) =>
        selectedCategories.includes(category)
      );
    const matchesDifficulty =
      !selectedDifficulty || workout.difficulty === selectedDifficulty;
    return matchesSearchTerm && matchesCategory && matchesDifficulty;
  });

  const beginnerWorkouts = workoutsDataFiltered.filter(
    (workout) => workout.difficulty === "Beginner"
  );
  const intermediateWorkouts = workoutsDataFiltered.filter(
    (workout) => workout.difficulty === "Intermediate"
  );
  const advancedWorkouts = workoutsDataFiltered.filter(
    (workout) => workout.difficulty === "Advanced"
  );

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value]
    );
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchPerformed(true);
    }
  };

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleCloseDetail = () => {
    setSelectedWorkout(null);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleShowMore = (difficulty) => {
    if (difficulty === "Beginner") {
      setShowMoreBeginner((prev) => !prev);
      setShowMoreIntermediate(false); 
      setShowMoreAdvanced(false); 
    } else if (difficulty === "Intermediate") {
      setShowMoreIntermediate((prev) => !prev);
      setShowMoreBeginner(false); 
      setShowMoreAdvanced(false); 
    } else if (difficulty === "Advanced") {
      setShowMoreAdvanced((prev) => !prev);
      setShowMoreBeginner(false); 
      setShowMoreIntermediate(false); 
    }

 
    setShowPagination(true);
    setItemsPerPage(8); 
    setCurrentPage(0); 
  };

  const handleShowLess = (difficulty) => {
    if (difficulty === "Beginner") {
      setShowMoreBeginner(false);
    } else if (difficulty === "Intermediate") {
      setShowMoreIntermediate(false);
    } else if (difficulty === "Advanced") {
      setShowMoreAdvanced(false);
    }

    setCurrentPage(0);
    setItemsPerPage(4); 
    setShowPagination(false); 
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Workouts</h2>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        openFilterModal={() => setIsFilterModalOpen(true)}
        onKeyDown={handleSearch}
      />

      <FilterModal
        isOpen={isFilterModalOpen}
        closeFilterModal={() => setIsFilterModalOpen(false)}
        selectedCategories={selectedCategories}
        handleCategoryChange={handleCategoryChange}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />

      {(showMoreBeginner || (!showMoreIntermediate && !showMoreAdvanced)) && (
        <>
          <h3 className="text-xl font-semibold mt-6 mb-4">Beginner Workouts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {beginnerWorkouts
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((workout) => (
                <WorkoutCard
                  key={workout.title}
                  {...workout}
                  onClick={() => handleWorkoutClick(workout)}
                />
              ))}
          </div>
          {beginnerWorkouts.length > itemsPerPage && (
            <button
              className="text-blue-500 hover:text-blue-700 mt-4"
              onClick={() => {
                if (showMoreBeginner) {
                  handleShowLess("Beginner");
                } else {
                  handleShowMore("Beginner");
                }
              }}
            >
              {showMoreBeginner ? "Show Less" : "Show More"}
            </button>
          )}
        </>
      )}

      {(showMoreIntermediate || (!showMoreBeginner && !showMoreAdvanced)) && (
        <>
          <h3 className="text-xl font-semibold mt-6 mb-4">Intermediate Workouts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {intermediateWorkouts
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((workout) => (
                <WorkoutCard
                  key={workout.title}
                  {...workout}
                  onClick={() => handleWorkoutClick(workout)}
                />
              ))}
          </div>
          {intermediateWorkouts.length > itemsPerPage && (
            <button
              className="text-blue-500 hover:text-blue-700 mt-4"
              onClick={() => {
                if (showMoreIntermediate) {
                  handleShowLess("Intermediate");
                } else {
                  handleShowMore("Intermediate");
                }
              }}
            >
              {showMoreIntermediate ? "Show Less" : "Show More"}
            </button>
          )}
        </>
      )}

      {(showMoreAdvanced || (!showMoreBeginner && !showMoreIntermediate)) && (
        <>
          <h3 className="text-xl font-semibold mt-6 mb-4">Advanced Workouts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {advancedWorkouts
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((workout) => (
                <WorkoutCard
                  key={workout.title}
                  {...workout}
                  onClick={() => handleWorkoutClick(workout)}
                />
              ))}
          </div>
          {advancedWorkouts.length > itemsPerPage && (
            <button
              className="text-blue-500 hover:text-blue-700 mt-4"
              onClick={() => {
                if (showMoreAdvanced) {
                  handleShowLess("Advanced");
                } else {
                  handleShowMore("Advanced");
                }
              }}
            >
              {showMoreAdvanced ? "Show Less" : "Show More"}
            </button>
          )}
        </>
      )}

      {showPagination && (
        <Pagination
          pageCount={
            Math.ceil(
              (beginnerWorkouts.length + intermediateWorkouts.length + advancedWorkouts.length) / itemsPerPage
            ) 
          }
          onPageChange={handlePageChange}
        />
      )}

      <FloatingDetailView
        isOpen={!!selectedWorkout}
        workout={selectedWorkout}
        onClose={handleCloseDetail}
      />
      {toastInfo && (
        <ToastNotification
          message={toastInfo.message}
          type={toastInfo.type}
          onClose={() => setToastInfo(null)}
        />
      )}
    </div>
  );
};

export default Workouts;
