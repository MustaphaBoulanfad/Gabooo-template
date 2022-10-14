import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children, size }) => {
  return (
    <div
      className={
        size === "small" ? styles["container-small"] : styles["container-large"]
      }
    >
      {children}
    </div>
  );
};

export default Container;
