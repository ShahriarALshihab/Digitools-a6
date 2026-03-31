/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';


const App = () => {
const [cartItems, setCartItems]=useState([]); 
  return (
<>
<div>
<Navbar cartCount={cartItems.length}></Navbar>
<Banner></Banner>
</div>
</>
  )
}

export default App