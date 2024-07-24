import React from 'react';
import { man1, man2, man3, woman1 } from '../assets/images';

const Browse = () => {
  return (
    <section className="pt-20">
      <div className="w-full bg-[#F0F0F0] rounded-[40px] flex flex-col items-center pb-8">
        <h2 className="font-montserrat font-black text-[48px] pt-16 pb-10">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="flex gap-6 md:grid-cols-2 md:grid-rows-2 w-full max-w-screen-md p-4 pb-6">
          <div className="w-[407px] h-[289px]">
            <img src={man1} alt="Casual" className="object-cover  rounded-[20px]" />
          </div>
          <div className="w-[684px] h-[289px] ">
            <img src={man2} alt="Formal" className="object-cover rounded-[20px]" />
          </div>
          <div className="w-[684px] h-[289px]">
            <img src={woman1} alt="Party" className="object-cover rounded-[20px]" />
          </div>
          <div className="w-[407px] h-[289px]">
            <img src={man3} alt="Gym" className="object-cover rounded-[20px]" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Browse;
