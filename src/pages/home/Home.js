import React from 'react'
import {Product} from '../../components/product/Product'
import Banner from '../../components/product/Banner';
import Between from '../../components/between/Between';
import Between_why from '../../components/between/Between_why';
import Between_why_us from '../../components/between/Between_why_us';
import About from '../../components/category/About';
import Categories from '../../components/category/Categories';
import { Discount } from '../../components/category/Discount';
import Why_us from '../../components/category/Why_us';
import Questions from '../../components/category/Questions'
import './home.css'

function Home() {
  return (
    <>
        <Banner/>
        <Between />
        <About />
        <Categories />
        <Discount />
        <Between_why />
        <Why_us />
        <Between_why_us />
        <Questions />
        <Product />
    </>
    
  )
}

export default Home