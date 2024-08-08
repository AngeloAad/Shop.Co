import React from "react";

const TestimonialsCard = ({
  imgURL,
  options,
  check,
  nameOf,
  message,
  date,
}) => {
  return (
    <section>
      <div className="border font-montserrat rounded-[20px] max-w-[610px] w-full py-6 px-6 flex flex-col justify-start">
        <div className="flex justify-between items-start">
          <img src={imgURL} alt="5-stars" className="max-w-[138px] h-[22px]" />
          <img src={options} alt="options" />
        </div>

        <div className="flex justify-start items-center pt-3">
          <h4 className="sm:text-[20px] text-[16px] leading-none font-bold pr-[6px]">
            {nameOf}
          </h4>
          <img src={check} alt="check-mark" className="sm:w-6 w-5" />
        </div>

        <div className="pt-3">
          <p className="p-g sm:text-[16px] text-[14px]">"{message}"</p>
        </div>

        <div className="mt-7">
          <p className="p-g sm:text-[16px] text-[14px] ">{date}</p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsCard;
