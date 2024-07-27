import React from "react";
import styles from "./WorkspacePage.module.css";
import NavBar from "../../components/WorkspaceComponents/NavBar/NavBar";
import Flow from "../../components/WorkspaceComponents/Flow/Flow";
import { Routes, Route, Navigate } from "react-router-dom";
import Theme from "../../components/WorkspaceComponents/Theme/Theme";
import Response from "../../components/WorkspaceComponents/Response/Response";
import ErrorPage from "../ErrorPage/ErrorPage";

const WorkspacePage = () => {
  return (
    <div className={styles.wspaceContainer}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="flow" replace />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/response" element={<Response />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default WorkspacePage;
