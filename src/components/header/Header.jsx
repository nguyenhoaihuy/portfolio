import React from 'react'
import './header.css'
import Hello from './Hello'
import Avatar from './Avatar'
import Resume from './Resume'
import SocialIcon from './SocialIcon'




function Header() {
  return (
    <header>
        <section id='header' className="container header__container">
            <Hello />
            <Avatar />
            <Resume />
            <SocialIcon />
        </section>
    </header>
  )
}

export default Header