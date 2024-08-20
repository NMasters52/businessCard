import React from 'react'
import './App.css'
import Info from'./Info.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

export default function App() {

  return (
      <div className='business-card'>
        <Info />
        <About />
        <Footer />
      </div>
  )
}

