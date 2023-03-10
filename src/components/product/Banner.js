import React from 'react'
import './banner.css'
import '../../assets/styless/typography.css'

export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner_inside'>
      <div className='caption-lg '>
        <p>box you desrve</p>
      </div>
        <h2 className='main_text'>
          <span className='heading-lg'>
            <span>ESTHETIC COMFORT</span>
            <p>LIFESTYLE</p>
          </span>
        </h2>
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
                        <a>Екосмуки на щодень.</a>
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
                        <a>Корзини для твого інтер'єру</a>
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
                        <a>Особлий розмір та колір.</a>
                    </div>
                  </div>
      </div>
    </div>
  
  )
}
