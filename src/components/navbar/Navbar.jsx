import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { MdOutlineSchool } from 'react-icons/md'

function Navbar() {
  return (
    <nav>
      <a href='#header' className='active'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><HiOutlineOfficeBuilding /></a>
      <a href='#education'><MdOutlineSchool /></a>
      <a href='#story'><BiBook /></a>
      <a href='#contact'><BiMessageSquareDetail /></a>
      
    </nav>
  )
}

export default Navbar