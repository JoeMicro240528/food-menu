import React from 'react'
import Navbar from './components/Navigation'
import Product from './components/Product'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar />
       <Routes>
         <Route path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
       </Routes>
      </div>
  
  )
}

export default App
