import React from 'react'
import './why_us.css'
import '../../assets/styless/typography.css'

function Why_us() {
  return (
    <section className='why_us'>
        <div className='why_us_inside' id='color'>
            <div className='empty_div'>
            </div>
            <div className='text_section' id='why_text_section'>
                <div className="caption-lg" id='color_caption'>
                    <p>Why us</p>
                </div> 
                <h3 className='heading-lg' id='headingh3'>Why Shop at Purity?</h3>
                <div className='body-lg' id='color_body'>
                    <p>Our range of handcrafted soaps is made to treat you and your skin, from morning washing-ups to evening relaxing baths.</p>
                </div>
                <div className='svg_text' id='color'>
                    <a>We are sure that using soap should be a pleasant experience — we create each soap bar not only to cleanse the skin but also to improve your mood, help you relax, and enjoy your bath rituals. We produce a vast range of different soaps with elegant smells and unique characteristics. You can shop right on this website and get your soap delivered really fast.</a>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Why_us