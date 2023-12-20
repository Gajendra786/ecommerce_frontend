import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData.js";

const items = MainCarouselData.map(item=><img src={item.image} className='cursor-pointer' role='presentation' alt={item.path}/>);

const MainCarousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    infinite
    autoPlay
    autoPlayInterval={1000}
    disableButtonsControls
    // disableDotsControls
  />
);

export default MainCarousel;
