/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './components/Navbar'


const App = () => {
const [cartItems, setCartItems]=useState([]); 
  return (
<>
<div>
<Navbar cartCount={cartItems.length}></Navbar>
</div>
</>
  )
}

export default App