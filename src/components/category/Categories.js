import React from "react";
import '../../assets/styless/typography.css'
import '../../assets/styless/section.css'
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import { product } from '../../assets/data/data'
import Slider from "react-slick"
import Glider from 'react-glider';

function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <MdNavigateNext className='icon' />
        </button>
      </div>
    )
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <GrFormPrevious className='icon' />
        </button>
      </div>
    )
  }


  export const Categories = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
        <div className="categories">
            <div className="inside_categories">
                    <div className='caption-lg '>
                            <p>100% natural</p>
                    </div>
                    <h3 className='heading-lg'>Great for Your Skin.</h3>
                    <div className='icon' id='icon'></div>
                    <div className='body-lg'>   
                        <p>Our organic soaps gently take care of your skin.</p>
                    </div>

                    <div className="product_list">
                        {/* <Slider {...settings}>
                            {product.map((item) => (
                                <div className="boxs" key={item.id}>
                                    <img src={item.cover} alt='' />
                                    <h3>{item.name}</h3>
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </Slider> */}
                        <Glider
                            className="glider-container"
                            draggable
                            hasArrows
                            hasDots
                            slidesToShow={3}
                            >
                            <div>
                                <span>1</span>
                            </div>
                            </Glider>
                    </div>
            </div>
        </div>
    )
}