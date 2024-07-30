import React, { useRef, useState } from "react";
import styles from "./ButtonInput.module.css";

const ButtonInput = ({ title, data, onUserInput }) => {
  const [disabled, setDisabled] = useState(false);

  const buttonRef = useRef();
  console.log(buttonRef);
  const handleClick = () => {
    const buttonValue = buttonRef.current.textContent;
    console.log("Button value:", buttonRef.current.textContent);
    setDisabled(true);
    onUserInput();
  };
  return (
    <div className={styles.btnWrapper}>
      <button
        ref={buttonRef}
        className={disabled ? styles.disabled : styles.btn}
        disabled={disabled ? true : false}
        onClick={handleClick}
      >
        {data}
      </button>
    </div>
  );
};

export default ButtonInput;
