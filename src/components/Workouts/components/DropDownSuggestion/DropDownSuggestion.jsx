import React from "react";

const DropdownSuggestion = ({ suggestions, onSelect, onClose }) => {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        onSelect(suggestions[activeIndex]);
        onClose();
      }
    }
  };

  return (
    <div
      className="absolute top-full mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-10"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className={`p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${
            index === activeIndex ? "bg-gray-100 dark:bg-gray-600" : ""
          }`}
          onClick={() => {
            onSelect(suggestion);
            onClose();
          }}
          onMouseEnter={() => setActiveIndex(index)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
};

export default DropdownSuggestion;
