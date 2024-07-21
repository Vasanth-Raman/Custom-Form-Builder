import React from "react";
import styles from "./Login.module.css";
import DoubleTriange from "../../../assets/icons/double-triangle.svg";
import SandalEllipse from "../../../assets/icons/ellipse-sandal.svg";
import PinkEllipse from "../../../assets/icons/ellipse-pink.svg";
import BackArrow from "../../../assets/icons/arrow-back.svg";

const LogIn = () => {
  return (
    <div className={styles.signUpContainer}>
      <img className={styles.backArrow} src={BackArrow} alt="BackArrow" />
      <img
        className={styles.doubleTriangle}
        src={DoubleTriange}
        alt="DoubleTriange"
      />
      <img
        className={styles.sandalEllipse}
        src={SandalEllipse}
        alt="SandalEllipse"
      />
      <img className={styles.pinkEllipse} src={PinkEllipse} alt="PinkEllipse" />
      <div className={styles.credContainer}>
        <div className={styles.fieldsContainer}>
          <div className={styles.fields}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              autoComplete="on"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.fields}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              autoComplete="on"
              placeholder="Enter your password"
            />
            <small>enter same password in both the fields</small>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button>Log In</button>
          <p>
            Don't have an account ? <span>Register now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
