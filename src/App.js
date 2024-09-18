import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Workouts from "./components/Workouts/Workouts";
import Diet from "./components/Diet/Diet";
import BodyFatChecker from "./components/BodyFatChecker/BodyFatChecker";
import Loading from "./components/Loading/Loading";
import AboutUs from "./components/Home/components/AboutUs/AboutUs";
import InfoSection from "./components/Home/components/InfoSection/InfoSection";
import Team from "./components/Team/Team";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark" : ""}`}>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="flex-grow bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/diet" element={<Diet />} />
              <Route path="/bodyfat" element={<BodyFatChecker />} />
              <Route path="/info-section" element={<InfoSection />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
