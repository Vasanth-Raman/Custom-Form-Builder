import React, { useState } from "react";
import styles from "./FormsArea.module.css";
import DashNav from "../DashNav/DashNav";
import CreateFolder from "../../../assets/icons/create-folder.svg";
import PlusIcon from "../../../assets/icons/plus-icon.svg";
import Folder from "../Folder/Folder";
import Form from "../SingleForm/SingleForm";
import DeleteModal from "../DeleteModal/DeleteModal";
import FolderModal from "../FolderModal/FolderModal";

const FormsArea = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteModalType, setDeleteModalType] = useState(null);
  const [isfolderModalOpen, setIsFolderModalOpen] = useState(false);
  return (
    <>
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          modalSetter={setIsDeleteModalOpen}
          type={deleteModalType}
        />
      )}
      {isfolderModalOpen && (
        <FolderModal
          isOpen={isfolderModalOpen}
          modalSetter={setIsFolderModalOpen}
        />
      )}
      <div className={styles.mainWrapper}>
        <DashNav />
        <div className={styles.folderForms}>
          <div className={styles.mainContainer}>
            <div className={styles.folders}>
              <div
                className={styles.createFolder}
                onClick={() => setIsFolderModalOpen(true)}
              >
                <img src={CreateFolder} alt="create folder" />
                <p>Create a folder</p>
              </div>
              {/* Example Folder component usage */}
              {Array.from({ length: 9 }).map((_, index) => (
                <Folder
                  key={index}
                  name={`Folder ${index + 1}`}
                  modalSetter={setIsDeleteModalOpen}
                  setType={setDeleteModalType}
                />
              ))}
            </div>
            <div className={styles.forms}>
              <div className={styles.createForm}>
                <img src={PlusIcon} alt="plus icon" />
                <p>Create a typbot</p>
              </div>
              {Array.from({ length: 8 }).map((_, index) => (
                <Form
                  key={index}
                  modalSetter={setIsDeleteModalOpen}
                  setType={setDeleteModalType}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsArea;
