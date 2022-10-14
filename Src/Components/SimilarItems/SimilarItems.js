import React from "react";
import styles from "./SimilarItems.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import { Container } from "../../Layouts/Layouts";

const SimilarItems = ({ items }) => {
  return (
    <section className={styles.similar}>
      <Container size="large">
        <div className={styles.similarContainer}>
          <h1>Similar items</h1>
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
    </section>
  );
};

export default SimilarItems;
