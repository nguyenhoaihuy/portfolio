import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Stories from './components/stories/Stories'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <About />
        <Projects />
        <Stories />
        <Contact />
    </div>
    
  )
}

export default App