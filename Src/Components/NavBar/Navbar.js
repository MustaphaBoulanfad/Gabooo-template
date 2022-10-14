import React, { Fragment } from "react";
import List from "../List/List";
import styles from "./navbar.module.scss";

const Navbar = ({ width, showNav }) => {
  return (
    <div
      className={`${styles.HeaderContainer} ${showNav ? styles.show : ""}`}
      id="HeaderContainer"
    >
      <List
        items={["Women", "Men", "Children", "Collection"]}
        color="dark"
        orientation={width < 840 ? "column" : "row"}
        position={width < 1200 ? "small-left" : "left"}
      />
      <span>gabooo</span>
      <List
        items={["Spring", "Summer", "Fall", "Winter"]}
        color="dark"
        orientation={width < 840 ? "column" : "row"}
        position={width < 1200 ? "small-right" : "right"}
      />
    </div>
  );
};

export default Navbar;
