import React from "react";
import styles from "./Folder.module.css";
import Delete from "../../../assets/icons/delete-icon.svg";

const Folder = ({ name, setType, modalSetter, id, setId }) => {
  const handleDeleteModal = () => {
    setId(id);
    setType("folder");
    modalSetter(true);
  };
  return (
    <div className={styles.folder}>
      <p>{name}</p>
      <div onClick={handleDeleteModal} className={styles.deleteImgContainer}>
        <img src={Delete} alt="delete" />
      </div>
    </div>
  );
};

export default Folder;
