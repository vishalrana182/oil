import React from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Shop from './Pages/shop'
import Navbar from './Components/Navbar'
import Heritage from './Pages/heritage'
import Footer from './Components/footer'
import Contact from './Pages/contact'
import CustomCursor from './Components/CustomCursor'

const App = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
