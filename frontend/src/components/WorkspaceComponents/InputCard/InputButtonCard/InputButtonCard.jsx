import React from "react";
import styles from "./InputButtonCard.module.css";
import DeleteIcon from "../../../../assets/icons/delete-icon.svg";

const InputButtonCard = () => {
  return (
    <div className={styles.btnContainer}>
      <p>Button</p>
      <input type="text" placeholder="User will see this as button" />
      <div className={styles.deleteIcon}>
        <img src={DeleteIcon} alt="delete icon" />
      </div>
    </div>
  );
};

export default InputButtonCard;
