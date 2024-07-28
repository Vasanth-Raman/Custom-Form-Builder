import React, { useEffect, useRef } from "react";
import styles from "./DeleteModal.module.css";
import { deleteFolder } from "../../../api/folder";
import { toast } from "react-toastify";

const DeleteModal = ({ modalSetter, isOpen, type, id }) => {
  const ref = useRef(null);

  if (!isOpen) {
    return null;
  }

  const handleDelete = async () => {
    if (type === "folder") {
      await deleteOldFolder();
    }
  };

  const deleteOldFolder = async () => {
    try {
      const response = await deleteFolder(id);
      if (response.success || response.status === 200) {
        toast.success(response?.data?.message);
        modalSetter(false);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error("Couldn't delete folder. Please try again later.");
    }
  };

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
              <button className={styles.confirm} onClick={() => handleDelete()}>
                Confirm
              </button>
              <button
                className={styles.cancel}
                onClick={() => modalSetter(false)}
              >
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
