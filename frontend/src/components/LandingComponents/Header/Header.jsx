import React from "react";
import styles from "./Header.module.css";
import Logo from "../../../assets/icons/app-logo.svg";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header>
        <div className={styles.leftHeader}>
          <img src={Logo} alt="app logo" />
          <p>FormBot</p>
        </div>
        <div className={styles.rightHeader}>
          <a href="#" className={styles.signInLink}>
            Sign In
          </a>
          <a href="#" className={styles.signUpLink}>
            Create a FormBot
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
