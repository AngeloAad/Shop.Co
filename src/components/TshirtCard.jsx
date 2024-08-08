// src/components/TshirtCard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBag } from "../constants/BagContext";
import Button from "./Button";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { checkMark2 } from "../assets/icons";
import Alert from '@mui/material/Alert';

const sizes = [
  { size: "Small", key: 1 },
  { size: "Medium", key: 2 },
  { size: "Large", key: 3 },
  { size: "X-Large", key: 4 },
];

const colors = [
  { name: "Olive Drab", key: 1, hex: "#4F4631" },
  { name: "Jungle Green", key: 2, hex: "#314F4A" },
  { name: "Charcoal Blue", key: 3, hex: "#31344F" },
];

const TshirtCard = ({ imgURL, name, rating, ratingNumber, price, originalPrice, discount, description }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [alert, setAlert] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for quantity
  const { dispatch } = useBag();
  const navigate = useNavigate();

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const addToCart = () => {
    if (!selectedSize) {
      setAlert({ severity: "error", message: "Select a size!" });
      return;
    }
    if (!selectedColor) {
      setAlert({ severity: "error", message: "Select a Color!" });
      return;
    }

    const product = {
      imgURL,
      name,
      price,
      description,
      size: selectedSize,
      color: selectedColor,
      quantity,
    };

    dispatch({ type: "ADD_TO_CART", payload: product });

    setAlert({
      severity: "success",
      message: `Added ${name} (Size: ${selectedSize}, Quantity: ${quantity}) to cart`,
    });
  };

  const handleAddToCart = () => {
    addToCart();
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <section className="lg:flex lg:gap-12 gap-6 max-sm:flex max-md:flex-col max-md:justify-center max-md:items-center">
      <div className="flex flex-col max-lg:justify-center max-lg:items-center">
        <div
          className="bg-[#F0EEED] rounded-[20px] 
        sm:h-[530px] sm:w-[530px] h-[290px] w-[358px] justify-center items-center max-lg:mb-4"
        >
          <img
            src={imgURL}
            alt={name}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-montserrat font-black sm:text-[40px] text-[24px] pt-4 leading-none">
          <span className="uppercase">{name}</span>
        </p>

        <div className="flex justify-start items-center pt-2">
          <img
            src={rating}
            alt="rating"
            className="object-contain sm:h-[25px] h-[28px]"
          />
          <p className="font-montserrat text-[18px] leading-normal text-slate-gray pl-4 max-sm:text-[16px]">
            <span className="font-medium text-black">{ratingNumber}</span>5
          </p>
        </div>

        <div className="flex mt-2 font-bold font-montserrat">
          <span className="sm:text-[32px] text-[24px]">{price}</span>
          <span className="text-slate-gray pl-3 font-black sm:text-[32px] text-[24px]">
            <span className="font-semibold line-through">{originalPrice}</span>
          </span>
          {discount && (
            <span
              className="flex sm:text-[16px] text-[14px] text-[#FF3333] bg-[#FFE5E5] ml-3 px-3 rounded-full
            justify-center items-center my-2"
            >
              {discount}
            </span>
          )}
        </div>

        <div className="flex flex-col font-montserrat pt-2">
          <span className="sm:text-[16px] text-[14px] text-slate-gray max-w-[590px]">
            <p>{description}</p>
          </span>
          <div className="border-b border-b-gray-400 pt-4" />
          <p className="sm:text-[16px] text-[14px] text-slate-gray pt-4">
            Select Colors
          </p>
        </div>

        <div className="flex pt-2 gap-4">
          {colors.map((color) => (
            <button
              key={color.key}
              className="w-[37px] h-[37px] rounded-full"
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.name)}
            >
              <div className="flex justify-center items-center">
                {selectedColor === color.name && <img src={checkMark2} alt="CheckMark" />}
              </div>
            </button>
          ))}
        </div>

        <div className="flex flex-col font-montserrat">
          <div className="border-b border-b-gray-400 pt-6" />
          <p className="sm:text-[16px] text-[14px] text-slate-gray pt-4">
            Choose Size
          </p>
        </div>

        <div
          className="flex pt-2 flex-wrap font-montserrat sm:text-[16px] text-[14px]  
            rounded-[62px] sm:py-4 py-2 font-medium gap-4"
        >
          {sizes.map((size) => (
            <Button
              key={size.key}
              onClick={() => setSelectedSize(size.size)}
              label={size.size}
              backgroundColor={
                selectedSize === size.size ? "bg-black" : "#F0F0F0"
              }
              textColor={
                selectedSize === size.size ? "text-white" : "text-slate-gray"
              }
              className="font-montserrat sm:text-[16px] text-[14px]  
                rounded-[62px] sm:py-4 py-2 px-5"
            />
          ))}

          {alert && (
            <div className="mt-2">
              <Alert severity={alert.severity}>{alert.message}</Alert>
            </div>
          )}
        </div>

        <div className="border-b border-b-gray-400 pt-6" />

        <div className="flex gap-4 w-full">
          <div
            className="flex mt-6 py-3 font-montserrat sm:text-[16px] text-[14px]  
                rounded-[62px] bg-[#F0F0F0] sm:w-[140px] w-[110px] justify-between items-center"
          >
            <button onClick={decrementQuantity} className="pl-4">
              <MinusIcon
                aria-hidden="true"
                className="sm:w-6 w-5"
                strokeWidth="2"
              />
            </button>
            <p className="">{quantity}</p>
            <button onClick={incrementQuantity} className="pr-4">
              <PlusIcon
                aria-hidden="true"
                className="sm:w-6 w-5"
                strokeWidth="2"
              />
            </button>
          </div>

          <div className="">
            <Button
              label="Add To Cart"
              className="font-montserrat sm:text-[16px] text-[14px] 
                  rounded-[62px] mt-6 w-full"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TshirtCard;
