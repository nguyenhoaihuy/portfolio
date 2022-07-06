import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Stories from './components/stories/Stories'
import Contact from './components/contact/Contact'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Stories />
        <Contact />
    </div>
    
  )
}

export default App