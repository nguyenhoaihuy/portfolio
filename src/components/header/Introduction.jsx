import React from 'react'
import Hello from './Hello'
import Avatar from './Avatar'
import Resume from './Resume'

function Introduction() {
  return (
    <div id='home' className='introduction'>
        <Hello />
        <Avatar />
        <Resume />
    </div>
  )
}

export default Introduction