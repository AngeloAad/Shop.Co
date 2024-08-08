import React, { useState, useEffect } from "react";
import Button from "./Button";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { filter } from "../assets/icons";
import TestimonialsCard from "./TestimonialsCard";
import { testimonials } from "../constants";

const RatingAndReviews = () => {
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Start by showing 6 testimonials

  const updateDisplayedTestimonials = () => {
    if (window.innerWidth < 768) {
      setVisibleCount(3);
    } else {
      setVisibleCount(6);
    }
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    setDisplayedTestimonials(testimonials.slice(0, visibleCount));
  }, [visibleCount]);

  useEffect(() => {
    const handleResize = () => {
      updateDisplayedTestimonials();
    };

    window.addEventListener("resize", handleResize);
    updateDisplayedTestimonials();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="flex w-full">
        <div
          className="flex justify-between items-center w-full font-montserrat text-slate-gray sm:text-[20px] 
        text-[16px] md:px-12 px-0 border-b border-gray-400 pb-6 relative"
        >
          <button>
            <p>Product Details</p>
          </button>

          <div className="relative">
            <button>
              <p className="text-black font-medium">Rating & Reviews</p>
            </button>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 bottom-[-24px] w-full max-w-[414px] 
            border-b-2 border-black"
            ></div>
          </div>

          <button>
            <p>FAQs</p>
          </button>
          
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 font-montserrat">
        <p className="font-bold sm:text-[24px] text-[20px]">
          All Reviews
          <span className="pl-2 font-normal sm:text-[16px] text-[14px] text-slate-gray">
            (451)
          </span>
        </p>
        <div className="flex gap-2 font-montserrat sm:text-[16px] text-[14px]">
          <div
            className="flex justify-center items-center   
            rounded-[62px] bg-[#F0F0F0] sm:w-[48px] w-[40px]"
          >
            <button>
              <img src={filter} alt="" className="max-sm:w-5" />
            </button>
          </div>
          <div
            className="flex justify-evenly items-center   
            rounded-[62px] bg-[#F0F0F0] w-[120px] max-sm:hidden"
          >
            <button className="flex justify-center items-center gap-4 font-medium">
              <p>Latest</p>
              <ChevronDownIcon aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
          <Button
            label="Write a Review"
            className="font-medium sm:text-[16px] text-[12px] max-sm:px-3"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 pt-6 justify-center lg:justify-start">
        {displayedTestimonials.map((test, index) => (
          <div key={test.key} className="w-full flex justify-center">
            <TestimonialsCard {...test} />
          </div>
        ))}
      </div>

      {visibleCount < testimonials.length && (
        <div className="flex justify-center items-center pt-10">
          <Button
            backgroundColor=""
            label="Load More Reviews"
            className="text-black font-montserrat font-medium sm:text-[16px] text-[14px] px-9"
            onClick={loadMore}
          />
        </div>
      )}
    </section>
  );
};

export default RatingAndReviews;
