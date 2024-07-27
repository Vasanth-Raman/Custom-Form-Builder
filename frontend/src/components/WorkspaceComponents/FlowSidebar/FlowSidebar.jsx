import React from "react";
import styles from "./FlowSidebar.module.css";
import { bubbleData, inputData } from "../../../utils/constants";

const FlowSidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.bubbleContainer}>
        <h1>Bubbles</h1>
        <div className={styles.buttonsGrid}>
          {bubbleData.map(({ id, icon, alt, name }) => {
            return (
              <div key={id} className={styles.singleButton}>
                <img src={icon} alt={alt} />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.inputContainer}>
        <h1>Inputs</h1>
        <div className={styles.buttonsGrid}>
          {inputData.map(({ id, icon, alt, name }) => {
            return (
              <div key={id} className={styles.singleButton}>
                <img src={icon} alt={alt} />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlowSidebar;
