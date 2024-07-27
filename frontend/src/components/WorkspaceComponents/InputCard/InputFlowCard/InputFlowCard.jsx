import React from "react";
import styles from "./InputFlowCard.module.css";
import DeleteIcon from "../../../../assets/icons/delete-icon.svg";

const InputFlowCard = () => {
  return (
    <div className={styles.cardContainer}>
      <p>Input text</p>
      <small>Hint : User will input a email on his form</small>
      <div className={styles.deleteIcon}>
        <img src={DeleteIcon} alt="delete icon" />
      </div>
    </div>
  );
};

export default InputFlowCard;
