/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import { ToastContainer } from "react-toastify";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <div className="min-h-screen bg-white">
      <ToastContainer></ToastContainer>
        <Navbar cartCount={cartItems.length}></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <MainSection cartItems={cartItems} setCartItems={setCartItems}></MainSection>
        <Steps></Steps>
        <Pricing></Pricing>
      </div>
    </>
  );
};

export default App;
