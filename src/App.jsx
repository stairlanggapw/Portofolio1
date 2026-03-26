import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Project from './assets/components/Project'
import Skill from './assets/components/Skill'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

