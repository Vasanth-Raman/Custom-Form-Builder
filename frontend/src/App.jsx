import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import AuthPage from "./pages/AuthPage/AuthPage";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/auth" element={<AuthPage isLogin={isLogin} />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
