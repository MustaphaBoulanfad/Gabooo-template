import React from "react";
import styles from "./List.module.scss";

const List = ({ items, orientation, color, position }) => {
  return (
    <ul
      className={
        styles[orientation] + " " + styles[color] + " " + styles[position]
      }
    >
      {items.map((item, index) => (
        <li key={index}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default List;
