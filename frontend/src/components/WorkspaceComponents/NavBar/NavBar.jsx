import React from "react";
import styles from "./NavBar.module.css";
import CloseIcon from "../../../assets/icons/close-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFormName } from "../../../redux/slices/formFieldSlice.js";
import { createForm } from "../../../api/form.js";
import { toast } from "react-toastify";

const NavBar = () => {
  const location = useLocation();
  const formFields = useSelector((store) => store.fields);
  const flow = useSelector((store) => store.flows.flowitems);
  const error = useSelector((store) => store.errors);
  console.log(error);
  console.log(flow);
  console.log(formFields);
  const dispatch = useDispatch();
  const handleFormName = (e) => {
    dispatch(setFormName(e.target.value));
  };

  const handleSubmit = async () => {
    if (error === "Required Field") {
      toast.error("Please fill all the required fields");
      return;
    }
    try {
      await createNewForm();
    } catch {
      toast.error("Please try again also check every fields are filled");
    }
  };

  const createNewForm = async () => {
    try {
      const response = await createForm(
        formFields.formName,
        formFields.theme,
        flow,
        formFields.folderId
      );
      if (response.success || response.status === 201) {
        toast.success(response?.data?.message);
      } else {
        toast.error(
          response?.data?.message ||
            "Form creation failed. Please try again later"
        );
      }
    } catch (error) {
      toast.error(
        "An error occurred during form creation. Please try again later."
      );
    }
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLeft}>
        <input
          type="text"
          placeholder="Enter Form Name"
          value={formFields.formName}
          onChange={handleFormName}
        />
      </div>
      <div className={styles.navMiddle}>
        <div>
          <Link
            to={"/workspace/flow"}
            className={
              location.pathname === "/workspace/flow" ? styles.activePage : ""
            }
          >
            Flow
          </Link>
        </div>
        <div>
          <Link
            to={"/workspace/theme"}
            className={
              location.pathname === "/workspace/theme" ? styles.activePage : ""
            }
          >
            Theme
          </Link>
        </div>
        <div>
          <Link
            to={"/workspace/response"}
            className={
              location.pathname === "/workspace/response"
                ? styles.activePage
                : ""
            }
          >
            Response
          </Link>
        </div>
      </div>
      <div className={styles.navRight}>
        <button className={styles.shareBtn}>Share</button>
        <button className={styles.saveBtn} onClick={handleSubmit}>
          Save
        </button>
        <div className={styles.imgDiv}>
          <img src={CloseIcon} alt="close icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
