import React from "react";
import styles from "./AuthPage.module.css";
import SignUp from "../../components/AuthComponents/SignUp/SignUp";
import LogIn from "../../components/AuthComponents/LogIn/LogIn";
import { Routes, Route } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
