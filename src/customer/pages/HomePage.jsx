import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import MainCarousel from '../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel"
import Footer from '../components/Footer/Footer'
import {mens_kurta} from "../Data/mens_kurta.js"
import ProductCard  from "../components/Product/ProductCard"
import Product  from "../components/Product/Product"
import ProductDetails from "../components/ProductDetails/ProductDetails"
import Cart from "../components/Carts/Cart"
import Checkout from '../components/Checkout/Checkout'
import Order from '../components/Order/Order'

const HomePage = () => {
  return (
    <div>
      {/* <Navigation />
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta"/>
      <HomeSectionCarousel data={mens_kurta} sectionName="Men's Shoes"/>
      <HomeSectionCarousel data={mens_kurta} sectionName="Men's Shirts"/>
      <HomeSectionCarousel data={mens_kurta} sectionName="Men's Pents"/>
      </div>
      <Footer /> */}
      {/* <ProductCard /> */}
      {/* <Product /> */}
      {/* <ProductDetails /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      <Order />
    </div>
  )
}

export default HomePage
