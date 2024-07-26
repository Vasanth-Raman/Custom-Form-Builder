import React from "react";
import styles from "./SettingArea.module.css";
import UserIcon from "../../../assets/icons/setting-name-icon.svg";
import LockIcon from "../../../assets/icons/setting-lock-icon.svg";
import EyeIcon from "../../../assets/icons/setting-eye-icon.svg";
import LogoutIcon from "../../../assets/icons/setting-logout-icon.svg";

const SettingArea = () => {
  return (
    <div className={styles.settingWrapper}>
      <h3>Settings</h3>
      <form>
        <div className={styles.inputs}>
          <div className={styles.field}>
            <img src={UserIcon} alt="UserIcon" />
            <input
              type="text"
              placeholder="Name"
              name="user name"
              id="name"
              autoComplete="on"
            />
          </div>
          <div className={styles.field}>
            <img src={LockIcon} alt="LockIcon" />
            <input
              type="email"
              placeholder="Update Email"
              name="email"
              id="email"
              autoComplete="on"
            />
            <img src={EyeIcon} alt="EyeIcon" />
          </div>
          <div className={styles.field}>
            <img src={LockIcon} alt="LockIcon" />
            <input
              type="password"
              placeholder="Old Password"
              name="old password"
              id="oldPassword"
            />
            <img src={EyeIcon} alt="EyeIcon" />
          </div>
          <div className={styles.field}>
            <img src={LockIcon} alt="LockIcon" />
            <input
              type="password"
              placeholder="New Password"
              name="new password"
              id="newPassword"
            />
            <img src={EyeIcon} alt="EyeIcon" />
          </div>
        </div>
        <div className={styles.button}>
          <button>Update</button>
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
