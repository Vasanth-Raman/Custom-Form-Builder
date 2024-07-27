import React, { useState } from "react";
import styles from "./NavBar.module.css";
import CloseIcon from "../../../assets/icons/close-icon.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activePage, setActivePage] = useState("flow");
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLeft}>
        <input type="text" placeholder="Enter From Name" />
      </div>
      <div className={styles.navMiddle}>
        <div>
          <Link
            to={"/form/flow"}
            className={activePage === "flow" ? styles.activePage : ""}
            onClick={() => setActivePage("flow")}
          >
            Flow
          </Link>
        </div>
        <div>
          <Link
            to={"/form/theme"}
            className={activePage === "theme" ? styles.activePage : ""}
            onClick={() => setActivePage("theme")}
          >
            Theme
          </Link>
        </div>
        <div>
          <Link
            to={"/form/response"}
            className={activePage === "response" ? styles.activePage : ""}
            onClick={() => setActivePage("response")}
          >
            Response
          </Link>
        </div>
      </div>
      <div className={styles.navRight}>
        <button className={styles.shareBtn}>Share</button>
        <button className={styles.saveBtn}>Save</button>
        <div className={styles.imgDiv}>
          <img src={CloseIcon} alt="close icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
