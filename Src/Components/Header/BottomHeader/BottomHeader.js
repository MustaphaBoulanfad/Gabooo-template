import React from "react";
import styles from "./BottomHeader.module.scss";
import { Container, Input } from "../../../Layouts/Layouts";
import List from "../../List/List";
import { FaSearch, FaShoppingCart, FaAngleDoubleDown } from "react-icons/fa";

const BottomHeader = ({ width, showAccount, setShowAccount }) => {
  return (
    <div className={styles.bottomHeader}>
      <Container size="large">
        <div className={styles.bottomContainer}>
          <FaAngleDoubleDown
            className={styles.showList}
            onClick={() => setShowAccount(!showAccount)}
          />
          <div
            className={`${showAccount ? styles.show : ""} ${styles.myAccount}`}
          >
            <div className={styles.language}>
              <select className={styles.currency}>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
                <option value="dhs">DHs</option>
              </select>
              <select className={styles.language}>
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
              </select>
            </div>
            <List
              items={[
                "Shopping Cart",
                "WishList (7)",
                "Checkout",
                "My account",
              ]}
              color="light"
              orientation={width < 840 ? "column" : "row"}
              position={width < 840 ? "bottom" : "small-left"}
            />
          </div>
          <div className={styles.actions}>
            <div className={styles.search}>
              <Input placeHolder="Text" type="text" />
              <FaSearch />
            </div>
            <div className={styles.cart}>
              <FaShoppingCart />
              <span>$79.00</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
