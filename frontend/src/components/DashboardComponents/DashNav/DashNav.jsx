import React, { useState } from "react";
import styles from "./DashNav.module.css";
import Dropdown from "../../../assets/icons/drop-down-icon.svg";
import Dropup from "../../../assets/icons/drop-up-icon.svg";
import { Link } from "react-router-dom";

const DashNav = () => {
  const [openDropdown, setOpenDropDown] = useState(false);
  return (
    <div className={styles.navWrapper}>
      <div className={styles.border}>
        <div className={styles.content}>
          <div
            className={styles.fixed}
            onClick={() => setOpenDropDown(!openDropdown)}
            style={
              openDropdown
                ? { borderBottom: "none" }
                : { borderBottom: "1px solid #3d3d3f" }
            }
          >
            <p>Dewank Rastogi's workspace</p>
            <img src={openDropdown ? Dropup : Dropdown} alt="drop down" />
          </div>
          {openDropdown && (
            <div className={styles.dropOptions}>
              <div
                className={styles.settings}
                style={
                  openDropdown ? { paddingTop: "10px" } : { paddingTop: "0" }
                }
              >
                <Link to={"/dashboard/settings"}>Settings</Link>
              </div>
              <div>
                <button>Log Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashNav;
