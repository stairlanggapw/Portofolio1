import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">

        <h2 className="text-2xl font-black tracking-tight">
            <span className="text-dark text-3xl">Por</span>
            <span style={{
            WebkitTextStroke: '1px #0A0A0A',
            color: 'transparent'
            }} className="dark:text-transparent text-3xl">Tofo</span>
            <span className="text-dark">lio</span>
            <span className="text-dark">.</span>
        </h2>

        <p className="font-['Manrope'] text-gray-400 text-sm text-center">
          © 2026 Stefanus. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="font-['Manrope'] text-gray-400 text-sm hover:text-dark transition-all">Github</a>
          <a href="#" className="font-['Manrope'] text-gray-400 text-sm hover:text-dark transition-all">Instagram</a>
          <a href="#" className="font-['Manrope'] text-gray-400 text-sm hover:text-dark transition-all">Twitter</a>
          <a href="#" className="font-['Manrope'] text-gray-400 text-sm hover:text-dark transition-all">LinkedIn</a>          
          <a href="#" className="font-['Manrope'] text-gray-400 text-sm hover:text-dark transition-all">Facebook</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer