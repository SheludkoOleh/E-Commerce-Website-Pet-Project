import React from "react";
import '../../assets/styless/typography.css'
import '../../assets/styless/section.css'
import about from '../../assets/images/about.png'
// import about from '../../assets/images/plant.svg'


export default function About() {
    return (
        <div className="about_us">
            <div className="inside_about">
                <div className="img_about">
                    <img className="about" src={about} alt=""/>
                </div>
                <div className="text_section">
                <div className='caption-lg '>
                    <p>100% natural</p>
                </div>
                <h3 className='heading-lg'>Great for Your Skin.</h3>
                <div className='icon' id='icon'> 
                </div>
                <div className='body-lg'>   
                    <p>Our organic soaps gently take care of your skin.</p>
                </div>
                <div className="text_about">
                    <div className="svg_text">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plant-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M2 9a10 10 0 1 0 20 0" />
                            <path d="M12 19a10 10 0 0 1 10 -10" />
                            <path d="M2 9a10 10 0 0 1 10 10" />
                            <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
                            <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
                        </svg>
                        <a>Only natural ingredients are used in our soaps.</a>
                    </div>
                    <div className="svg_text">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plant-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M2 9a10 10 0 1 0 20 0" />
                            <path d="M12 19a10 10 0 0 1 10 -10" />
                            <path d="M2 9a10 10 0 0 1 10 10" />
                            <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
                            <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
                        </svg>
                        <a>We combine cold-pressed olive oil, coconut oil, and cocoa butter.</a>
                    </div>
                    <div className="svg_text">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plant-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M2 9a10 10 0 1 0 20 0" />
                            <path d="M12 19a10 10 0 0 1 10 -10" />
                            <path d="M2 9a10 10 0 0 1 10 10" />
                            <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
                            <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
                        </svg>
                        <a>Each bar of soap contains antioxidants and vitamin E.</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}