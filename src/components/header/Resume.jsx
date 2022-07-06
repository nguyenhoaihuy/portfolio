import React from 'react'
import CV from '../../assets/huynguyen.pdf'

function Resume() {
  return (
    <div className='resume'>
        <a href={CV} className='btn btn-primary'>Resume</a>
        <a href='#contact' className="btn btn-primary">Contact</a>
    </div>
  )
}

export default Resume