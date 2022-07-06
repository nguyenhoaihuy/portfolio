import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { MdOutlineSchool } from 'react-icons/md'
import { AiOutlineProject } from 'react-icons/ai'
import { useState } from 'react'

function Navbar() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#home' className={ activeNav === '#home' ? 'active' : ''} onClick={()=> setActiveNav('#home')}><AiOutlineHome /></a>
      <a href='#about' className={ activeNav === '#about' ? 'active' : ''} onClick={()=> setActiveNav('#about')}><AiOutlineUser /></a>
      <a href='#experience' className={ activeNav === '#experience' ? 'active' : ''} onClick={()=> setActiveNav('#experience')}><HiOutlineOfficeBuilding /></a>
      <a href='#education' className={ activeNav === '#education' ? 'active' : ''} onClick={()=> setActiveNav('#education')}><MdOutlineSchool /></a>
      <a href='#project' className={ activeNav === '#project' ? 'active' : ''} onClick={()=> setActiveNav('#project')}><AiOutlineProject /></a>
      <a href='#story' className={ activeNav === '#story' ? 'active' : ''} onClick={()=> setActiveNav('#story')}><BiBook /></a>
      <a href='#contact' className={ activeNav === '#contact' ? 'active' : ''} onClick={()=> setActiveNav('#contact')}><BiMessageSquareDetail /></a>
      
    </nav>
  )
}

export default Navbar