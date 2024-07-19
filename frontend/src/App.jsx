import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
