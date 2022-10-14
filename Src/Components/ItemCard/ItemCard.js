import React from "react";
import styles from "./ItemCard.module.scss";

const ItemCard = ({ name, price }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <div className={styles.img}></div>
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>$ {price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
