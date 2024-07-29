import React, { useState } from "react";
import styles from "./InputButtonCard.module.css";
import DeleteIcon from "../../../../assets/icons/delete-icon.svg";
import { useDispatch } from "react-redux";
import {
  removeFlowItem,
  updateFlowItemOrder,
  updateFlowItemContent,
} from "../../../../redux/slices/formFlowSlice";
import { addError, removeError } from "../../../../redux/slices/formErrorSlice";

const InputButtonCard = ({ title, index }) => {
  const [error, setError] = useState(null);
  const [btnValue, setBtnValue] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setBtnValue(value);
    dispatch(updateFlowItemContent({ index, newData: value }));
  };
  const validate = () => {
    if (btnValue.trim() === "") {
      setError("Required Field");
      dispatch(addError("Required Field"));
    } else {
      setError(null);
      dispatch(removeError());
    }
  };

  const dispatch = useDispatch();
  const handleRemove = (index) => {
    dispatch(removeFlowItem({ index }));
    dispatch(updateFlowItemOrder());
  };
  return (
    <div className={styles.btnContainer}>
      <p>{title}</p>
      <input
        type="text"
        placeholder="User will see this as button"
        value={btnValue}
        onChange={handleChange}
        onBlur={validate}
        autoFocus
      />
      <small>{error}</small>
      <div className={styles.deleteIcon} onClick={() => handleRemove(index)}>
        <img src={DeleteIcon} alt="delete icon" />
      </div>
    </div>
  );
};

export default InputButtonCard;
