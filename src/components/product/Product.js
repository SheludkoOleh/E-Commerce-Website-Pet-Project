import React from 'react'
import icon from "../../assets/images/icon.png"
import "./product.css"
import { product } from '../../assets/data/data'
import { ProductCard } from './ProductCard'

export const Product = () => {
  return (
       <>
        <section className='product'>
            <div className='shop_banner'>
                <p>Shop</p>
                <h3>Start Your Skincare today</h3>
                <img className='qwq' id='icon' src={icon} alt="" />
                <p>Select the soap you like and add it to the shopping cart.</p>
            </div>
            <div className='conteinergrid3'>
                {product.map((item) => (
                    <ProductCard key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} />
                ))}
            
            </div>

        </section>
       </>
  )
}
