import { useState } from 'react' 
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import  Intro from './components/intro/intro.jsx'
import Skill from './components/skill/skill.jsx'
import Works from './components/works/works.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/Footer/Footer.jsx' 
import works from './components/works/works.jsx'

function App() {
  
  return (
    <>  
    <Navbar/>
    <Intro/>
    <Skill/>
    <Works/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
