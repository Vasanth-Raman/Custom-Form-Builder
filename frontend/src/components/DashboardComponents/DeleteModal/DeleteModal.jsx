import React, { useEffect, useRef } from "react";
import styles from "./DeleteModal.module.css";
const DeleteModal = ({ modalSetter, isOpen, type }) => {
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
    <>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer} ref={ref}>
            <div className={styles.text}>
              <p>Are you sure you want to delete this {type} ?</p>
            </div>
            <div className={styles.options}>
              <button className={styles.confirm}>Confirm</button>
              <button
                className={styles.cancel}
                onClick={() => modalSetter(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
