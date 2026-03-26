import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden px-4">

      <div className="absolute top-32 sm:top-52 lg:top-70 left-1/2 -translate-x-1/2 w-[200px] sm:w-[500px] lg:w-[880px] z-[5]">
        <img 
          src={assets.human}
          alt="hero"
          className="w-full object-cover object-top"
          style={{
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        />
      </div>

      <p className="font-['Manrope'] mt-16 mb-4 text-xl text-gray-500 tracking-wide text-center">
        👋, my name is <span className="font-semibold text-dark">Jack</span> and I am a freelance
      </p>

      <h1 className="font-['Bebas_Neue'] text-[22vw] sm:text-[13vw] lg:text-[11vw] leading-none font-black text-dark text-center z-10 whitespace-nowrap">
        Web Designer
      </h1>

      <h1 className="font-['Bebas_Neue'] text-[22vw] sm:text-[13vw] lg:text-[11vw] leading-none text-center z-[1] whitespace-nowrap" style={{
        WebkitTextStroke: '2px #0A0A0A',
        color: 'transparent'
      }}>
        & Web Developer
      </h1>

      <p className="font-['Manrope'] text-sm text-gray-500 mt-4 self-start ml-4 sm:ml-12 lg:ml-30 xl:ml-30 z-10">
        Crafting digital experience with passion and precision.
      </p>
      
      <div className="flex gap-4 mt-8 sm:mt-16 lg:mt-40 z-10">
        <a href="#project" className="font-['Manrope'] bg-dark text-white text-sm font-medium px-4 sm:px-6 py-3 rounded-sm hover:scale-105 transition-all">
          You need a developer
        </a>
        <a href="#contact" className="font-['Manrope'] border border-dark text-dark text-sm font-medium px-4 sm:px-6 py-3 rounded-sm hover:scale-105 transition-all">
          You need a designer
        </a>
      </div>

    </div>
  )
}

export default Hero