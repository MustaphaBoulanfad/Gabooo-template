import React, { Fragment, useState } from "react";
import Header from "../Components/Header/Header";
import Popular from "../Components/Popular/Popular";
import Winter from "../Components/Winter/Winter";
import Collection from "../Components/Collection/Collection";
import Story from "../Components/Story/Story";
import Footer from "../Components/Footer/Footer";

const Home = ({
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
        width={width}
        showNav={showNav}
        setShowNav={setShowNav}
        showAccount={showAccount}
        setShowAccount={setShowAccount}
        copyText={copyText}
        content={true}
      />
      <Popular items={items} />
      <Winter items={items} />
      <Collection items={items} />
      <Story />
      <Footer />
    </Fragment>
  );
};

export default Home;
