import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { useState } from 'react'

import './App.css'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './components/about'
import Contact from './components/contact'
import Aboutpage from './components/Aboutpage'
import Contactpage from './components/Contactpage'
import Projectspage from './components/Projectspage'

function App() {

  return (
    <>
    <Routes element={<Layout />}>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
            <Nav   />      
              <Hero />
              <About />
              <Contact />
            </>
          }
        />

        {/* Separate pages */}
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/projects" element={<Projectspage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>

     {/* <Hero  />
     <About />
     <Contact /> */}
    
    </>
    
  )
}

export default App;
