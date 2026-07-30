import React from 'react'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Main Content */}
      <main className="ml-[33.33%] p-10">
        <h1 className="text-5xl font-bold text-cyan-400">
          Welcome to My Portfolio
        </h1>

        <p className="mt-5 text-slate-300 text-lg">
          I am a Java Full Stack Developer.
        </p>
      </main>

    </div>
  )
}

export default App