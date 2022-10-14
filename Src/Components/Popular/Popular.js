import React from "react";
import { Container } from "../../Layouts/Layouts";
import styles from "./Popular.module.scss";
import List from "../List/List";
import ItemCard from "../ItemCard/ItemCard";

const Popular = ({ items }) => {
  return (
    <section className={styles.popular}>
      <Container size="large">
        <div className={styles.popularContainer}>
          <h1>Popular now</h1>

          <List
            items={["Trending", "Bestsellers", "New", "On Sale"]}
            color="dark"
            orientation="row"
            position="center"
          />
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

export default Popular;
