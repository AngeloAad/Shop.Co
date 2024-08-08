import React, { useState, useEffect } from "react";
import { useBag } from "../constants/BagContext";
import { Link } from "react-router-dom";
import { NavBar, Footer, Button } from "../components";
import Subscribe from "./Subscribe";
import { close, coupon, arrowRight } from "../assets/icons";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import MyCartCard from "../components/MyCartCard";

const MyCart = () => {
  const [isClosed, setIsClosed] = useState(false);
  const { state, dispatch } = useBag();
  const { items } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [counts, setCounts] = useState(
    items.reduce((acc, item) => {
      acc[`${item.name}_${item.size}_${item.color}`] = item.quantity || 1;
      return acc;
    }, {})
  );

  const [subtotals, setSubtotals] = useState(
    items.reduce((acc, item) => {
      acc[`${item.name}_${item.size}_${item.color}`] =
        (item.quantity || 1) * parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return acc;
    }, {})
  );

  const updateCount = (name, size, color, delta) => {
    const key = `${name}_${size}_${color}`;
    setCounts((prevCounts) => {
      const newCount = Math.max(1, (prevCounts[key] || 1) + delta);
      const priceNumber = parseFloat(
        items
          .find(
            (item) =>
              item.name === name && item.size === size && item.color === color
          )
          .price.replace(/[^0-9.-]+/g, "")
      );
      setSubtotals((prevSubtotals) => ({
        ...prevSubtotals,
        [key]: newCount * priceNumber,
      }));
      return {
        ...prevCounts,
        [key]: newCount,
      };
    });
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { name, size, color, quantity: counts[key] + delta },
    });
  };

  const handleDelete = (item) => {
    const key = `${item.name}_${item.size}_${item.color}`;
    dispatch({
      type: "DELETE_FROM_CART",
      payload: { name: item.name, size: item.size, color: item.color },
    });
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[key];
      return newCounts;
    });
    setSubtotals((prevSubtotals) => {
      const newSubtotals = { ...prevSubtotals };
      delete newSubtotals[key];
      return newSubtotals;
    });
  };

  const calculateSubtotal = () => {
    return Object.values(subtotals).reduce(
      (acc, subtotal) => acc + subtotal,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const code = 0.2;
  const discount = subtotal * code;
  const total = subtotal - discount + 15;

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <section className="relative max-container">
      {!isClosed && (
        <div className="w-full bg-black sm:h-[38px] h-[34px] sm:py-[9.5px] py-[8.5px]">
          <div className="flex justify-between items-center padding-x">
            <div className="flex-grow flex justify-center items-center">
              <p className="font-archivo text-sm text-white font-thin sm:text-[14px] text-[12px]">
                Sign up and get 20% off your first order. &nbsp;
                <span className="font-light underline max-ss:hidden cursor-pointer">
                  Sign Up Now
                </span>
              </p>
            </div>
            <div className="flex justify-end items-center">
              <button onClick={handleClose}>
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
        </div>
      )}

      <section>
        <NavBar />
      </section>

      <section className="pt-6 padding-x">
        <div className="border-b border-b-gray-400" />
        <div className="flex items-center sm:pt-6 pt-4">
          <ul className=" flex items-center sm:text-[16px] text-[14px] leading-none font-montserrat text-slate-gray">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <ChevronRightIcon aria-hidden="true" className="w-4 h-4 mx-2" />
            <Link to="/cart" className="cursor-pointer text-black font-medium">
              Cart
            </Link>
          </ul>
        </div>
      </section>

      <section className="padding-x sm:pt-6 pt-2">
        {items.length === 0 ? (
          <div className="flex justify-center items-center h-full py-20">
            <p className="font-montserrat sm:text-[48px] xs:text-[42px] text-[38px] font-black">
              YOU CART <br className="sm:hidden block" />
              IS EMPTY.
            </p>
          </div>
        ) : (
          <>
            <p
              className="font-montserrat font-black sm:text-[40px] text-[32px]
            sm:pb-4 pb-2"
            >
              YOUR CART
            </p>

            <div
              className="flex justify-between items-start max-xl:flex-col max-xl:justify-center
            gap-4 max-xl:gap-y-6 w-full max-xl:items-center"
            >
              <div
                className="flex border border-gray-400 w-[705px] max-lg:max-w-[715px] max-lg:w-full rounded-[20px] sm:py-[16px] sm:px-[18px]
              py-[14px] px-[16px] flex-col sm:space-y-12 xs:space-y-11 space-y-10"
              >
                {items.map((bagItem) => (
                  <MyCartCard
                    key={`${bagItem.name}_${bagItem.size}_${bagItem.color}`}
                    {...bagItem}
                    count={
                      counts[`${bagItem.name}_${bagItem.size}_${bagItem.color}`]
                    }
                    updateCount={(delta) =>
                      updateCount(
                        bagItem.name,
                        bagItem.size,
                        bagItem.color,
                        delta
                      )
                    }
                    subtotal={
                      subtotals[
                        `${bagItem.name}_${bagItem.size}_${bagItem.color}`
                      ]
                    }
                    onDelete={() => handleDelete(bagItem)}
                  />
                ))}
              </div>

              {/* {Order Summary part} */}
              <div
                className="flex border border-gray-400 max-w-[505px] w-full rounded-[20px] sm:py-[18px] sm:px-[18px]
              py-[16px] px-[16px] flex-col font-montserrat"
              >
                <h4 className="sm:text-[24px] text-[20px] font-bold">
                  Order Summary
                </h4>

                <div className="my-4 space-y-3">
                  <div className="flex justify-between items-center sm:text-[20px] text-[16px] text-slate-gray">
                    <p>Subtotal</p>
                    <p className="font-bold text-black">
                      ${subtotal.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center sm:text-[20px] text-[16px] text-slate-gray">
                    <p>Discount (-20%)</p>
                    <p className="font-bold text-[#FF3333]">
                      -${discount.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center sm:text-[20px] text-[16px] text-slate-gray">
                    <p>Delivery Fee</p>
                    <p className="font-bold text-black">$15</p>
                  </div>
                </div>
                <div className="border-b border-b-gray-400 w-full mb-4" />
                <div className="flex justify-between items-center sm:text-[20px] text-[16px] text-slate-gray">
                  <p className="text-black">Total</p>
                  <p className="font-bold text-black">${total.toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-center sm:pt-5 pt-4 ">
                  <div
                    className="flex justify-start items-center max-w-[326px] w-full bg-[#F0F0F0] rounded-[62px] h-[48px]
                  p-g justify-items-center font-montserrat sm:text-[16px] text-[14px]"
                  >
                    <img src={coupon} alt="coupon" className="pl-4 pr-3" />
                    <input
                      className="bg-[#F0F0F0] border-none outline-none"
                      type="text"
                      placeholder="Add promo code"
                    />
                  </div>
                  <div className="px-2"></div>
                  <div className="">
                    <Button
                      label="Apply"
                      className="xs:px-10 sm:text-[16px] text-[14px]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4  font-montserrat sm:text-[16px] text-[14px] w-full bg-black rounded-[62px] sm:h-[60px] h-[54px]">
                  <div className="flex items-center">
                    <button className="text-white pr-2">
                      <p>Go to checkout</p>
                    </button>
                    <ArrowRightIcon aria-hidden="true" className="sm:w-6 w-4" strokeWidth="2" color="white" />
                  </div>
                </div>

              </div>
            </div>
          </>
        )}
      </section>

      <section className="padding-x sm:pt-20 pt-16">
        <Subscribe />
      </section>

      <section className="padding-x sm:pt-20 pt-16">
        <Footer />
      </section>
    </section>
  );
};

export default MyCart;
