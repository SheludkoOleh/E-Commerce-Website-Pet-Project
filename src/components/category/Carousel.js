import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './slick-theme.css'
import './slick.css'
import { product } from "../../assets/data/data";
import '../../assets/styless/typography.css'

const ProductCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <Slider {...settings}>
        {product.map((product) => (
            <div className="car">
          <div className="car_inside" key={product.id}>
            <img src={product.cover} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{`$${product.price}`}</p>
            <p>{product.title}</p>
          </div>
          </div>
        ))}
      </Slider>
    );
  };
  
  export default ProductCarousel;