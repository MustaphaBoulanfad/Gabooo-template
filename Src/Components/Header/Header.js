import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Container } from "../../Layouts/Layouts";
import TopHeader from "./TopHeader/TopHeader";
import Navbar from "../NavBar/Navbar";
import ContentHeader from "./ContentHeader/ContentHeader";
import BottomHeader from "./BottomHeader/BottomHeader";
import styles from "./Header.module.scss";
import { MdOutlineViewHeadline } from "react-icons/md";

const Overlay = ({ show, setShow }) => {
  return (
    <div
      className={`${styles.overlay} ${show ? styles.showOverlay : ""}`}
      onClick={() => setShow(!show)}
    ></div>
  );
};

const Header = ({
  width,
  showNav,
  setShowNav,
  copyText,
  showAccount,
  setShowAccount,
  content,
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay show={showNav} setShow={setShowNav} />,
        document.getElementById("portal")
      )}
      <header>
        <TopHeader copyText={copyText} />
        <MdOutlineViewHeadline
          className={styles.showList}
          onClick={() => setShowNav(!showNav)}
        />
        <Container size="small">
          <Navbar width={width} showNav={showNav} />
          {content ? <ContentHeader /> : ""}
        </Container>
        <BottomHeader
          width={width}
          showAccount={showAccount}
          setShowAccount={setShowAccount}
        />
      </header>
    </Fragment>
  );
};

export default Header;
