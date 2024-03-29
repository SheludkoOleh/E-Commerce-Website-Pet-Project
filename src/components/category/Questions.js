import React from 'react'
import './questions.css'
import '../../assets/styless/typography.css'
import questions from '../../assets/images/questions.png'
import Accordion from './Accordion'
import '../../assets/styless/section.css'

function Questions() {
  return (
    <section className='about_us'>
        <div className='inside_about' id='question_inside'>
            <div className='text_section'>
                <div className="caption-lg">
                    <p>Questions</p>
                </div> 
                <h3 className='heading-lg'>Still Have Questions?</h3>
                <div className="icon" id="icon"></div>
                <div className='body-lg'>
                    <p>Read the sections below and contact us if you need a consultation or any kind of help.</p>
                </div>
                <div className='text_question'>
                    <Accordion />
                </div>
            </div>
            <div className='img_about'></div>
             <img className='about' src={questions} alt=''></img>
        </div>
    </section>
  )
}

export default Questions