import React, { useEffect } from "react";
import styles from "./Response.module.css";
import { useParams } from "react-router-dom";

const Response = ({ onIdChange }) => {
  const { id } = useParams();

  //to get id to navBar
  useEffect(() => {
    if (onIdChange) {
      onIdChange(id);
    }
  }, [id, onIdChange]);
  return (
    <div className={styles.resWraapper}>
      <div className={styles.statContainer}>
        <div className={`${styles.stat} ${styles.views}`}>
          <h2>Views</h2>
          <p>7</p>
        </div>
        <div className={`${styles.stat} ${styles.starts}`}>
          <h2>Starts</h2>
          <p>7</p>
        </div>
        <div className={`${styles.stat} ${styles.rate}`}>
          <h2>Completion rate</h2>
          <p>33%</p>
        </div>
      </div>
      <div className={styles.table}></div>
    </div>
  );
};

export default Response;
