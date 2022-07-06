import React from 'react'
import './about.css'
import ME from '../../assets/huy.jpg'
import { AiFillLayout } from 'react-icons/ai'
import { AiTwotoneSetting } from 'react-icons/ai'
import { GiBrain } from 'react-icons/gi'

function About() {
  return (
    <section id='about' className='about__container'>
        <h5>Get to know</h5>
        <h2>ABOUT ME</h2>
      <div className='about_container'>
        <div className='about_image'>
          <img src={ ME }></img>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <AiTwotoneSetting className='about_icon'/>
              <h3>Back-end</h3>
              <p>4+ years</p>
            </article>
            <article className='about_card'>
              <AiFillLayout className='about_icon'/>
              <h3>Front-end</h3>
              <p>4+ years</p>
            </article>
            <article className='about_card'>
              <GiBrain className='about_icon'/>
              <h3>AI/ML</h3>
              <p>2+ years</p>
            </article>
          </div>
          <p>Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments; Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments;</p>
        </div>
      </div>
      
    </section>
  )
}

export default About