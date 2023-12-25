import React from "react";
import "./Product.css"

const ProductCard = ({data}) => {
  return (
    <div className='productcard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={data.imageUrl}/>
      </div>
      <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>{data.brand}</p>
            <p>{data.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>{data.discountedPrice}</p>
            <p className='line-through opacity-50'>{data.price}</p>
            <p className='text-green-600 semibold'>{data.discountPersent}% off</p>
        </div>
      </div>
    </div>
  )
};

export default ProductCard;
