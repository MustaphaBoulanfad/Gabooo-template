import React from "react";
import styles from "./Story.module.scss";
import { Button } from "../../Layouts/Layouts";

const Story = () => {
  return (
    <section className={styles.story}>
      <div className={styles.image}>
        <div className={styles.img} />
      </div>
      <div className={styles.storyContainer}>
        <div className={styles.story}>
          <h2>Story Behind</h2>
          <span>gabooo</span>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Vivamus suscipit tortor eget felis porttitor volutpat. Accumsan
            id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam
            vehisuscipit tortor eget felis.
          </p>
          <Button className="primary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Story;
