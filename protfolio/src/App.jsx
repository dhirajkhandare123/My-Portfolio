import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";


import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Internship from './components/Internship';
import CourseWork from './components/CourseWork';
import Cerifications from './components/Cerifications';
import Contact from './components/Contact';



const App = () => {
  return (
    <div className='flex bg-gradient-to-tl from-pink-500 to-indigo-600'>
      <Sidebar/>
      <main className='flex-1 ml-20'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/internship" element={<Internship/>} />
          <Route path="/coursework" element={<CourseWork/>} />
          <Route path="/certifications" element={<Cerifications/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
      </main>
    </div>
  )
}

export default App