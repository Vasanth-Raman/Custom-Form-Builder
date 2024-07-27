import React from "react";
import styles from "./BubbleCard.module.css";
import DeleteIcon from "../../../assets/icons/delete-icon.svg";

const BubbleCard = ({ logoType, title, type, placeholder }) => {
  return (
    <div className={styles.cardContainer}>
      <p>{title}</p>
      <div>
        <div className={styles.input}>
          <img src={logoType} alt="type logo" />
          <input type="text" placeholder={placeholder} />
        </div>
        <small className={styles.errorMsg}>Required Field</small>
      </div>
      <div className={styles.deleteIcon}>
        <img src={DeleteIcon} alt="delete icon" />
      </div>
    </div>
  );
};

export default BubbleCard;
