import React from 'react'
import './banner.css'


export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner_text_p'>
        <p>box you desrve</p>
      </div>
        <h2 className='banner_inside'>
          <span className='banner_text_h2'>
            <span>ESTHETIC COMFORT</span>
            <span>LIFESTYLE</span>
          </span>
        </h2>
        <div className='banner_text'>
            <ul>
                <li>Екосмуки на щодень</li>
                <li>Корзини для твого інтер'єру</li>
                <li>Особлий розмір та колір</li>
            </ul>
        </div>
    </div>
  )
}
