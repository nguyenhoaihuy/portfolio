import React from 'react'
import './header.css'
import SocialIcon from './SocialIcon'
import Introduction from './Introduction'




function Header() {
  return (
    <header>
        <section id='header' className="container header__container">
            <Introduction />
            <SocialIcon />
        </section>
    </header>
  )
}

export default Header