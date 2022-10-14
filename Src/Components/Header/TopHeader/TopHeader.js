import React from "react";
import styles from "./TopHeader.module.scss";
import { Container } from "../../../Layouts/Layouts";
import { FaTwitter, FaGooglePlusSquare, FaFacebookF } from "react-icons/fa";
import { MdCopyAll } from "react-icons/md";

const TopHeader = ({ copyText }) => {
  return (
    <div className={styles.contactHeader}>
      <Container size="large">
        <div className={styles.contactContainer}>
          <div className={styles.info}>
            <div onClick={copyText}>
              <p>gabooo@mail.com</p>
              <MdCopyAll />
            </div>
            <div onClick={copyText}>
              <p>+12345-678-90</p>
              <MdCopyAll />
            </div>
          </div>

          <div className={styles.socialMedia}>
            <div className={styles.icons}>
              <FaFacebookF />
              <FaTwitter />
              <FaGooglePlusSquare />
            </div>
            <div className={styles.actions}>
              <a href="#" target="_self" className={styles.link}>
                Login
              </a>
              <a href="#" target="_self" className={styles.link}>
                Register
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
