import React from "react";
import styles from "./Response.module.css";

const Response = () => {
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
