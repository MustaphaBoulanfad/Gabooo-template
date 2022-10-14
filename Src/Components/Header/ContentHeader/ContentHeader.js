import React from "react";
import styles from "./ContentHeader.module.scss";
import { Button } from "../../../Layouts/Layouts";

const ContentHeader = () => {
  return (
    <div className={styles.contentHeader}>
      <div className={styles.contentContainer}>
        <div className={styles.info}>
          <h1>fashion that likes to say yes</h1>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Vivamus suscipit tortor eget felis porttitor volutpat.
          </p>
          <Button className="primary">shop now</Button>
        </div>
        <div className={styles.image}>
          <div className={styles.img}></div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
