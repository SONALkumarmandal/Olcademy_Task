import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Applayout from './layouts/Applayout.jsx'
import Explore from './pages/Explore.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Applayout/>}>
    <Route path='' element={<HomePage/>}/>
    <Route path='explore' element={<Explore/>}/>
    <Route path="/product/:id" element={<ProductDetails/>} />
    </Route>
  </Routes>
  )
}

export default App