import React, { useEffect, useRef } from "react";
import styles from "./FolderModal.module.css";

const FolderModal = ({ isOpen, modalSetter }) => {
  const ref = useRef(null);
  if (!isOpen) {
    return null;
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        modalSetter(false);
      }
    };
    if (isOpen) {
      window.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, modalSetter]);
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer} ref={ref}>
        <div className={styles.text}>
          <p>Create new folder</p>
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Enter folder name" />
        </div>
        <div className={styles.options}>
          <button className={styles.confirm}>Done</button>
          <button className={styles.cancel} onClick={() => modalSetter(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FolderModal;
