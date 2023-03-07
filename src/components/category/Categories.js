import React from "react";
import Glider from "react-glider";
import { product } from "../../assets/data/data";
import ProductCarousel from './Carousel'
import '../../assets/styless/typography.css'
import './categories.css'

const Categories = () => {
  return (
    <div className="categories">
      <div className="inside_categories">
        <div className="categories_text">
        <div className="caption-lg ">
          <p>100% natural</p>
        </div>
        <h3 className="heading-lg">Great for Your Skin.</h3>
        <div className="icon" id="icon"></div>
        <div className="body-lg">
          <p>Our organic soaps gently take care of your skin.</p>
        </div>
        </div>
        <div className="product_list">
            <ProductCarousel />
        </div>
      </div>
    </div>
  );
};

export default Categories;

