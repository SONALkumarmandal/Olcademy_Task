import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar.jsx'
// import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import Applayout from './layouts/Applayout.jsx'
import ProdDetail from './pages/ProdDetail.jsx'

function App() {
  return (
   <Routes>
    <Route path='' element={<Applayout/>}>
    <Route path='' element={<HomePage/>}/>
    <Route path='explore' element={<HomePage/>}/>
    <Route path='detail' element={<ProdDetail/>}/>
    </Route>
  </Routes>
  )
}

export default App