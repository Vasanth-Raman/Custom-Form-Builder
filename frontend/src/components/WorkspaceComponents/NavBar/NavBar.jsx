import React from "react";
import styles from "./NavBar.module.css";
import CloseIcon from "../../../assets/icons/close-icon.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFormName } from "../../../redux/slices/formFieldSlice.js";
import { createForm, updateForm } from "../../../api/form.js";
import { toast } from "react-toastify";

const NavBar = ({ formId }) => {
  const location = useLocation();
  const formFields = useSelector((store) => store.fields);
  const flow = useSelector((store) => store.flows.flowitems);
  const error = useSelector((store) => store.errors);
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
      if (formId) {
        await updateOldForm(formId);
      } else {
        await createNewForm();
      }
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

  const updateOldForm = async (formId) => {
    try {
      const response = await updateForm(
        formFields.formName,
        formFields.theme,
        flow,
        formId
      );
      if (response.success || response.status === 201) {
        toast.success(response?.data?.message);
      } else {
        toast.error(
          response?.data?.message ||
            "Form updation failed. Please try again later"
        );
      }
    } catch (error) {
      toast.error(
        "An error occurred during form creation. Please try again later."
      );
    }
  };

  const isActive = (path) => location.pathname.startsWith(path);

  const flowLink = formId ? `/workspace/flow/${formId}` : "/workspace/flow";
  const themeLink = formId ? `/workspace/theme/${formId}` : "/workspace/theme";
  const responseLink = formId
    ? `/workspace/response/${formId}`
    : "/workspace/response";

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
            to={flowLink}
            className={isActive("/workspace/flow") ? styles.activePage : ""}
          >
            Flow
          </Link>
        </div>
        <div>
          <Link
            to={themeLink}
            className={isActive("/workspace/theme") ? styles.activePage : ""}
          >
            Theme
          </Link>
        </div>
        <div>
          <Link
            to={responseLink}
            className={isActive("/workspace/response") ? styles.activePage : ""}
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
