import React from "react";
import { Container, Button, Input } from "../../Layouts/Layouts";
import styles from "./Winter.module.scss";
import ItemCard from "../ItemCard/ItemCard";

const Winter = ({ items }) => {
  return (
    <section className={styles.winter}>
      <Container size="large">
        <div className={styles.winterContainer}>
          <h1>New winter collection</h1>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Vivamus suscipit tortor eget felis porttitor volutpat.
          </p>
          <Button className="primary">All Collection</Button>

          <div className={styles.itemsContainer}>
            {items.map((item) => {
              if (item.id > 3) {
                return;
              } else {
                return (
                  <ItemCard key={item.id} name={item.name} price={item.price} />
                );
              }
            })}
          </div>
        </div>
      </Container>
      <div className={styles.sales}>
        <p>Season sale</p>
        <p>up to 70% off</p>
      </div>
      <Container size="large">
        <div className={styles.newLettersContainer}>
          <label htmlFor="email">Subscribe to Newsletter :</label>
          <div>
            <input type="email" id="email" placeholder="Your email" />
            <Button className="primary">Subscribe</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Winter;
