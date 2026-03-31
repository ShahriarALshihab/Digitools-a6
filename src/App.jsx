/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <div>
        <Navbar cartCount={cartItems.length}></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <MainSection cartItems={cartItems} setCartItems={setCartItems}></MainSection>
      </div>
    </>
  );
};

export default App;
