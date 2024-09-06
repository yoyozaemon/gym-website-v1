import React, { useState, useEffect } from "react";
import { workoutsData } from "./Data/workoutsData";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterModal from "./components/FilterModal/FilterModal";
import FloatingDetailView from "./components/FloatingDetailView/FloatingDetailView";
import WorkoutCard from "./components/WorkoutCard/WorkoutCard";

const Workouts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const savedCategories = params.get("categories")
      ? params.get("categories").split(",")
      : [];
    const savedDifficulty = params.get("difficulty") || "";
    setSelectedCategories(savedCategories);
    setSelectedDifficulty(savedDifficulty);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join(","));
    }
    if (selectedDifficulty) {
      params.set("difficulty", selectedDifficulty);
    }
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  }, [selectedCategories, selectedDifficulty]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value]
    );
  };

  const filteredWorkouts = workoutsData.filter((workout) => {
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

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleCloseDetail = () => {
    setSelectedWorkout(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Workouts</h2>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        openFilterModal={() => setIsFilterModalOpen(true)}
      />

      <FilterModal
        isOpen={isFilterModalOpen}
        closeFilterModal={() => setIsFilterModalOpen(false)}
        selectedCategories={selectedCategories}
        handleCategoryChange={handleCategoryChange}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.title}
            {...workout}
            onClick={() => handleWorkoutClick(workout)}
          />
        ))}
      </div>

      <FloatingDetailView
        workout={selectedWorkout}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default Workouts;
