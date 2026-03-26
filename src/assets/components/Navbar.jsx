import React, { useState } from 'react'

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex justify-between items-center px-5 sm:px-12 lg:px-24 xl:px-40 py-5 sticky top-0 z-20 backdrop-blur-xl">
      
      <h2 className="text-2xl font-black tracking-tight">
        <span className="text-dark text-3xl">Por</span>
        <span style={{
          WebkitTextStroke: '1px #0A0A0A',
          color: 'transparent'
        }} className="dark:text-transparent text-3xl">Tofo</span>
        <span className="text-dark">lio</span>
        <span className="text-dark">.</span>
      </h2>

      <div className={`text-base text-gray-600 dark:text-gray-700
        ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'}
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
        max-sm:flex-col max-sm:bg-dark max-sm:text-white max-sm:pt-20
        flex sm:items-center gap-8 transition-all duration-300`}>
        
        <button onClick={() => setSidebarOpen(false)} className="sm:hidden absolute right-5 top-5 text-white text-xl">✕</button>
        <a onClick={() => setSidebarOpen(false)} href="#" className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-dark hover:after:w-full after:transition-all">Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#about" className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-dark hover:after:w-full after:transition-all">About me</a>
        <a onClick={() => setSidebarOpen(false)} href="#Myproject" className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-dark hover:after:w-full after:transition-all">My Project</a>
        <a onClick={() => setSidebarOpen(false)} href="#Myskills" className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-dark hover:after:w-full after:transition-all">My Skills</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact" className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-dark hover:after:w-full after:transition-all">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        <a href="/Artikel.pdf" download className="max-sm:hidden bg-primary text-dark text-base px-5 py-2 hover:scale-105 transition-all">
            Download CV
        </a>

        <button onClick={() => setSidebarOpen(true)} className="sm:hidden flex flex-col gap-1.5">
          <span className="w-6 h-0.5 bg-dark dark:bg-white block"></span>
          <span className="w-6 h-0.5 bg-dark dark:bg-white block"></span>
          <span className="w-4 h-0.5 bg-dark dark:bg-white block"></span>
        </button>
      </div>

    </div>
  )
}

export default Navbar