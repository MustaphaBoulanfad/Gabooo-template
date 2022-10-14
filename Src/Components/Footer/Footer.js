import React from "react";
import styles from "./Footer.module.scss";
import List from "../List/List";
import { Container } from "../../Layouts/Layouts";

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container size="large">
        <div className={styles.footerContainer}>
          <div className={styles.about}>
            <span>gabooo</span>
            <p>
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
            <p>Created by Graphberry.Belgrade.Serbia</p>
            <p>
              &#169; 2017 <span>Gabono</span>.inc
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.list}>
              <h3>Links</h3>
              <List
                items={[
                  "Home",
                  "Sign in",
                  "Register",
                  "FAQ",
                  "Support",
                  "Terms & conditions",
                ]}
                orientation="column"
                color="light"
                position="small-bottom"
              />
            </div>
            <div className={styles.list}>
              <h3>Shopping</h3>
              <List
                items={[
                  "Shopping Cart",
                  "Winter",
                  "Spring",
                  "Summer",
                  "Fall",
                  "Collection",
                ]}
                orientation="column"
                color="light"
                position="small-bottom"
              />
            </div>
          </div>
          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <p>
              Get in touch with us via mail phone.We are waiting for your call
              or message
            </p>
            <div className={styles.email}>
              <p>Graphberry@gmail.com</p>
            </div>
            <div className={styles.icons}>
              <FaFacebookF />
              <FaTwitter />
              <FaGooglePlusG />
              <FaDribbble />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
