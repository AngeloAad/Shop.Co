import React from 'react'
import { Link } from 'react-router-dom';

const TopSellingCard = ({product}) => {
  const {imgURL, name, rating, ratingNumber, price, originalPrice, discount, key} = product;

  return (
    <div className="flex flex-col px-3 w-full">
      <Link to={`/tshirts?clothes=${key}`} onClick={() => { imgURL, name, rating, ratingNumber, price, originalPrice, discount }}>
      <div className="bg-[#F0EEED] rounded-[20px] sm:h-[298px] sm:w-[298px] h-[200px] w-[200px]">
        <img
          src={imgURL}
          alt={name}
          className="transform transition-transform 
          duration-300 hover:scale-110 justify-center items-center"
        />
      </div>
      </Link>

      <p className="font-archivo font-black sm:text-xl text-[16px] pt-4 leading-none">
        {name}
      </p>

      <div className="flex justify-start items-center pt-2">
        <img src={rating} alt="rating" className="object-contain sm:max-h-[20px] max-h-[16px]" />
        <p className="font-montserrat text-sm leading-normal text-slate-gray pl-4 max-sm:text-[12px]">
          <span className="font-medium text-black">{ratingNumber}</span>5
        </p>
      </div>

      <div className="flex mt-2 text-xl font-bold font-montserrat">
        {price}
        <span className="text-slate-gray pl-2 font-black">
          <span className="font-semibold line-through">{originalPrice}</span>
        </span>
        {discount && (
          <span className="text-[12px] text-[#FF3333] bg-[#FFE5E5] ml-2 px-3 rounded-full">
            {discount}
          </span>
        )}
      </div>

    </div>
  );
};

export default TopSellingCard;