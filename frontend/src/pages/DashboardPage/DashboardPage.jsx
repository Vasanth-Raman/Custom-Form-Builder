import React from "react";
import styles from "./DashboardPage.module.css";
import { Routes, Route } from "react-router-dom";
import SettingArea from "../../components/DashboardComponents/SettingArea/SettingArea";
import FormsArea from "../../components/DashboardComponents/FormsArea/FormsArea";
import ErrorPage from "../ErrorPage/ErrorPage";

const DashboardPage = () => {
  return (
    <div className={styles.dboardWrapper}>
      <Routes>
        <Route path="/" element={<FormsArea />} />
        <Route path="/settings" element={<SettingArea />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default DashboardPage;
