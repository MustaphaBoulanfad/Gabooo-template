import React from "react";
import { Button, Container } from "../../Layouts/Layouts";
import styles from "./Item.module.scss";

const Item = () => {
  return (
    <Container size="large">
      <div className={styles.itemContainer}>
        <div className={styles.imagesContainer}>
          <div className={styles.img}></div>
          <div className={styles.images}>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
          </div>
        </div>
        <div className={styles.description}>
          <h2>Winter Collection - Paris jacket</h2>
          <span>$89.99</span>

          <div className={styles.details}>
            <div className={styles.size}>
              <select>
                <option value="">Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="XXXL">XXXL</option>
              </select>
            </div>

            <div>
              <span>GTY </span>
              <div className={styles.qty}>
                <input type="number" defaultValue="1" />
              </div>
            </div>
            <div>
              <span>Color </span>
              <div className={styles.color}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <Button className="dark">buy this item</Button>
          <div className={styles.list}>
            <div id="0" className={`${styles.listItem} ${styles.show}`}>
              <div className={styles.listHeader}>
                <p>Detail</p>
                <span> - </span>
              </div>
              <div className={styles.listBody}>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Vestibulum ac diam sit amet quam vehicula elementum sed
                  sit amet dui. Vivamus suscipit tortor eget felis porttitor
                  volutpat.
                </p>
              </div>
            </div>
            <div id="1" className={styles.listItem}>
              <div className={styles.listHeader}>
                <p>Delivery</p>
                <span>+</span>
              </div>
              <div className={styles.listBody}>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Vestibulum ac diam sit amet quam vehicula elementum sed
                  sit amet dui. Vivamus suscipit tortor eget felis porttitor
                  volutpat.
                </p>
              </div>
            </div>
            <div id="2" className={styles.listItem}>
              <div className={styles.listHeader}>
                <p>style</p>
                <span>+</span>
              </div>
              <div className={styles.listBody}>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Vestibulum ac diam sit amet quam vehicula elementum sed
                  sit amet dui. Vivamus suscipit tortor eget felis porttitor
                  volutpat.
                </p>
              </div>
            </div>
            <div id="3" className={styles.listItem}>
              <div className={styles.listHeader}>
                <p>style</p>
                <span>+</span>
              </div>
              <div className={styles.listBody}>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Vestibulum ac diam sit amet quam vehicula elementum sed
                  sit amet dui. Vivamus suscipit tortor eget felis porttitor
                  volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Item;
