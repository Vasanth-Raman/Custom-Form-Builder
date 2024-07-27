import React, { useEffect, useState } from "react";
import styles from "./SettingArea.module.css";
import UserIcon from "../../../assets/icons/setting-name-icon.svg";
import LockIcon from "../../../assets/icons/setting-lock-icon.svg";
import EyeIcon from "../../../assets/icons/setting-eye-icon.svg";
import LogoutIcon from "../../../assets/icons/setting-logout-icon.svg";
import BackArrow from "../../../assets/icons/arrow-back.svg";
import { useNavigate } from "react-router-dom";
import validateUserUpdate from "../../../validations/validateUserUpdate";

const SettingArea = () => {
  const initialValues = {
    userName: "",
    email: "",
    oldPassword: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setFormErrors(validateUserUpdate(credentials));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Logic goes here
    }
  }, [formErrors, isSubmit]);

  return (
    <div className={styles.settingWrapper}>
      <img
        className={styles.backArrow}
        src={BackArrow}
        alt="BackArrow"
        onClick={() => navigate("/dashboard")}
      />
      <h3>Settings</h3>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <div className={styles.inputs}>
          <div>
            <div className={styles.field}>
              <img src={UserIcon} alt="UserIcon" />
              <input
                type="text"
                placeholder="Name"
                name="userName"
                id="name"
                autoComplete="on"
                value={credentials.userName}
                onChange={handleChange}
              />
            </div>
            <small>{formErrors.userName}</small>
          </div>
          <div>
            <div className={styles.field}>
              <img src={LockIcon} alt="LockIcon" />
              <input
                type="email"
                placeholder="Update Email"
                name="email"
                id="email"
                autoComplete="on"
                value={credentials.email}
                onChange={handleChange}
              />
              <img src={EyeIcon} alt="EyeIcon" />
            </div>
            <small>{formErrors.email}</small>
          </div>

          <div>
            <div className={styles.field}>
              <img src={LockIcon} alt="LockIcon" />
              <input
                type="password"
                placeholder="Old Password"
                name="oldPassword"
                id="oldPassword"
                value={credentials.oldPassword}
                onChange={handleChange}
              />
              <img src={EyeIcon} alt="EyeIcon" />
            </div>
            <small>{formErrors.oldPassword}</small>
          </div>
          <div>
            <div className={styles.field}>
              <img src={LockIcon} alt="LockIcon" />
              <input
                type="password"
                placeholder="New Password"
                name="password"
                id="newPassword"
                value={credentials.password}
                onChange={handleChange}
              />
              <img src={EyeIcon} alt="EyeIcon" />
            </div>
            <small>{formErrors.password}</small>
          </div>
        </div>
        <div className={styles.button}>
          <button onClick={handleSubmit}>Update</button>
        </div>
      </form>
      <div className={styles.logout}>
        <img src={LogoutIcon} alt="LogoutIcon" />
        <p>Log out</p>
      </div>
    </div>
  );
};

export default SettingArea;
