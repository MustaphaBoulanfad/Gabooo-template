import React from "react";
import styles from "./Collection.module.scss";
import List from "../List/List";
import ItemCard from "../ItemCard/ItemCard";
import { Button, Container } from "../../Layouts/Layouts";

const Collection = ({ items }) => {
  return (
    <section className={styles.collection}>
      <Container size="large">
        <div className={styles.collectionContainer}>
          <div className={styles.collectionHeader}>
            <h1>From Our Collection</h1>
            <div>
              <p>
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
              <List
                items={["Winter", "Spring", "Summer", "Fall"]}
                orientation="row"
                color="dark"
                position="center"
              />
            </div>
          </div>
          <div className={styles.itemsContainer}>
            {items.map((item) => (
              <ItemCard key={item.id} name={item.name} price={item.price} />
            ))}
          </div>
          <Button className="primary">Show Me More</Button>
        </div>
      </Container>
    </section>
  );
};

export default Collection;
