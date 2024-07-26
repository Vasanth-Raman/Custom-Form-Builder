import React from "react";
import styles from "./SingleForm.module.css";
import Delete from "../../../assets/icons/delete-icon.svg";

const SingleForm = ({ modalSetter, setType }) => {
  const handleDeleteModal = () => {
    setType("Form");
    modalSetter(true);
  };

  return (
    <div className={styles.form}>
      <p>New Form</p>
      <div onClick={handleDeleteModal}>
        <img src={Delete} alt="delete icon" />
      </div>
    </div>
  );
};

export default SingleForm;
