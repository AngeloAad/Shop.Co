import React from 'react';
import { man1, man2, man3, woman1 } from '../assets/images';

const Browse = () => {
  return (
    <section className="pt-20">
      <div className="w-full bg-[#F0F0F0] rounded-[40px] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center leading-none sm:text-[48px] text-[32px] pt-16 max-w-[687px]">
          <h2 className="font-montserrat font-black">
            BROWSE BY <br className="md:hidden" /> DRESS STYLE
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 w-full h-full md:px-[40px] md:py-[30px] px-[30px] py-[20px] gap-y-5 sm:pb-12 pb-8">

          <div className="relative flex sm:h-[289px] h-[190px] rounded-[20px] bg-white">
            <p className='absolute top-4 left-6 font-archivo sm:text-[36px] text-[24px] font-bold'>
              Casual
            </p>
            <img src={man1} alt="human" className="object-cover w-full h-full rounded-[20px]"/>
          </div>

          <div className="relative flex sm:h-[289px] h-[190px] rounded-[20px] bg-white">
            <p className='absolute top-4 left-6 font-archivo sm:text-[36px] text-[24px] font-bold'>
              Formal
            </p>
            <img src={man2} alt="human" className="object-cover w-full h-full rounded-[20px]"/>
          </div>

          <div className="relative flex sm:h-[289px] h-[190px] rounded-[20px] bg-white">
            <p className='absolute top-4 left-6 font-archivo sm:text-[36px] text-[24px] font-bold'>
              Party
            </p>
            <img src={woman1} alt="human" className="object-cover w-full h-full rounded-[20px]"/>
          </div>

          <div className="relative flex sm:h-[289px] h-[190px] rounded-[20px] bg-white">
            <p className='absolute top-4 left-6 font-archivo sm:text-[36px] text-[24px] font-bold'>
              Gym
            </p>
            <img src={man3} alt="human" className="object-cover w-full h-full rounded-[20px]"/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Browse;
