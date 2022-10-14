import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeHolder, type }) => {
  return <input type={type} placeholder={placeHolder} />;
};

export default Input;
