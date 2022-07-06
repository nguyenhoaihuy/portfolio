import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

function SocialIcon() {
  return (
    <div className="header__socials">
        <a href="https://github.com/nguyenhoaihuy" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/huynguyen92/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://www.facebook.com/HuyNguyen92sc/" target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default SocialIcon