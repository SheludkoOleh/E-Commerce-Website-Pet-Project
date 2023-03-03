import React from 'react'
import icon from "../../assets/images/icon.png"
import "./product.css"
import '../../assets/styless/typography.css'
import { product } from '../../assets/data/data'
import { ProductCard } from './ProductCard'

export const Product = () => {
  return (
       <>
        <section className='product'>
            <div className='shop_banner'>
                <div className='caption-lg '>
                    <p>Shop</p>
                </div>
                <h3 className='heading-lg'>Start Your Skincare today</h3>
                <div className='icon' id='icon'> 
                </div>
                <div className='body-lg'>   
                    <p>Select the soap you like and add it to the shopping cart.</p>
                </div>
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
