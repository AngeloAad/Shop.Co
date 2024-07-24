import React from 'react'

const TopSellingCard = ({
  imgURL,
  name,
  rating,
  ratingNumber,
  price,
  originalPrice,
  discount,
  Key,
}) => {
  return (
    <div className="flex flex-col px-3 w-full">
      {/* <Link to={`/productsSelection?shoe=${key}`} onClick={() => { imgURL, name, price }}> */}
      <div className="bg-[#F0EEED] rounded-[20px] h-[298px] w-[295px]">
        <img
          src={imgURL}
          alt={name}
          className="transform transition-transform 
          duration-300 hover:scale-110 justify-center items-center"
        />
      </div>
      {/* </Link> */}

      <p className="font-archivo font-black text-xl pt-4 leading-none">
        {name}
      </p>

      <div className="flex justify-start items-center pt-2">
        <img src={rating} alt="rating" className="object-contain" />
        <p className="font-montserrat text-sm leading-normal text-slate-gray pl-4">
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