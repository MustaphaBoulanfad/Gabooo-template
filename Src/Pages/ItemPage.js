import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import Item from "../Components/Item/Item";
import SimilarItems from "../Components/SimilarItems/SimilarItems";
import Footer from "../Components/Footer/Footer";

const ItemPage = ({
  items,
  width,
  showNav,
  setShowNav,
  showAccount,
  setShowAccount,
  copyText,
}) => {
  return (
    <Fragment>
      <Header
        items={items}
        width={width}
        showNav={showNav}
        showAccount={showAccount}
        copyText={copyText}
        setShowAccount={setShowAccount}
        setShowNav={setShowNav}
        content={false}
      />
      <Item />
      <SimilarItems items={items} />
      <Footer />
    </Fragment>
  );
};

export default ItemPage;
