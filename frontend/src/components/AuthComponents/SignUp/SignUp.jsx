import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import DoubleTriange from "../../../assets/icons/double-triangle.svg";
import SandalEllipse from "../../../assets/icons/ellipse-sandal.svg";
import PinkEllipse from "../../../assets/icons/ellipse-pink.svg";
import BackArrow from "../../../assets/icons/arrow-back.svg";
import { useNavigate } from "react-router-dom";
import validateRegister from "../../../validations/validateRegister";

const SignUp = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    setFormErrors(validateRegister(credentials));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Logic goes here
    }
  }, [formErrors, isSubmit]);

  return (
    <div className={styles.signUpContainer}>
      <img
        className={styles.backArrow}
        src={BackArrow}
        alt="BackArrow"
        onClick={() => navigate("/")}
      />
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
      <form
        className={styles.credContainer}
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <div className={styles.fieldsContainer}>
          <div className={styles.fields}>
            <label
              htmlFor="username"
              className={`${
                formErrors.userName ? styles.errorText : styles.label
              }`}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="userName"
              value={credentials.userName}
              onChange={handleChange}
              autoComplete="on"
              placeholder="Enter a username"
              className={`${
                formErrors.userName ? styles.errorBorder : styles.input
              }`}
            />
            <small>{formErrors.userName}</small>
          </div>
          <div className={styles.fields}>
            <label
              htmlFor="email"
              className={`${
                formErrors.email ? styles.errorText : styles.label
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              autoComplete="on"
              placeholder="Enter your email"
              className={`${
                formErrors.email ? styles.errorBorder : styles.input
              }`}
            />
            <small>{formErrors.email}</small>
          </div>
          <div className={styles.fields}>
            <label
              htmlFor="password"
              className={`${
                formErrors.password ? styles.errorText : styles.label
              }`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              autoComplete="on"
              placeholder="**********"
              className={`${
                formErrors.password ? styles.errorBorder : styles.input
              }`}
            />
            <small>{formErrors.password}</small>
          </div>
          <div className={styles.fields}>
            <label
              htmlFor="confirmPassword"
              className={`${
                formErrors.confirmPassword ? styles.errorText : styles.label
              }`}
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
              autoComplete="on"
              placeholder="**********"
              className={`${
                formErrors.confirmPassword ? styles.errorBorder : styles.input
              }`}
            />
            <small>{formErrors.confirmPassword}</small>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button onClick={handleSubmit}>Sign Up</button>
          <p>
            Already have an account ?{" "}
            <span onClick={() => navigate("/auth/login")}>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
