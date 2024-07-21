import React from "react";
import styles from "./SignUp.module.css";
import DoubleTriange from "../../../assets/icons/double-triangle.svg";
import SandalEllipse from "../../../assets/icons/ellipse-sandal.svg";
import PinkEllipse from "../../../assets/icons/ellipse-pink.svg";
import BackArrow from "../../../assets/icons/arrow-back.svg";

const SignUp = () => {
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              required
              autoComplete="on"
              placeholder="Enter a username"
            />
          </div>
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
              placeholder="Enter a password"
            />
          </div>
          <div className={styles.fields}>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              required
              autoComplete="on"
              placeholder="Confirm your password"
            />
            <small>enter same password in both the fields</small>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button>Sign Up</button>
          <p>
            Already have an account ? <span>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
