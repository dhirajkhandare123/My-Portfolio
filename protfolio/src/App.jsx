import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";


import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills';



const App = () => {
  return (
    <div className='flex bg-gradient-to-tl from-pink-500 to-indigo-600'>
      <Sidebar/>
      <main className='flex-1 ml-20'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
        
      </main>
    </div>
  )
}

export default App