import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex bg-gradient-to-tl from-pink-500 to-indigo-600'>
      <Sidebar/>
      <main className='flex-1'>
        <Home/>
      </main>
    </div>
  )
}

export default App