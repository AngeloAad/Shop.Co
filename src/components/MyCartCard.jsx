// src/components/MyCartCard.jsx
import React from "react";
import { trash } from "../assets/icons";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const MyCartCard = ({ imgURL, name, size, color, price, count, updateCount, onDelete }) => {
  return (
    <section>
      <div className="flex md:justify-start md:items-start w-full justify-center items-center sm:h-[124px] h-[104px]">
        <img
          src={imgURL}
          alt={name}
          className="sm:w-[124px] sm:h-[124px] w-[100px] h-[100px] bg-[#F0EEED] rounded-[8.66px]"
        />

        <div className="flex flex-col w-full sm:ml-[16px] ml-[10px] font-montserrat sm:h-[124px] h-[104px]">
          <p className="font-bold sm:text-[20px] text-[14px]">{name}</p>
          <p className="sm:text-[14px] text-[12px] font-medium mt-[2px]">
            Size:&nbsp;<span className="text-slate-gray">{size}</span>
          </p>
          <p className="sm:text-[14px] text-[12px] font-medium sm:mt-[1px]">
            Color:&nbsp;<span className="text-slate-gray">{color}</span>
          </p>
          <p className="font-bold sm:text-[20px] text-[14px] xs:mt-3">{price}</p>
        </div>

        <div className="flex flex-col justify-between items-end sm:h-[124px] h-[104px]">
          <button onClick={onDelete}>
            <img src={trash} alt="Trash" className="w-6 h-6" />
          </button>
          <div
            className="flex sm:py-[10px] py-[6px] font-montserrat sm:text-[16px] text-[14px] rounded-[62px] bg-[#F0F0F0] sm:w-[105px] w-[85px] justify-between items-center"
          >
            <button onClick={() => updateCount(-1)} className="sm:ml-3 ml-2">
              <MinusIcon aria-hidden="true" className="sm:w-6 w-4" strokeWidth="2" />
            </button>
            <p className="">{count}</p>
            <button onClick={() => updateCount(1)} className="sm:mr-3 mr-2">
              <PlusIcon aria-hidden="true" className="sm:w-6 w-4" strokeWidth="2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCartCard;
