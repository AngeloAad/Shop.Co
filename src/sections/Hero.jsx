import React from 'react'
import Button from '../components/Button'
import { stats } from '../constants'
import { hero } from '../assets/images'

const Hero = () => {
  return (
    <section className="flex xl:flex-row flex-col">

        <div className="relative flex-1 flex-start flex-col md:pt-[140px] pt-[69px]"
        >
            <div
            className="flex flex-row justify-beetween
            items-center w-full"
            >
            <h1
                className="flex-1 font-montserrat font-black
            md:text-[64px] text-[34px] leading-none w-[577px]"
            >
                FIND CLOTHES <br />
                THAT MATCHES <br />
                YOUR STYLE <br />
            </h1>
            </div>
            <p className="p-g text-[16px] max-w-[545px] mt-5">
            Browse through our diverse range of meticulously 
            crafted garments, designed to bring out your 
            individuality and cater to your sense of style.
            </p>

            <Button label="Shop Now"
            className="font-montserrat text-[16px] md:w-[210px] 
            rounded-[62px] mt-6" />

            <div className="flex-start flex-wrap gap-10 pt-16">
                {stats.map((stat) => (
                    <div key={stat.id} className=" ">
                      <h4 className="font-montserrat font-semibold
                      sm:text-[40px] text-[24px] leading-none">{stat.value}</h4>
                      <p className="p-g sm:text-[16px] text-[12px]
                      ">{stat.title}</p>
                    </div>
                ))}
            </div>
        </div>

        <div
        className=" w-full flex justify-center items-center pt-16"
        >
            <img
            src={hero}
            alt="hero-pic"
            className="w-full h-[670px] max-md:h-[100%] pt-12"
            />
      </div>

    </section>
  )
}

export default Hero