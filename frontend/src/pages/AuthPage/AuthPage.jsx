import React from "react";
import styles from "./AuthPage.module.css";
import SignUp from "../../components/AuthComponents/SignUp/SignUp";
import LogIn from "../../components/AuthComponents/LogIn/LogIn";

const AuthPage = ({ isLogin }) => {
  console.log(isLogin);
  return (
    <div className={styles.container}>{isLogin ? <LogIn /> : <SignUp />}</div>
  );
};

export default AuthPage;
