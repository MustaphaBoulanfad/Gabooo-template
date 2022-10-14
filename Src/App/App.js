import React, { useState } from "react";
import Home from "../Pages/Home";
import ItemPage from "../Pages/ItemPage";

const App = () => {
  const [width, setWidth] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [items, setItem] = useState([
    {
      id: 0,
      name: "Paris Jacket",
      price: 89.99,
    },
    {
      id: 1,
      name: "Levis Jeans",
      price: 109.99,
    },
    {
      id: 2,
      name: "kangaroos",
      price: 285.99,
    },
    {
      id: 3,
      name: "Asics",
      price: 100.0,
    },
    {
      id: 4,
      name: "Diadora N9000",
      price: 105.99,
    },
    {
      id: 5,
      name: "reebok GL3000",
      price: 92.99,
    },
    {
      id: 6,
      name: "Primiata 483",
      price: 158.99,
    },
    {
      id: 7,
      name: "Diadora V.7000",
      price: 145.0,
    },
  ]);

  window.addEventListener("resize", () => {
    //To manage the orientation of list
    setWidth(window.innerWidth);
  });
  window.addEventListener("load", () => {
    //To manage the orientation of list
    setWidth(window.innerWidth);
  });

  // Copy the email and the phone number in topHeader
  const copyText = (event) => {
    let element = event.target;
    if (element.tagName === "P") {
      navigator.clipboard.writeText(element.innerText);
      return;
    } else if (element.tagName === "svg") {
      let p = element.parentNode.firstElementChild;
      navigator.clipboard.writeText(p.innerText);
    } else if (element.tagName === "div") {
      let p = element.firstElementChild;
      navigator.clipboard.writeText(p.innerText);
    }
  };

  return (
    <Home
      items={items}
      width={width}
      showNav={showNav}
      setShowNav={setShowNav}
      showAccount={showAccount}
      setShowAccount={setShowAccount}
      copyText={copyText}
    />
  );
  // return (
  //   <ItemPage
  //     items={items}
  //     width={width}
  //     showNav={showNav}
  //     setShowNav={setShowNav}
  //     showAccount={showAccount}
  //     setShowAccount={setShowAccount}
  //     copyText={copyText}
  //   />
  // );
};

export default App;
